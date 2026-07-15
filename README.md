# Dr Tammi Quek Clinic Website

Next.js static website for Dr Tammi Quek Developmental & Behavioural Paediatrics Clinic.

## Current implementation

- Next.js 16 with React 19 and TypeScript
- Static export to `out/`
- Responsive clinic homepage based on the approved layout
- Modern sticky desktop and mobile navigation
- Scroll-reveal animation with reduced-motion support
- KIMI AI educational-assistant panel
- SEO, AEO and GEO-oriented semantic content
- MedicalClinic, WebSite, WebPage and FAQ structured data
- Preview builds default to `noindex`
- Existing approved image filenames are reused and can be replaced later without redesigning the page

## Branches

- `feature/chatgpt-redesign` — earlier PHP implementation
- `feature/nextjs-redesign` — current Next.js implementation
- `main` — protected release branch; merge only after approval

## Required versions

- Node.js 22 recommended
- Node.js 20.9 or later required by Next.js 16
- npm 10 or later recommended

## Environment variables

```bash
NEXT_PUBLIC_SITE_ENV=preview
NEXT_PUBLIC_SITE_URL=https://new.drtammiquek.com
NEXT_PUBLIC_KIMI_URL=https://www.kimi.com/
NEXT_PUBLIC_ENQUIRY_URL=https://drtammiquek.com/paediatrics-clinic/contact/
```

For production:

```bash
NEXT_PUBLIC_SITE_ENV=production
NEXT_PUBLIC_SITE_URL=https://drtammiquek.com/paediatrics-clinic
NEXT_PUBLIC_KIMI_URL=<approved KIMI assistant URL>
NEXT_PUBLIC_ENQUIRY_URL=https://drtammiquek.com/paediatrics-clinic/contact/
```

## Local development

```bash
npm install --no-audit --no-fund
npm run typecheck
npm run dev
```

Open `http://localhost:3000`.

## Static production build

```bash
NEXT_TELEMETRY_DISABLED=1 \
NEXT_PUBLIC_SITE_ENV=preview \
NEXT_PUBLIC_SITE_URL=https://new.drtammiquek.com \
NEXT_PUBLIC_KIMI_URL=https://www.kimi.com/ \
NEXT_PUBLIC_ENQUIRY_URL=https://drtammiquek.com/paediatrics-clinic/contact/ \
npm run build
```

The generated website is written to:

```text
out/
```

Verify before deployment:

```bash
test -f out/index.html
test -d out/_next
grep -qi noindex out/index.html
grep -qi "Dr Tammi" out/index.html
```

---

# Permanent VPS deployment

The current preview uses a spare Ubuntu VPS with Nginx. The Git checkout and public release should remain separate.

## Recommended directories

```text
/srv/drtammi/repository             Git working copy
/var/www/drtammi-next/releases      Immutable static releases
/var/www/new.drtammiquek.com/current  Active release symlink or site root
```

Never expose `.git`, `node_modules`, `.env`, build logs or source files through Nginx.

## First-time VPS setup

Install Node 22 with NVM for the deployment user:

```bash
export NVM_DIR="$HOME/.nvm"
git clone --depth 1 https://github.com/nvm-sh/nvm.git "$NVM_DIR"
. "$NVM_DIR/nvm.sh"
nvm install 22
nvm alias default 22
nvm use 22
```

Clone the required branch:

```bash
mkdir -p /srv/drtammi
git clone \
  --branch feature/nextjs-redesign \
  --single-branch \
  https://github.com/amitaxonsg/DrTamminew.git \
  /srv/drtammi/repository
```

## Safe update and build

```bash
cd /srv/drtammi/repository

. "$HOME/.nvm/nvm.sh"
nvm use 22

git fetch --prune origin feature/nextjs-redesign
git switch feature/nextjs-redesign
git pull --ff-only origin feature/nextjs-redesign

npm install --no-audit --no-fund
npm run typecheck

NEXT_TELEMETRY_DISABLED=1 \
NEXT_PUBLIC_SITE_ENV=preview \
NEXT_PUBLIC_SITE_URL=https://new.drtammiquek.com \
NEXT_PUBLIC_KIMI_URL=https://www.kimi.com/ \
NEXT_PUBLIC_ENQUIRY_URL=https://drtammiquek.com/paediatrics-clinic/contact/ \
npm run build
```

Do not deploy when `git status --porcelain` shows unexpected tracked changes.

## Versioned release

```bash
STAMP="$(date +%Y%m%d-%H%M%S)"
COMMIT="$(git rev-parse --short=12 HEAD)"
RELEASE="/var/www/drtammi-next/releases/${STAMP}-${COMMIT}"

mkdir -p "$RELEASE"
cp -a out/. "$RELEASE/"
chown -R root:www-data "$RELEASE"
find "$RELEASE" -type d -exec chmod 755 {} +
find "$RELEASE" -type f -exec chmod 644 {} +
```

Pre-test the release before switching Nginx:

```bash
python3 -m http.server 8099 --bind 127.0.0.1 --directory "$RELEASE"
curl -I http://127.0.0.1:8099/
```

## Atomic activation

Use a temporary symlink and atomic rename:

```bash
ACTIVE="/var/www/new.drtammiquek.com/current"
TEMP="${ACTIVE}.new"

ln -s "$RELEASE" "$TEMP"
mv -Tf "$TEMP" "$ACTIVE"
```

If the existing Nginx document root is itself the active symlink, use that exact path instead. Confirm it from `nginx -T` before changing anything.

## Verification

```bash
curl --insecure \
  --resolve new.drtammiquek.com:443:127.0.0.1 \
  -I https://new.drtammiquek.com/

curl --insecure \
  --resolve new.drtammiquek.com:443:127.0.0.1 \
  https://new.drtammiquek.com/ | grep -i "Dr Tammi"
```

Also confirm one generated CSS or JavaScript asset returns HTTP 200.

## Rollback

Keep the previous release path before switching. Roll back by atomically repointing the active symlink:

```bash
ln -s /var/www/drtammi-next/releases/<previous-release> "${ACTIVE}.rollback"
mv -Tf "${ACTIVE}.rollback" "$ACTIVE"
```

Static release rollback does not require rebuilding the application.

## Release retention

Keep the latest three to five known-good releases. Remove older releases only after confirming the active symlink does not reference them.

```bash
readlink -f /var/www/new.drtammiquek.com/current
ls -1dt /var/www/drtammi-next/releases/*
```

---

# Docker deployment

The included Docker configuration builds the static export with Node 22 and serves it from an unprivileged Nginx container-facing setup.

## Build the image

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_ENV=preview \
  --build-arg NEXT_PUBLIC_SITE_URL=https://new.drtammiquek.com \
  --build-arg NEXT_PUBLIC_KIMI_URL=https://www.kimi.com/ \
  --build-arg NEXT_PUBLIC_ENQUIRY_URL=https://drtammiquek.com/paediatrics-clinic/contact/ \
  -t drtammi-next:preview .
```

## Start with Docker Compose

```bash
docker compose up -d --build
```

The default Compose configuration binds the container only to:

```text
127.0.0.1:8088
```

Place the host Nginx reverse proxy and existing SSL certificate in front of this local address. Do not expose the container port worldwide unless a firewall and proxy design have been reviewed.

## Docker health check

```bash
curl -I http://127.0.0.1:8088/healthz
curl -I http://127.0.0.1:8088/
```

## Docker rollback

Tag each approved image with its Git commit:

```bash
COMMIT="$(git rev-parse --short=12 HEAD)"
docker build -t "drtammi-next:${COMMIT}" .
```

Rollback by changing the image tag in `docker-compose.yml` or by starting the previous known-good tag.

---

# Security and operational notes

- Keep preview builds at `NEXT_PUBLIC_SITE_ENV=preview` so they remain `noindex`.
- Never commit private keys, SMTP credentials, API secrets or patient information.
- The KIMI panel is educational and must not claim to diagnose or replace medical advice.
- Do not include enquiry text or medical details in analytics events.
- Run `npm run typecheck` and `npm run build` before every deployment.
- Use `git pull --ff-only`; do not merge unreviewed server-side changes.
- Keep Cloudflare and Nginx security headers enabled.
- Maintain an immediate rollback path for every release.
- Replace illustrative images only with approved images and preserve the visible no-patient disclaimer where applicable.
