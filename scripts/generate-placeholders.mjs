// One-off generator for decorative placeholder SVGs used until real photography
// is supplied. Produces soft gradient "photo" placeholders in the brand palette
// with a thin-line icon so they clearly read as placeholders, not real photos.
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images");
mkdirSync(outDir, { recursive: true });

const palettes = {
  blush: ["#f3dde0", "#e9bcc3", "#cf9aa4"],
  rose: ["#e9bcc3", "#cf9aa4", "#b97285"],
  lavender: ["#ddd6e9", "#c3b6da", "#cf9aa4"],
  sage: ["#e4e9dd", "#cad4c1", "#aebd9f"],
  cream: ["#f6efe4", "#f3dde0", "#ddd6e9"],
};

const personIcon = (cx, cy, s, stroke) => `
  <g transform="translate(${cx} ${cy}) scale(${s})" fill="none" stroke="${stroke}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.55">
    <circle cx="0" cy="-14" r="12" />
    <path d="M -22 26 C -22 6 -12 -4 0 -4 C 12 -4 22 6 22 26" />
  </g>`;

const imageIcon = (cx, cy, s, stroke) => `
  <g transform="translate(${cx} ${cy}) scale(${s})" fill="none" stroke="${stroke}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.55">
    <rect x="-24" y="-18" width="48" height="36" rx="4" />
    <circle cx="-10" cy="-6" r="4.5" />
    <path d="M -24 12 L -6 -2 L 6 8 L 16 0 L 24 10" />
  </g>`;

function blob(cx, cy, r, color, opacity, seed) {
  const pts = 8;
  const angleStep = (Math.PI * 2) / pts;
  let d = "";
  for (let i = 0; i <= pts; i++) {
    const a = i * angleStep;
    const rr = r * (0.82 + 0.18 * Math.sin(seed + i * 1.7));
    const x = cx + Math.cos(a) * rr;
    const y = cy + Math.sin(a) * rr;
    d += i === 0 ? `M ${x} ${y} ` : `L ${x} ${y} `;
  }
  return `<path d="${d} Z" fill="${color}" opacity="${opacity}" />`;
}

function svg({ w, h, palette, icon, seed, id }) {
  const [c1, c2, c3] = palette;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="grad-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}" />
      <stop offset="100%" stop-color="${c2}" />
    </linearGradient>
    <filter id="blur-${id}"><feGaussianBlur stdDeviation="${w * 0.05}" /></filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#grad-${id})" />
  <g filter="url(#blur-${id})">
    ${blob(w * 0.75, h * 0.2, Math.min(w, h) * 0.32, c3, 0.45, seed)}
    ${blob(w * 0.2, h * 0.85, Math.min(w, h) * 0.36, "#ffffff", 0.35, seed + 2)}
  </g>
  ${icon === "person" ? personIcon(w / 2, h / 2, Math.min(w, h) / 130, "#2b2926") : imageIcon(w / 2, h / 2, Math.min(w, h) / 130, "#2b2926")}
</svg>`;
}

const targets = [
  { file: "hero-portrait.svg", w: 900, h: 1100, palette: palettes.blush, icon: "person", seed: 1 },
  { file: "about-portrait.svg", w: 900, h: 1080, palette: palettes.lavender, icon: "person", seed: 2 },

  { file: "gallery-1.svg", w: 900, h: 1200, palette: palettes.rose, icon: "image", seed: 3 },
  { file: "gallery-2.svg", w: 900, h: 700, palette: palettes.sage, icon: "image", seed: 4 },
  { file: "gallery-3.svg", w: 900, h: 900, palette: palettes.lavender, icon: "image", seed: 5 },
  { file: "gallery-4.svg", w: 900, h: 1300, palette: palettes.cream, icon: "image", seed: 6 },
  { file: "gallery-5.svg", w: 900, h: 780, palette: palettes.blush, icon: "image", seed: 7 },
  { file: "gallery-6.svg", w: 900, h: 1000, palette: palettes.rose, icon: "image", seed: 8 },
  { file: "gallery-7.svg", w: 900, h: 700, palette: palettes.sage, icon: "image", seed: 9 },
  { file: "gallery-8.svg", w: 900, h: 1150, palette: palettes.lavender, icon: "image", seed: 10 },
  { file: "gallery-9.svg", w: 900, h: 900, palette: palettes.blush, icon: "image", seed: 11 },

  { file: "conference-1.svg", w: 1400, h: 900, palette: palettes.rose, icon: "image", seed: 12 },
  { file: "conference-2.svg", w: 900, h: 700, palette: palettes.sage, icon: "image", seed: 13 },
  { file: "conference-3.svg", w: 900, h: 700, palette: palettes.lavender, icon: "image", seed: 14 },
  { file: "conference-4.svg", w: 900, h: 700, palette: palettes.blush, icon: "image", seed: 15 },

  { file: "og-image.svg", w: 1200, h: 630, palette: palettes.blush, icon: "image", seed: 16 },
];

for (const t of targets) {
  const content = svg({ ...t, id: t.file.replace(/[^a-z0-9]/gi, "") });
  writeFileSync(path.join(outDir, t.file), content, "utf8");
  console.log("wrote", t.file);
}
