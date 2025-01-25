variable "service_name" {
  description = "Name of the service"
  type        = string
  default     = "pablofallas.name"
}

variable "domain_name" {
  type        = string
  description = "The main domain (apex) for your site."
  default     = "pablofallas.name"
}

# If you want to use www.example.com specifically, you can set this variable to "www.example.com"
variable "subdomain" {
  type        = string
  description = "Subdomain for your site, e.g., www.example.com"
  default     = "www.pablofallas.name"
}
