import { existsSync, mkdirSync, readdirSync, copyFileSync } from 'fs';
import { join } from 'path';

function copyDir(src, dest) {
  // Create destination directory if it doesn't exist
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  // Copy all files and directories
  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// Copy netlify directory to dist/netlify
const sourceDir = './netlify';
const destDir = './dist/netlify';

if (existsSync(sourceDir)) {
  console.log('Copying netlify functions to dist directory...');
  copyDir(sourceDir, destDir);
  console.log('Functions copied successfully!');
} else {
  console.log('Netlify directory not found, skipping copy...');
}
