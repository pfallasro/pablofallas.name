#######################################################
# Terraform Remote State Configuration
#######################################################
terraform {
  backend "s3" {
    bucket         = "falafel-terraform-state-bucket"
    key            = "terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "falafel-terraform-lock-table"
    encrypt        = true
  }
}

#######################################################
# Terraform & Provider Configuration
#######################################################
terraform {
  required_version = ">= 1.0.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.0.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  default_tags {
    tags = {
      service-name      = var.service_name
      terraform-managed = "true"
    }
  }
}
