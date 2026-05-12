// Generates public/og-image.png (1200x630) for social sharing.
// Run with `node scripts/generate-og-image.mjs` after editing the SVG below.
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "og-image.png");

// Costa Rica · Night edition palette.
const PAPER = "#07173A";
const PAPER_DEEP = "#0A1F4A";
const INK = "#F2EAD9";
const INK_SOFT = "#C0BFC4";
const INK_FAINT = "#6E7B97";
const RED = "#FF3E5E";

// Costa Rican flag (Pantone) for the top stripe — blue, white, red, white, blue.
const FLAG_BLUE = "#0033A0";
const FLAG_WHITE = "#FFFFFF";
const FLAG_RED = "#DA291C";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="paper" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${PAPER}"/>
      <stop offset="100%" stop-color="${PAPER_DEEP}"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#paper)"/>

  <!-- Costa Rican flag stripe (top edge): blue, white, red, white, blue (1:1:2:1:1) -->
  <g>
    <rect x="0"    y="0" width="200" height="8" fill="${FLAG_BLUE}"/>
    <rect x="200"  y="0" width="200" height="8" fill="${FLAG_WHITE}"/>
    <rect x="400"  y="0" width="400" height="8" fill="${FLAG_RED}"/>
    <rect x="800"  y="0" width="200" height="8" fill="${FLAG_WHITE}"/>
    <rect x="1000" y="0" width="200" height="8" fill="${FLAG_BLUE}"/>
  </g>

  <!-- Eyebrow -->
  <text x="80" y="120" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="20" font-weight="500" fill="${RED}" letter-spacing="3">
    PABLOFALLAS.NAME
  </text>

  <!-- Headline: serif w/ red italic accent -->
  <text x="80" y="280" font-family="'Instrument Serif', 'Times New Roman', serif" font-size="104" font-weight="400" fill="${INK}" letter-spacing="-2">
    Pablo <tspan font-style="italic" fill="${RED}">Fallas</tspan> Rodríguez.
  </text>

  <!-- Subtitle -->
  <text x="80" y="370" font-family="'Instrument Serif', 'Times New Roman', serif" font-size="46" font-style="italic" fill="${INK_SOFT}">
    Infrastructure Engineering Manager
  </text>

  <text x="80" y="425" font-family="Inter, system-ui, sans-serif" font-size="28" font-weight="400" fill="${INK_FAINT}">
    DevOps · Site Reliability · Platform
  </text>

  <!-- Footer rule + location -->
  <rect x="80" y="510" width="80" height="3" fill="${RED}" rx="1"/>
  <text x="80" y="560" font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="400" fill="${INK_SOFT}">
    Berlin, Germany · Pura vida
  </text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`Wrote ${outPath}`);
