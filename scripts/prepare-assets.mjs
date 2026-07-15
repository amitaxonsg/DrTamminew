import { cp, mkdir, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const source = path.join(root, 'assets', 'images');
const target = path.join(root, 'public', 'assets', 'images');

await mkdir(target, { recursive: true });

try {
  await access(source, constants.R_OK);
  await cp(source, target, { recursive: true, force: true });
  console.log(`Copied website images to ${target}`);
} catch {
  console.warn('No legacy assets/images directory was found; continuing with Next.js placeholders.');
}
