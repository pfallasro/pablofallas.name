##############################################################################
# FETCH EXISTING ROUTE53 ZONE
##############################################################################
# Make sure you have a public hosted zone in Route53 for your domain_name
data "aws_route53_zone" "selected" {
  name         = var.domain_name
  private_zone = false
}

##############################################################################
# S3 BUCKET (Private, for CloudFront origin)
##############################################################################
resource "aws_s3_bucket" "bucket" {
  bucket = var.service_name
}

resource "aws_s3_bucket_public_access_block" "block_public_access" {
  bucket                  = aws_s3_bucket.bucket.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

##############################################################################
# S3 BUCKET POLICY (Allow CloudFront to read your bucket)
##############################################################################
# We’ll use an Origin Access Control or (older) Origin Access Identity.
# This uses the new “Origin Access Control” approach (recommended):
resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = var.service_name
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
  description                       = "OAC for my portfolio bucket"
}

# The policy that allows the CloudFront OAC to read from S3
data "aws_iam_policy_document" "bucket_policy_doc" {
  statement {
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.bucket.arn}/*"]
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.site.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.bucket.id
  policy = data.aws_iam_policy_document.bucket_policy_doc.json
}

##############################################################################
# ACM CERTIFICATE - DNS validation
##############################################################################
resource "aws_acm_certificate" "cert" {
  domain_name       = var.domain_name
  validation_method = "DNS"

  subject_alternative_names = [
    var.subdomain
  ]
}

# DNS records for validating the certificate
resource "aws_route53_record" "cert_validation_main" {
  zone_id = data.aws_route53_zone.selected.zone_id
  name    = tolist(aws_acm_certificate.cert.domain_validation_options)[0].resource_record_name
  type    = tolist(aws_acm_certificate.cert.domain_validation_options)[0].resource_record_type
  records = [tolist(aws_acm_certificate.cert.domain_validation_options)[0].resource_record_value]
  ttl     = 300
}

# If there's a SAN (Subject Alternative Name) for the subdomain
resource "aws_route53_record" "cert_validation_san" {
  for_each = { for idx, val in tolist(aws_acm_certificate.cert.domain_validation_options) : idx => val if idx > 0 }
  zone_id  = data.aws_route53_zone.selected.zone_id
  name     = each.value.resource_record_name
  type     = each.value.resource_record_type
  records  = [each.value.resource_record_value]
  ttl      = 300
}

# Validate the certificate once DNS records are created
resource "aws_acm_certificate_validation" "cert_validation" {
  certificate_arn = aws_acm_certificate.cert.arn
  validation_record_fqdns = concat(
    [aws_route53_record.cert_validation_main.fqdn],
    [for r in aws_route53_record.cert_validation_san : r.fqdn]
  )
}

##############################################################################
# CLOUDFRONT DISTRIBUTION
##############################################################################
resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  comment             = "CDN for my website"
  default_root_object = "index.html"

  # Associate the validated certificate
  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.cert_validation.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # Domain name(s) you want to serve
  aliases = [
    var.subdomain,
    var.domain_name
  ]

  # Default (and only) behavior
  origin {
    domain_name = aws_s3_bucket.bucket.bucket_regional_domain_name
    origin_id   = "S3-PortfolioOrigin"
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  default_cache_behavior {
    target_origin_id = "S3-PortfolioOrigin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    compress         = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  # Optional custom error response to handle React router fallback:
  # e.g. redirect 404 errors to index.html
  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }
}

##############################################################################
# ROUTE53 RECORD: ALIAS to the CloudFront Distribution
##############################################################################
resource "aws_route53_record" "site_alias" {
  zone_id = data.aws_route53_zone.selected.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

# If you also want "www.example.com" to point to the same distribution:
resource "aws_route53_record" "www_alias" {
  count   = var.subdomain != var.domain_name ? 1 : 0
  zone_id = data.aws_route53_zone.selected.zone_id
  name    = var.subdomain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
