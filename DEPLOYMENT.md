# Deployment (Vercel + GoDaddy DNS)

This project is a Next.js app. The recommended hosting setup is Vercel (build + runtime) with the domain DNS hosted in GoDaddy.

## 1) Create the Vercel project

- Create a new project in Vercel and import this GitHub repository.
- Framework preset: **Next.js** (auto-detected).
- Package manager: **pnpm** (auto-detected due to `pnpm-lock.yaml`).
- Build command: `pnpm build` (default).

## 2) Get Vercel credentials for GitHub Actions

GitHub Actions deploys via the Vercel CLI and needs:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### 2.1 Create `VERCEL_TOKEN`

In Vercel:
- Go to Account Settings → Tokens
- Create a token and copy it

Add it to GitHub repo secrets as `VERCEL_TOKEN`.

### 2.2 Get `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`

Run locally in this repo:

```bash
pnpm dlx vercel login
pnpm dlx vercel link
```

After linking, Vercel writes `.vercel/project.json`. Read the IDs from there and add them as GitHub repo secrets:

- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Do **not** commit `.vercel/`.

## 3) GitHub Actions workflows

This repo includes:

- `.github/workflows/ci.yml`
  - Runs on PRs and on `main`
  - `pnpm build`
- `.github/workflows/vercel.yml`
  - Deploys **Preview** for non-draft PRs
  - Deploys **Production** on pushes to `main`

### Required GitHub secrets

Add these in GitHub → Settings → Secrets and variables → Actions:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## 4) Add the domain in Vercel

In Vercel → Project Settings → Domains:

- Add `sofile.com`
- Add `www.sofile.com`

Vercel will show the DNS records you must create in GoDaddy.

## 5) Update DNS in GoDaddy

In GoDaddy DNS management:

- Create/Update `CNAME` for `www` to the value Vercel provides (commonly `cname.vercel-dns.com`)
- For the apex (`@` / `sofile.com`), follow Vercel’s instructions (often `A` record(s) to Vercel IPs or an `ALIAS/ANAME` if your DNS supports it)

Wait for DNS propagation. Once propagated, Vercel automatically issues and renews SSL certificates (no purchase needed).

## 6) Cutover checklist

- Confirm Vercel shows the domain as **Valid Configuration**
- Confirm HTTPS works for both:
  - `https://sofile.com`
  - `https://www.sofile.com`
- Optionally configure redirect:
  - In Vercel, redirect `www` → apex (or vice versa) to keep a single canonical domain

## Notes

- If you still use CloudFront for assets, keep it on a separate subdomain (e.g. `cdn.sofile.com`) to avoid mixing concerns.
- When you add real payments/auth/webhooks later, prefer server-side secrets in Vercel project env vars (not `NEXT_PUBLIC_*`).
