// Generates the favicon set and PWA icons for the Costa Rica · Night design.
// Run with `node scripts/generate-icons.mjs`.
//
// Outputs:
//   public/favicon.svg
//   public/favicon.ico         (PNG-in-ICO, 32x32)
//   public/apple-touch-icon.png (180x180, iOS home screen)
//   public/icon-192.png         (PWA standard)
//   public/icon-512.png         (PWA standard)
//   public/icon-512-maskable.png (PWA maskable, with safe-zone padding)

import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { writeFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const PAPER = "#07173A";
const INK = "#F2EAD9";
const RED = "#FF3E5E";

// Square mark used for everything except the maskable PWA icon.
// Tight crop: italic serif "P" in cream, red dot top-right.
const mark = (size = 64) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
  <rect width="64" height="64" rx="12" fill="${PAPER}"/>
  <text
    x="16" y="48"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="46"
    font-style="italic"
    font-weight="400"
    fill="${INK}"
  >P</text>
  <circle cx="46" cy="20" r="6" fill="${RED}"/>
</svg>`;

// Maskable variant: same mark but inside ~80% safe zone (PWA spec).
const maskable = (size = 64) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
  <rect width="64" height="64" fill="${PAPER}"/>
  <text
    x="20" y="44"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="34"
    font-style="italic"
    font-weight="400"
    fill="${INK}"
  >P</text>
  <circle cx="42" cy="24" r="4.5" fill="${RED}"/>
</svg>`;

// Wrap a PNG buffer in an ICO container. Single-image ICO with embedded PNG
// is supported by all browsers we care about. Header layout per Microsoft spec.
function pngToIco(pngBuf, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = ICO
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // colour palette count
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // colour planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuf.length, 8); // image data size
  entry.writeUInt32LE(6 + 16, 12); // offset to image data

  return Buffer.concat([header, entry, pngBuf]);
}

async function renderPng(svg, size) {
  return sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
}

async function main() {
  // 1. Master SVG favicon
  await writeFile(join(publicDir, "favicon.svg"), mark(64).trim());

  // 2. favicon.ico (32x32 PNG inside ICO)
  const ico32 = await renderPng(mark(64), 32);
  await writeFile(join(publicDir, "favicon.ico"), pngToIco(ico32, 32));

  // 3. apple-touch-icon (180x180, no rounded mask — iOS adds its own)
  const apple = await renderPng(mark(64), 180);
  await writeFile(join(publicDir, "apple-touch-icon.png"), apple);

  // 4. PWA standard icons (any purpose)
  await writeFile(join(publicDir, "icon-192.png"), await renderPng(mark(64), 192));
  await writeFile(join(publicDir, "icon-512.png"), await renderPng(mark(64), 512));

  // 5. PWA maskable (safe zone)
  await writeFile(
    join(publicDir, "icon-512-maskable.png"),
    await renderPng(maskable(64), 512),
  );

  console.log("Wrote favicon.svg, favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png, icon-512-maskable.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
