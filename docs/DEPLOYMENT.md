# Deployment runbook

## Target

Deploy to the existing subdirectory:

```text
/public_html/paediatrics-clinic/
```

Expected public URL:

```text
https://drtammiquek.com/paediatrics-clinic/
```

## Before deployment

1. Complete `docs/CONTENT-APPROVAL.md`.
2. Replace all placeholder image paths listed in `assets/images/README.md`.
3. Create a full backup of the current live directory.
4. Record the current permissions and PHP version.
5. Run the GitHub validation workflow and local PHP lint.
6. Test the appointment form using non-sensitive test data.

## Upload

1. Upload the repository contents into a new release directory outside the live path.
2. Do not upload `.git/`, local environment files or runtime logs.
3. Confirm PHP 8.1 or later.
4. Set environment values securely through the hosting configuration:

```text
APP_ENV=production
APP_BASE_PATH=/paediatrics-clinic
APP_CANONICAL_URL=https://drtammiquek.com/paediatrics-clinic
CLINIC_EMAIL=<approved clinic email>
MAIL_FROM=<approved website sender>
KIMI_CHAT_URL=<approved educational assistant URL>
```

5. Confirm Apache allows the required `.htaccess` directives.
6. Confirm the email sender is permitted by the domain SPF/DKIM configuration.

## Release

1. Put the current site into a short maintenance window if required.
2. Rename the existing live directory to a timestamped backup.
3. Rename the tested release directory to `paediatrics-clinic`.
4. Check the homepage, all navigation links, images, sitemap, robots file and 404 page.
5. Submit a test appointment request with dummy information.
6. Test desktop and mobile layouts.
7. Confirm the site is indexable only when `APP_ENV=production`.

## Rollback

1. Rename the unsuccessful release directory.
2. Restore the timestamped previous directory to `paediatrics-clinic`.
3. Confirm the former site and enquiry method are working.
4. Keep the failed release for investigation without exposing it publicly.

## Post-launch

- Verify Google Search Console indexing and sitemap processing.
- Confirm analytics, if enabled, receives no form contents or medical information.
- Review enquiry delivery and spam controls during the first week.
- Schedule periodic content and security reviews.
