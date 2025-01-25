output "cloudfront_domain_name" {
  description = "The domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "s3_bucket_name" {
  value = aws_s3_bucket.bucket.bucket
}

output "acm_certificate_arn" {
  value = aws_acm_certificate_validation.cert_validation.certificate_arn
}
