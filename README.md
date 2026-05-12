# Pablo Fallas - Personal Portfolio

Personal portfolio site at [pablofallas.name](https://pablofallas.name).
Static, served from S3 + CloudFront, fully provisioned via Terraform.

## Stack

### Frontend
- **Astro 6** — static site generator (zero JS by default)
- **Tailwind CSS 4** — CSS-first config via `@theme` in `src/styles/global.css`,
  wired through `@tailwindcss/vite` (no `tailwind.config.ts`, no `@astrojs/tailwind`)
- **TypeScript 6**
- **astro-icon + @iconify-json/mdi** — SVG icons, only ships what is used
- **@vite-pwa/astro** — service worker + web app manifest (Workbox under the hood)
- **@astrojs/sitemap** — auto-generated `sitemap-index.xml`

### Infrastructure
- **AWS S3** — origin for static assets (private bucket, no website endpoint)
- **AWS CloudFront** — CDN with Origin Access Control to the bucket
  - Response headers policy for security headers (CSP, HSTS, X-Frame-Options, etc.)
  - `/404.html` returned with a real `404` status
- **ACM** — DNS-validated TLS certificate
- **Route53** — apex and `www` aliases to the distribution
- **Terraform** — single state under `infra/states/pablofallas.name/`
- **GitHub Actions** — OIDC-based deploy (no long-lived AWS keys)

## Development

```bash
nvm use                    # Node 20 (see .nvmrc)
npm ci

npm run dev                # local dev server on http://localhost:4321
npm run build              # static build to ./dist
npm run preview            # serve ./dist locally
npm run type-check         # astro check
```

## Project layout

```
.
├── astro.config.mjs       # Astro + Tailwind + sitemap + PWA + icons
├── src/
│   ├── pages/
│   │   ├── index.astro    # single-page portfolio (Hero + sections)
│   │   └── 404.astro
│   ├── layouts/Base.astro # HTML shell: meta, OG, fonts, PWA wiring
│   ├── components/        # Nav, Hero, About, Expertise, Experience,
│   │                      # EducationCerts, Contact, Footer
│   └── styles/global.css  # Tailwind directives + a few utilities
├── public/                # files served as-is (favicon, profile, CV PDF, robots)
└── infra/states/pablofallas.name/   # Terraform: S3 + CloudFront + ACM + Route53
```

## Deployment

The workflow at `.github/workflows/main.yml`:

1. Checks out and installs deps.
2. Assumes the OIDC role configured via `AWS_ROLE_ARN` secret.
3. `npm run build` produces `./dist`.
4. `terraform plan` (on PR) or `terraform apply` (on push to `main`).
5. `aws s3 sync dist/ s3://pablofallas.name --delete` uploads the build.
6. CloudFront cache invalidation (`/*`) so changes show up immediately.

## Notes

- Security headers (CSP, HSTS, X-Frame-Options, Permissions-Policy, etc.) are
  applied by the CloudFront response headers policy in `infra/.../main.tf`,
  not by a `public/_headers` file — CloudFront does not read that convention.
- The site is intentionally a single page with anchor-linked sections. The
  nav scrolls smoothly between Hero, About, Expertise, Experience, Education
  and Contact.
- `.npmrc` sets `legacy-peer-deps=true` because `@vite-pwa/astro@1.2.0` still
  declares its peer as `astro: ^1–^5`. The underlying `vite-plugin-pwa`
  supports Astro 6 / Vite 7 fine — this is just an outdated peer declaration
  in the wrapper. Remove `.npmrc` once a release with updated peers ships.
