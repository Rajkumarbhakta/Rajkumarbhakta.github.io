/**
 * Generates the colour roles in src/app/theme.css.
 *
 * Run with `npm run theme`. Output is committed, so the built site carries no
 * runtime dependency on this package — it is a devDependency only.
 *
 * Method follows the M3E field guide: build five tonal palettes whose chroma is
 * a RATIO of the seed's own chroma (not Material's fixed per-palette chroma),
 * then place every role at a fixed target tone. A muted seed then yields a
 * coherently muted scheme instead of a dull primary beside a vivid tertiary.
 *
 * Two deliberate departures from that guide:
 *
 *  - It generates tones in CIE Lab, and warns that Lab's hue non-linearity
 *    around 270-300 degrees bends blue seeds toward purple as tone changes.
 *    Our seed is blue and sits exactly in that band, so we use HCT via
 *    TonalPalette instead, which is the model built to fix that.
 *  - It hardcodes the error colours and flags that as a bug, since raising
 *    contrast then moves every role except the destructive one. Error gets a
 *    real tonal palette here.
 */
import { register } from "node:module";
import { writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

register("./mcu-resolve.mjs", pathToFileURL(import.meta.filename));

const { argbFromHex, hexFromArgb, Hct, TonalPalette } = await import(
  "@material/material-color-utilities"
);

const SEED = "#3B82F6";

const seed = Hct.fromInt(argbFromHex(SEED));
const hue = seed.hue;

/** Floor lifts a dull seed to a usable accent; ceiling stops it going neon. */
const primaryChroma = Math.min(60, Math.max(36, seed.chroma));

const palettes = {
  // Same hue as the seed.
  primary: TonalPalette.fromHueAndChroma(hue, primaryChroma),
  // Same hue, clearly recessive.
  secondary: TonalPalette.fromHueAndChroma(hue, primaryChroma / 3),
  // Analogous shift, the one Material also uses.
  tertiary: TonalPalette.fromHueAndChroma((hue + 60) % 360, primaryChroma / 2),
  // Greys keep a trace of the seed so surfaces read as chosen, not as default
  // grey sitting under the accent. This is the highest-leverage number here.
  neutral: TonalPalette.fromHueAndChroma(hue, 3),
  // Outlines a shade warmer than the surfaces they sit on.
  neutralVariant: TonalPalette.fromHueAndChroma(hue, 7),
  error: TonalPalette.fromHueAndChroma(25, 84),
};

/** [palette, light tone, dark tone] per role. */
const ROLES = {
  primary: ["primary", 40, 80],
  "on-primary": ["primary", 100, 20],
  "primary-container": ["primary", 90, 30],
  "on-primary-container": ["primary", 10, 90],
  "inverse-primary": ["primary", 80, 40],

  secondary: ["secondary", 40, 80],
  "on-secondary": ["secondary", 100, 20],
  "secondary-container": ["secondary", 90, 30],
  "on-secondary-container": ["secondary", 10, 90],

  tertiary: ["tertiary", 40, 80],
  "on-tertiary": ["tertiary", 100, 20],
  "tertiary-container": ["tertiary", 90, 30],
  "on-tertiary-container": ["tertiary", 10, 90],

  error: ["error", 40, 80],
  "on-error": ["error", 100, 20],
  "error-container": ["error", 90, 30],
  "on-error-container": ["error", 10, 90],

  // Depth is carried by which container a thing sits on, not by shadow. Dark
  // steps are wider because a two-point lightness difference is invisible on a
  // dark ground.
  surface: ["neutral", 98, 6],
  "surface-dim": ["neutral", 87, 6],
  "surface-bright": ["neutral", 98, 24],
  "surface-container-lowest": ["neutral", 100, 4],
  "surface-container-low": ["neutral", 96, 10],
  "surface-container": ["neutral", 94, 12],
  "surface-container-high": ["neutral", 92, 17],
  "surface-container-highest": ["neutral", 90, 22],
  "on-surface": ["neutral", 10, 90],
  "inverse-surface": ["neutral", 20, 90],
  "inverse-on-surface": ["neutral", 95, 20],

  "surface-variant": ["neutralVariant", 90, 30],
  "on-surface-variant": ["neutralVariant", 30, 80],
  outline: ["neutralVariant", 50, 60],
  "outline-variant": ["neutralVariant", 80, 30],

  scrim: ["neutral", 0, 0],
  shadow: ["neutral", 0, 0],
  "surface-tint": ["primary", 40, 80],
};

const resolve = (isDark) =>
  Object.entries(ROLES).map(([name, [palette, light, dark]]) => [
    name,
    hexFromArgb(palettes[palette].tone(isDark ? dark : light)),
  ]);

const light = resolve(false);
const dark = resolve(true);

const block = (pairs, indent) =>
  pairs.map(([name, hex]) => `${indent}--md-${name}: ${hex};`).join("\n");

const css = `/**
 * GENERATED FILE — do not edit by hand. Run \`npm run theme\` to regenerate.
 *
 * Material 3 Expressive colour roles from seed ${SEED}.
 * Chroma: primary ${primaryChroma.toFixed(0)}, secondary /3, tertiary hue+60 /2,
 * neutral 3, neutral-variant 7. See scripts/gen-theme.mjs.
 */

:root,
:root[data-theme="light"] {
  color-scheme: light;
${block(light, "  ")}
}

:root[data-theme="dark"] {
  color-scheme: dark;
${block(dark, "  ")}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    color-scheme: dark;
${block(dark, "    ")}
  }
}
`;

writeFileSync(new URL("../src/app/theme.css", import.meta.url), css);

if (process.argv.includes("--preview")) {
  const swatches = (pairs, bg, fg) => `
    <section style="background:${bg};color:${fg};padding:24px">
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:8px">
        ${pairs
          .map(
            ([name, hex]) =>
              `<div style="background:${hex};border:1px solid #8888;border-radius:12px;padding:12px">
                 <span style="background:#0008;color:#fff;padding:2px 6px;border-radius:6px;font:12px/1.4 monospace">${name}<br>${hex}</span>
               </div>`,
          )
          .join("")}
      </div>
    </section>`;

  const out = join(tmpdir(), "m3-palette-preview.html");
  writeFileSync(
    out,
    `<!doctype html><meta charset="utf-8"><title>M3 palette preview</title>
     <body style="margin:0;font-family:system-ui">
     <h2 style="padding:16px 24px;margin:0">Light</h2>${swatches(light, "#f9f9ff", "#1a1b20")}
     <h2 style="padding:16px 24px;margin:0;background:#111318;color:#e2e2e9">Dark</h2>${swatches(dark, "#111318", "#e2e2e9")}
     </body>`,
  );
  console.log(`wrote swatch preview to ${out}`);
}

const peek = (pairs, name) => pairs.find(([n]) => n === name)[1];
console.log(`seed ${SEED} -> HCT hue ${hue.toFixed(1)}, chroma ${seed.chroma.toFixed(1)}`);
for (const role of ["primary", "secondary", "tertiary", "surface", "surface-container", "on-surface-variant", "outline-variant"]) {
  console.log(`  ${role.padEnd(20)} light ${peek(light, role)}   dark ${peek(dark, role)}`);
}
console.log(`wrote src/app/theme.css (${Object.keys(ROLES).length} roles x 2 themes)`);
