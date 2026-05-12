// Generates public/og-image.png (1200x630) for social sharing.
// Run with `node scripts/generate-og-image.mjs` after editing the SVG below.
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "og-image.png");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <radialGradient id="glow-left" cx="0" cy="0.4" r="0.6">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow-right" cx="1" cy="0.7" r="0.6">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#0f172a"/>
  <rect width="1200" height="630" fill="url(#glow-left)"/>
  <rect width="1200" height="630" fill="url(#glow-right)"/>

  <text x="80" y="100" font-family="Inter, system-ui, sans-serif" font-size="28" font-weight="500" fill="#94a3b8" letter-spacing="2">
    PABLOFALLAS.NAME
  </text>

  <text x="80" y="290" font-family="'Space Grotesk', Inter, sans-serif" font-size="92" font-weight="700" fill="url(#brand)">
    Pablo Fallas Rodríguez
  </text>

  <text x="80" y="380" font-family="Inter, system-ui, sans-serif" font-size="44" font-weight="400" fill="#f1f5f9">
    Infrastructure Engineering Manager
  </text>

  <text x="80" y="438" font-family="Inter, system-ui, sans-serif" font-size="32" font-weight="400" fill="#94a3b8">
    DevOps / Site Reliability Engineer
  </text>

  <rect x="80" y="510" width="80" height="4" fill="url(#brand)" rx="2"/>
  <text x="80" y="560" font-family="Inter, system-ui, sans-serif" font-size="24" font-weight="400" fill="#94a3b8">
    Berlin, Germany
  </text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`Wrote ${outPath}`);
