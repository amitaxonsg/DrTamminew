# Dr Tammi Quek Clinic Website

Next.js static website for **Dr Tammi Quek Developmental & Behavioural Paediatrics Clinic** in Singapore.

The site is designed for Singapore and regional families, with SEO/AEO/GEO-oriented content, manual enquiry screening and no automatic appointment booking.

---

## Current project status

- Framework: Next.js 16, React 19 and TypeScript
- Runtime: Node.js 22 through NVM
- Output: static export in `out/`
- Preview: `https://new.drtammiquek.com/`
- Production target: `https://drtammiquek.com/paediatrics-clinic/`
- Active branch: `feature/nextjs-redesign`
- Preview builds: `noindex`, `nofollow`, `noarchive`
- Preview `robots.txt`: `Disallow: /`
- Sitemap: generated during `next build`
- Latest verified export size: approximately 3 MB
- Deployment model: versioned static releases with an atomic symlink switch

The website does not provide online diagnosis, emergency support or automatic appointment selection. Every enquiry and appointment pathway remains human-managed by the clinic team.

## Branches

- `feature/chatgpt-redesign` — earlier PHP implementation
- `feature/nextjs-redesign` — current Next.js multi-page implementation
- `main` — production/release branch; merge only after approval

---

# Page architecture

## Main pages

| Route | Purpose |
|---|---|
| `/` | Main Singapore clinic landing page |
| `/about/` | Dr Tammi biography, qualifications and clinical philosophy |
| `/clinic/` | Novena location, clinic photographs and manual appointment process |
| `/services/` | Consultation, assessment planning, follow-up and coordination |
| `/concerns/` | Overview of developmental, behavioural and learning concerns |
| `/international-families/` | Information for Indonesia, Malaysia, the Philippines and regional families |
| `/schools-professionals/` | School, therapist and professional collaboration information |
| `/resources/` | Parent resources and internal-link content hub |
| `/faq/` | Visible answers and FAQ structured data |
| `/ai-guidance/` | Safe KIMI educational and enquiry-preparation guidance |
| `/contact/` | Manual enquiry instructions and SMTP2Mail-ready form scaffold |

## Individual concern pages

The static build generates:

```text
/concerns/autism-social-communication/
/concerns/adhd-attention-executive-function/
/concerns/developmental-delay/
/concerns/speech-language-development/
/concerns/learning-school-concerns/
/concerns/behaviour-emotional-wellbeing/
```

Concern and FAQ content is maintained centrally in:

```text
app/lib/site.ts
```

## Important source files

```text
app/page.tsx                         Homepage
app/layout.tsx                       Global metadata, fonts and site frame
app/globals.css                      Main responsive styling
app/forms.css                        Enquiry-form styling
app/lib/site.ts                      Clinic details, navigation, concerns and FAQ data
app/components/site-frame.tsx        Header, dropdown navigation and footer
app/components/page-hero.tsx         Shared page hero and JSON-LD helper
app/components/reveal-provider.tsx   Scroll animation and reduced-motion support
app/robots.ts                        Static preview/production robot rules
app/sitemap.ts                       Static sitemap generator
scripts/prepare-assets.mjs           Copies images and downloads official logo
docs/IMAGE-ASSET-MAP.md              Image naming and placement guide
docs/SEO-AEO-GEO-CONTENT-PLAN.md     Search and content strategy
```

---

# Branding and typography

## Official logo

The build downloads the official clinic logo from:

```text
https://drtammiquek.com/paediatrics-clinic/wp-content/uploads/2021/07/dr-tammi-logo-new.png
```

Generated path:

```text
/assets/brand/dr-tammi-logo-new.png
```

## Google fonts

The site uses `next/font/google`:

- **Manrope** — body text, navigation and controls
- **Cormorant Garamond** — headings

Only light and medium weights are loaded. Avoid heavy bold text unless specifically approved.

## Visual direction

- Burgundy, cream and soft rose branding
- Sleek, calm clinic presentation
- Natural and respectful family imagery
- Inclusive Singapore and international-family representation
- No distressed-child imagery
- No image or wording that implies AI diagnosis or treatment

---

# Image assets

Approved source images belong in:

```text
assets/images/
```

During the build, `scripts/prepare-assets.mjs` copies them into:

```text
public/assets/images/
```

The generated `public/assets/` directories are ignored by Git. Commit only approved source files under `assets/images/`.

## Real clinic and portrait filenames

```text
assets/images/clinic-waiting-area-1.jpg
assets/images/clinic-reception.jpg
assets/images/clinic-waiting-area-2.jpg
assets/images/clinic-entrance.jpg
assets/images/dr-tammi-current.jpg
```

## Temporary AI or commissioned-image filenames

```text
assets/images/services-family-consultation.jpg
assets/images/concerns-child-development.jpg
assets/images/international-family-approved.jpg
assets/images/schools-professionals-approved.jpg
assets/images/resources-parent-guide.jpg
assets/images/ai-guidance-family.jpg
```

Missing images do not stop the build. Styled placeholders remain visible until approved files are supplied.

---

# Environment variables

## Preview

```bash
NEXT_PUBLIC_SITE_ENV=preview
NEXT_PUBLIC_SITE_URL=https://new.drtammiquek.com
NEXT_PUBLIC_KIMI_URL=https://www.kimi.com/
NEXT_PUBLIC_ENQUIRY_URL=https://new.drtammiquek.com/contact/
```

Optional future form integration:

```bash
NEXT_PUBLIC_SMTP2MAIL_ENDPOINT=<approved SMTP2Mail form endpoint>
```

Optional social-sharing image override:

```bash
NEXT_PUBLIC_SOCIAL_IMAGE_URL=<approved absolute or site-relative image URL>
```

## Production

```bash
NEXT_PUBLIC_SITE_ENV=production
NEXT_PUBLIC_SITE_URL=https://drtammiquek.com/paediatrics-clinic
NEXT_PUBLIC_KIMI_URL=<approved clinic KIMI URL>
NEXT_PUBLIC_ENQUIRY_URL=https://drtammiquek.com/paediatrics-clinic/contact/
NEXT_PUBLIC_SMTP2MAIL_ENDPOINT=<approved SMTP2Mail endpoint>
NEXT_PUBLIC_SOCIAL_IMAGE_URL=<approved production sharing image>
```

`NEXT_PUBLIC_SITE_ENV=production` removes preview blocking. Never use it on the staging domain.

---

# Required versions

- Node.js 22 recommended
- Node.js 20.9 or later required by Next.js 16
- npm 10 or later recommended

On the VPS, Node 22 is loaded through NVM:

```bash
export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh"
nvm use 22
```

---

# Local development

```bash
cd /srv/drtammi/repository

export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh"
nvm use 22

npm install --no-audit --no-fund
npm run typecheck
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# Safe future update workflow

The VPS repository is:

```text
/srv/drtammi/repository
```

The terminal may return to another directory after a script finishes. Always explicitly `cd` to the Dr Tammi repository before Git or npm commands.

## 1. Confirm the correct repository and branch

```bash
cd /srv/drtammi/repository

git remote get-url origin
git branch --show-current
git rev-parse --short=12 HEAD
```

Expected:

```text
Origin: https://github.com/amitaxonsg/DrTamminew.git
Branch: feature/nextjs-redesign
```

## 2. Check local changes

```bash
git status --short --untracked-files=all
```

Next.js may modify or generate:

```text
tsconfig.json
next-env.d.ts
.next/
out/
tsconfig.tsbuildinfo
public/assets/images/
public/assets/brand/
package-lock.json
```

`.next/`, `out/`, TypeScript caches and generated public assets are ignored by Git.

Before pulling, restore only generated tracked files when they are the only tracked changes:

```bash
git restore --source=HEAD --worktree -- tsconfig.json next-env.d.ts
```

Do not run `git reset --hard`, `git clean -fd` or delete the repository when approved image files or other local work may exist.

## 3. Pull using fast-forward only

```bash
git fetch --prune origin feature/nextjs-redesign
git switch feature/nextjs-redesign
git pull --ff-only origin feature/nextjs-redesign
```

Never merge unrelated VPS-side changes into this branch.

## 4. Install and type-check

```bash
export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh"
nvm use 22

npm install --no-audit --no-fund
npm run typecheck
```

## 5. Clean and build the preview

```bash
rm -rf .next out
rm -f tsconfig.tsbuildinfo

NEXT_TELEMETRY_DISABLED=1 \
NEXT_PUBLIC_SITE_ENV=preview \
NEXT_PUBLIC_SITE_URL=https://new.drtammiquek.com \
NEXT_PUBLIC_KIMI_URL=https://www.kimi.com/ \
NEXT_PUBLIC_ENQUIRY_URL=https://new.drtammiquek.com/contact/ \
npm run build
```

## 6. Verify the static export

```bash
test -f out/index.html
test -f out/about/index.html
test -f out/clinic/index.html
test -f out/services/index.html
test -f out/concerns/index.html
test -f out/international-families/index.html
test -f out/schools-professionals/index.html
test -f out/resources/index.html
test -f out/faq/index.html
test -f out/ai-guidance/index.html
test -f out/contact/index.html
test -f out/robots.txt
test -f out/sitemap.xml
test -f out/assets/brand/dr-tammi-logo-new.png
test -d out/_next

grep -qi noindex out/index.html
grep -q 'Disallow: /' out/robots.txt
grep -q 'new.drtammiquek.com' out/sitemap.xml

find out/concerns -mindepth 2 -maxdepth 2 -name index.html -printf '%h\n' | sort
du -sh out
```

Expected preview robots file:

```text
User-Agent: *
Disallow: /

Sitemap: https://new.drtammiquek.com/sitemap.xml
```

## Static metadata-route requirement

Because the project uses:

```js
output: 'export'
```

both metadata routes must include:

```ts
export const dynamic = 'force-static';
```

This is already configured in:

```text
app/robots.ts
app/sitemap.ts
```

Do not remove it, or static builds will fail while collecting page data.

---

# VPS release deployment

## Directory structure

```text
/srv/drtammi/repository                 Git working copy
/var/www/drtammi-next/releases          Versioned immutable releases
/var/www/new.drtammiquek.com/current    Active release symlink
```

Confirm the active path before changing anything:

```bash
readlink -f /var/www/new.drtammiquek.com/current
```

## Create a versioned release

```bash
cd /srv/drtammi/repository

STAMP="$(date +%Y%m%d-%H%M%S)"
COMMIT="$(git rev-parse --short=12 HEAD)"
RELEASE="/var/www/drtammi-next/releases/${STAMP}-${COMMIT}"

mkdir -p "$RELEASE"
cp -a out/. "$RELEASE/"

chown -R root:www-data "$RELEASE"
find "$RELEASE" -type d -exec chmod 755 {} +
find "$RELEASE" -type f -exec chmod 644 {} +
```

## Pre-test before activation

```bash
python3 -m http.server 8099 \
  --bind 127.0.0.1 \
  --directory "$RELEASE"
```

In another shell:

```bash
curl -I http://127.0.0.1:8099/
curl http://127.0.0.1:8099/ | grep -i 'Dr Tammi'
```

Stop the temporary server after testing.

## Atomic activation

```bash
ACTIVE="/var/www/new.drtammiquek.com/current"
TEMP="${ACTIVE}.new-$(date +%s)"

ln -s "$RELEASE" "$TEMP"
mv -Tf "$TEMP" "$ACTIVE"
```

This does not require editing or reloading Nginx when the existing Nginx document root already points to the active symlink.

## Verify through local Nginx

```bash
curl --insecure \
  --resolve new.drtammiquek.com:443:127.0.0.1 \
  -I https://new.drtammiquek.com/

curl --insecure \
  --resolve new.drtammiquek.com:443:127.0.0.1 \
  https://new.drtammiquek.com/ | grep -i 'Dr Tammi'
```

Verify individual pages:

```bash
for PATH in \
  / \
  /about/ \
  /clinic/ \
  /services/ \
  /concerns/ \
  /international-families/ \
  /schools-professionals/ \
  /resources/ \
  /faq/ \
  /ai-guidance/ \
  /contact/ \
  /robots.txt \
  /sitemap.xml

do
  curl --silent --insecure \
    --resolve new.drtammiquek.com:443:127.0.0.1 \
    --output /dev/null \
    --write-out "%{http_code}  ${PATH}\n" \
    "https://new.drtammiquek.com${PATH}"
done
```

All should return HTTP 200.

## Rollback

Keep the previous release path before switching:

```bash
OLD_RELEASE="$(readlink -f /var/www/new.drtammiquek.com/current)"
```

Rollback atomically:

```bash
ACTIVE="/var/www/new.drtammiquek.com/current"
TEMP="${ACTIVE}.rollback-$(date +%s)"

ln -s "$OLD_RELEASE" "$TEMP"
mv -Tf "$TEMP" "$ACTIVE"
```

Static rollback does not require rebuilding.

## Release retention

Keep the latest three to five known-good releases.

```bash
readlink -f /var/www/new.drtammiquek.com/current
ls -1dt /var/www/drtammi-next/releases/*
```

Never delete the release currently referenced by the active symlink.

---

# Docker deployment

The repository also contains Docker support for building the static export with Node 22 and serving it through Nginx.

## Build

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_ENV=preview \
  --build-arg NEXT_PUBLIC_SITE_URL=https://new.drtammiquek.com \
  --build-arg NEXT_PUBLIC_KIMI_URL=https://www.kimi.com/ \
  --build-arg NEXT_PUBLIC_ENQUIRY_URL=https://new.drtammiquek.com/contact/ \
  -t drtammi-next:preview .
```

## Start

```bash
docker compose up -d --build
```

The default container endpoint is expected at:

```text
127.0.0.1:8088
```

## Health checks

```bash
curl -I http://127.0.0.1:8088/healthz
curl -I http://127.0.0.1:8088/
```

Keep the host Nginx and existing SSL certificate in front of the local container endpoint. Do not expose the container port directly to the public internet without a reviewed firewall and proxy design.

---

# Content and clinical rules

- Use whole-child, family-centred language.
- Describe development, behaviour, attention, communication, learning and emotional wellbeing in context.
- State clearly that appointment dates are arranged manually.
- Do not add an automatic booking calendar.
- Do not describe KIMI or any AI system as a diagnostic or assessment tool.
- Keep AI guidance educational and non-identifying.
- Do not request a child’s identification number or exact date of birth in an unsecured initial form.
- Do not claim guaranteed outcomes, superiority or instant assessment.
- Health-information content should be reviewed by the clinic before production publication.
- Keep Dr Tammi’s qualifications, address and contact details consistent across pages.

---

# Security and operations

- Never expose `.git`, `node_modules`, `.env`, source files or build logs through Nginx.
- Never commit API secrets, SMTP credentials, private keys or patient information.
- Do not log enquiry text or medical information in analytics events.
- Use `git pull --ff-only` for VPS updates.
- Run `npm run typecheck` and `npm run build` before every release.
- Keep preview builds at `NEXT_PUBLIC_SITE_ENV=preview`.
- Preserve an immediate rollback release for every activation.
- Keep Cloudflare, SSL and Nginx security headers enabled.
- Do not apply the old VPS stash unless it has first been reviewed; it was created from an earlier branch state.

---

# Current successful build verification

The multi-page preview build has been successfully verified with:

- all main routes exported
- six concern pages generated through `generateStaticParams`
- `robots.txt` generated with `Disallow: /`
- `sitemap.xml` generated for the preview domain
- official logo downloaded into the export
- static assets generated under `out/_next`
- export size approximately 3 MB

A successful build does not change the active website. Deployment is a separate versioned release and atomic activation step.
