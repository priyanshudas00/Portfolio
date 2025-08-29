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
const netlifySourceDir = './netlify';
const netlifyDestDir = './dist/netlify';

if (existsSync(netlifySourceDir)) {
  console.log('Copying netlify functions to dist directory...');
  copyDir(netlifySourceDir, netlifyDestDir);
  console.log('Functions copied successfully!');
} else {
  console.log('Netlify directory not found, skipping copy...');
}

// Copy server directory to dist/server (for view count data)
const serverSourceDir = './server';
const serverDestDir = './dist/server';

if (existsSync(serverSourceDir)) {
  console.log('Copying server directory to dist directory...');
  copyDir(serverSourceDir, serverDestDir);
  console.log('Server directory copied successfully!');
} else {
  console.log('Server directory not found, skipping copy...');
}

// Copy media directory to dist/media (for resume and other static assets)
const mediaSourceDir = './src/media';
const mediaDestDir = './dist/media';

if (existsSync(mediaSourceDir)) {
  console.log('Copying media files to dist directory...');
  copyDir(mediaSourceDir, mediaDestDir);
  console.log('Media files copied successfully!');
} else {
  console.log('Media directory not found, skipping copy...');
}
