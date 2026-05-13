# Pablo Fallas - Personal Portfolio

Personal portfolio site at [pablofallas.name](https://pablofallas.name).
Static, served from S3 + CloudFront, fully provisioned via Terraform.

## Status: not currently deployed

As of May 2026 the live site is **intentionally offline**. The AWS
infrastructure has been torn down via `terraform destroy` and the GitHub
Actions deploy workflow is commented out so pushes to `main` don't recreate
it.

The reason is the German Impressumspflicht (§5 DDG): any career-style
portfolio operated from Germany legally requires a verifiable street
address on a publicly-reachable Impressum page. Publishing my home address
on a publicly indexed page is a privacy trade-off I'd rather not make
right now, and at the moment I'm not actively job-hunting so the
cost / benefit of keeping the site live doesn't work out.

The codebase, terraform stack, design system and content here are
preserved as-is so the site can be re-deployed at any time without
re-engineering anything. To bring it back online:

1. Provision a valid Impressum address (a P.O. Box, `c/o` arrangement, or
   a virtual mailbox such as Hauspost works) and update the placeholder
   in [`src/pages/impressum.astro`](src/pages/impressum.astro) and
   [`src/pages/datenschutz.astro`](src/pages/datenschutz.astro).
2. Restore the deploy workflow by uncommenting the block at the bottom
   of [`.github/workflows/main.yml`](.github/workflows/main.yml).
3. Push to `main`. The first push will recreate the S3 bucket, CloudFront
   distribution, ACM cert and Route53 records via `terraform apply`, then
   sync the build artefacts.

The domain registration itself (in the Route53 hosted zone) is unaffected
by the destroy and remains owned.

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
  - AWS-managed `Managed-CachingOptimized` cache policy (long TTL, brotli + gzip)
  - Custom response headers policy: CSP (Google Fonts allowed), HSTS w/ preload,
    X-Frame-Options DENY, X-Content-Type-Options, Referrer-Policy, XSS protection,
    Permissions-Policy
  - `/404.html` returned with a real `404` status (no SPA fallback)
- **ACM** — DNS-validated TLS certificate
- **Route53** — apex and `www` aliases to the distribution
- **Terraform** — single state under `infra/states/pablofallas.name/`,
  remote backend on S3 + DynamoDB lock table, `terraform ~> 1.9`, `aws ~> 6.0`
- **GitHub Actions** — OIDC-based deploy (no long-lived AWS keys)
- **Dependabot** — weekly grouped PRs for npm / GitHub Actions / Terraform

## Development

```bash
nvm use                    # Node 22 (see .nvmrc)
npm ci

npm run dev                # local dev server (default http://localhost:4321)
npm run build              # static build to ./dist
npm run preview            # serve ./dist locally
npm run type-check         # astro check
npm run og-image           # regenerate public/og-image.png from the SVG in scripts/
```

## Project layout

```
.
├── astro.config.mjs                       # Astro + Tailwind + sitemap + PWA + icons
├── src/
│   ├── pages/
│   │   ├── index.astro                    # single-page portfolio (Hero + sections)
│   │   └── 404.astro
│   ├── layouts/Base.astro                 # HTML shell: meta, OG, fonts, PWA wiring,
│   │                                      # skip-to-content link
│   ├── components/                        # Nav, Hero, About, Expertise, Experience,
│   │                                      # EducationCerts, Contact, Footer
│   ├── styles/global.css                  # @import "tailwindcss" + @theme tokens
│   │                                      # + @utility custom classes
│   └── env.d.ts                           # Astro + PWA virtual-module types
├── public/                                # files served as-is
│   ├── favicon.{ico,svg}
│   ├── pablo-profile.jpg
│   ├── og-image.png                       # 1200x630 social-card image
│   ├── CV_Pablo_Fallas.pdf                # linked from Hero + Contact
│   └── robots.txt
├── scripts/generate-og-image.mjs          # SVG → PNG via sharp; run via `npm run og-image`
├── .github/
│   ├── workflows/main.yml                 # CI: type-check, build, terraform, deploy
│   └── dependabot.yml                     # weekly grouped update PRs
└── infra/states/pablofallas.name/         # Terraform: S3 + CloudFront + ACM + Route53
    ├── main.tf
    ├── providers.tf
    ├── variables.tf
    ├── outputs.tf
    └── .terraform.lock.hcl                # commit me — pins provider versions
```

## Deployment

The workflow at `.github/workflows/main.yml` runs on every push and pull request:

1. Checkout, install deps, configure AWS via OIDC (`AWS_ROLE_ARN` secret).
2. **Type-check** — `astro check` fails CI on TS / Astro diagnostics.
3. **Build** — `npm run build` produces `./dist`.
4. **Terraform fmt check** — fails CI on unformatted HCL.
5. **Terraform init + validate**.
6. **Terraform plan** (on pull requests) or **terraform apply** (on push to main).
7. **`aws s3 sync dist/ s3://pablofallas.name --delete`** uploads the build.
8. **CloudFront cache invalidation** (`/*`) so changes show up immediately
   (the distribution ID is read from `terraform output -raw cloudfront_distribution_id`).

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
- The CloudFront response headers policy name strips `.` characters from
  `var.service_name` because the CloudFront API only allows alphanumerics,
  dashes and underscores in policy names.
