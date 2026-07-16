import { access, cp, mkdir, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const source = path.join(root, 'assets', 'images');
const target = path.join(root, 'public', 'assets', 'images');
const brandTarget = path.join(root, 'public', 'assets', 'brand');
const logoTarget = path.join(brandTarget, 'dr-tammi-logo-new.png');
const logoUrl =
  'https://drtammiquek.com/paediatrics-clinic/wp-content/uploads/2021/07/dr-tammi-logo-new.png';

await mkdir(target, { recursive: true });
await mkdir(brandTarget, { recursive: true });

try {
  await access(source, constants.R_OK);
  await cp(source, target, { recursive: true, force: true });
  console.log(`Copied website images to ${target}`);
} catch {
  console.warn('No assets/images directory was found; continuing with styled image placeholders.');
}

try {
  const response = await fetch(logoUrl, {
    headers: { 'user-agent': 'DrTammiWebsiteBuild/1.0' },
    signal: AbortSignal.timeout(20000),
  });

  if (!response.ok) {
    throw new Error(`Logo download returned HTTP ${response.status}`);
  }

  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.includes('image/')) {
    throw new Error(`Unexpected logo content type: ${contentType || 'unknown'}`);
  }

  await writeFile(logoTarget, Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded official clinic logo to ${logoTarget}`);
} catch (error) {
  console.warn(`Official logo download failed: ${error instanceof Error ? error.message : error}`);
  console.warn('The build will continue, but the logo path must be supplied before deployment.');
}
