/**
 * Downloads a subset of Material Symbols Rounded into public/fonts/.
 *
 * Run with `npm run icons`. Google serves a subset containing only the glyphs
 * named in ICONS, which keeps the file a few KB instead of the ~4MB full set.
 * The result is committed and self-hosted, so the site has no runtime
 * dependency on fonts.googleapis.com and no render-blocking third-party request.
 *
 * Add an icon here and re-run whenever a component needs a new glyph.
 */
import { writeFileSync } from "node:fs";

/** Keep sorted; these are Material Symbols glyph names. */
const ICONS = [
  "add",
  "arrow_forward",
  "call",
  "check",
  "code",
  "dark_mode",
  "download",
  "edit",
  "home",
  "layers",
  "light_mode",
  "location_on",
  "mail",
  "memory",
  "notifications",
  "open_in_new",
  "person",
  "search",
  "send",
  "share",
  "work",
];

// A modern browser UA is required; Google serves ttf to unknown agents.
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const cssUrl =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400..700,0..1,0" +
  `&icon_names=${ICONS.join(",")}`;

const css = await fetch(cssUrl, { headers: { "User-Agent": UA } }).then((r) => {
  if (!r.ok) throw new Error(`Google Fonts CSS request failed: ${r.status}`);
  return r.text();
});

const fontUrl = css.match(/url\((https:\/\/[^)]+)\)/)?.[1];
if (!fontUrl) throw new Error("Could not find a woff2 URL in the returned CSS");

const font = Buffer.from(
  await fetch(fontUrl, { headers: { "User-Agent": UA } }).then((r) => {
    if (!r.ok) throw new Error(`Font download failed: ${r.status}`);
    return r.arrayBuffer();
  }),
);

writeFileSync(new URL("../public/fonts/material-symbols-rounded.woff2", import.meta.url), font);

console.log(
  `wrote public/fonts/material-symbols-rounded.woff2 — ${ICONS.length} glyphs, ${(font.length / 1024).toFixed(1)} KB`,
);
