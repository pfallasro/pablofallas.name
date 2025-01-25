# Pablo Fallas - Personal Portfolio

A modern, responsive portfolio website showcasing my experience as a Senior DevOps Engineer. This project demonstrates full-stack capabilities, cloud infrastructure automation, and modern web development practices.

## 🔗 Live Site

[pablofallas.name](https://pablofallas.name)

## 📋 Project Overview

This portfolio serves as both a professional showcase and a technical demonstration of DevOps and cloud engineering skills. The entire stack—from frontend development to cloud infrastructure deployment—is managed through Infrastructure as Code (IaC) and automated CI/CD pipelines.

## 🛠️ Technology Stack

### Frontend
- **React 19** - Latest React with modern hooks and features
- **TypeScript** - Type-safe development
- **Vite** - Next-generation build tool for fast development and optimized production builds
- **Material-UI (MUI)** - Component library for consistent, professional UI
- **Emotion** - CSS-in-JS styling solution
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **PWA (Progressive Web App)** - Offline support and app-like experience using vite-plugin-pwa

### Infrastructure & DevOps
- **AWS S3** - Static website hosting
- **AWS CloudFront** - CDN for global content delivery
- **Terraform** - Infrastructure as Code for AWS resources
- **GitHub Actions** - CI/CD automation
- **AWS OIDC** - Secure authentication without long-lived credentials

## 🏗️ Architecture

The site follows a modern JAMstack architecture:
1. Static React application built with Vite
2. Hosted on S3 with CloudFront distribution
3. Infrastructure provisioned via Terraform
4. Automated deployments through GitHub Actions

### Build Optimizations
- Code splitting for vendor libraries (React, animations, icons)
- Terser minification with console removal
- Optimized asset naming for CloudFront caching
- Separate chunks for images and fonts
- Service Worker for offline functionality

## 🚀 CI/CD Pipeline

The GitHub Actions workflow (`/.github/workflows/main.yml`) automates:
1. **Build** - Compiles TypeScript and bundles assets with Vite
2. **Infrastructure** - Validates and applies Terraform configurations
3. **Deploy** - Syncs build artifacts to S3
4. **Invalidation** - Managed by Terraform for CloudFront

The pipeline uses AWS OIDC for secure, temporary credentials without storing access keys.

## 💻 Development

### Prerequisites
- Node.js >= 20.0.0
- npm

### Available Scripts

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

## 📁 Project Structure

```
├── src/
│   ├── components/     # React components (Hero, Experience, Skills, etc.)
│   ├── pages/          # Page-level components
│   ├── App.tsx         # Main application component
│   └── index.tsx       # Application entry point
├── infra/              # Terraform infrastructure code
├── public/             # Static assets
├── .github/workflows/  # CI/CD pipeline definitions
└── vite.config.ts      # Build configuration
```

## 🔒 Infrastructure as Code

All AWS resources are managed through Terraform in the `/infra` directory:
- S3 bucket configuration
- CloudFront distribution
- DNS and SSL/TLS certificates
- IAM roles and policies

## 📝 Key Features

- **Responsive Design** - Mobile-first approach with smooth animations
- **Performance Optimized** - Lazy loading, code splitting, and CDN delivery
- **Progressive Web App** - Installable with offline support
- **Automated Deployments** - Push to main branch triggers full deployment
- **Type Safety** - TypeScript throughout the codebase
- **Modern DevOps** - Infrastructure as Code with zero-downtime deployments

## 📫 Contact

This portfolio includes a contact section with links to professional profiles and communication channels.

---

**Note for Interviewers**: This project showcases end-to-end ownership of a modern web application, from React development to cloud infrastructure automation. The tech stack and deployment architecture reflect current industry best practices for scalable, maintainable web applications.
