const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const standalone = path.join(root, '.next', 'standalone');
const staticSrc = path.join(root, '.next', 'static');
const staticDst = path.join(standalone, '.next', 'static');
const publicSrc = path.join(root, 'public');
const publicDst = path.join(standalone, 'public');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

copyDir(staticSrc, staticDst);
copyDir(publicSrc, publicDst);

console.log('Standalone assets copied to .next/standalone');
