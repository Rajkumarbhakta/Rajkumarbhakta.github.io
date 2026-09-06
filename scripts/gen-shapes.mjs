/**
 * Generates src/lib/shapes.ts — the Material 3 Expressive shape library.
 *
 * Run with `npm run shapes`. Output is committed; this never runs at build time.
 *
 * Framer Motion can interpolate two SVG path strings directly, but only when
 * they share an identical non-numeric structure and an identical count of
 * numbers. Rather than depend on a morphing library, every shape here is
 * sampled from a polar radius function at the same fixed number of points and
 * converted Catmull-Rom -> cubic Bezier, so all paths come out as
 * `M x y C ... (x SEGMENTS) Z` and any pair is morphable by construction.
 *
 * Never hand-edit src/lib/shapes.ts: a single stray number breaks every morph.
 */
import { writeFileSync } from "node:fs";

/**
 * Sample count. Divisible by every lobe count used below (4/6/8/9/12) so each
 * lobe lands on whole samples and the shape stays symmetric. Also needs to be
 * high enough that a 12-lobe ripple reads as scalloped rather than spiky.
 */
const SEGMENTS = 72;
const SIZE = 200;
const CENTER = SIZE / 2;
const RADIUS = 96;

/**
 * Polar radius as a multiple of RADIUS. Lobed shapes are cosine ripples; the
 * squared-off ones are superellipses.
 */
const superellipse = (exponent) => (t) =>
  1 / Math.pow(Math.abs(Math.cos(t)) ** exponent + Math.abs(Math.sin(t)) ** exponent, 1 / exponent);

const SHAPES = {
  circle: () => 1,
  squircle: superellipse(4),
  square: superellipse(8),
  diamond: superellipse(1.4),
  cookie: (t) => 1 + 0.09 * Math.cos(9 * t),
  clover: (t) => 1 + 0.18 * Math.cos(4 * t),
  gem: (t) => 1 + 0.1 * Math.cos(6 * t),
  flower: (t) => 1 + 0.13 * Math.cos(8 * t),
  burst: (t) => 1 + 0.2 * Math.cos(12 * t),
  sunny: (t) => 1 + 0.07 * Math.cos(8 * t),
};

const round = (n) => Number(n.toFixed(2));

function sample(radiusAt) {
  const points = [];
  for (let i = 0; i < SEGMENTS; i += 1) {
    const angle = (i / SEGMENTS) * Math.PI * 2 - Math.PI / 2;
    const r = RADIUS * radiusAt(angle + Math.PI / 2);
    points.push([CENTER + r * Math.cos(angle), CENTER + r * Math.sin(angle)]);
  }
  return points;
}

/**
 * Closed Catmull-Rom spline as cubic Beziers. The tangent at each point is
 * (next - previous) / 6, which is the standard uniform Catmull-Rom conversion.
 */
function toPath(points) {
  const at = (i) => points[(i + points.length) % points.length];
  const [x0, y0] = at(0);
  let d = `M${round(x0)} ${round(y0)}`;

  for (let i = 0; i < points.length; i += 1) {
    const [px, py] = at(i - 1);
    const [cx, cy] = at(i);
    const [nx, ny] = at(i + 1);
    const [ax, ay] = at(i + 2);

    const c1x = cx + (nx - px) / 6;
    const c1y = cy + (ny - py) / 6;
    const c2x = nx - (ax - cx) / 6;
    const c2y = ny - (ay - cy) / 6;

    d += `C${round(c1x)} ${round(c1y)} ${round(c2x)} ${round(c2y)} ${round(nx)} ${round(ny)}`;
  }

  return `${d}Z`;
}

const paths = Object.fromEntries(
  Object.entries(SHAPES).map(([name, fn]) => [name, toPath(sample(fn))]),
);

// Guard: every path must carry the same number count, or morphing breaks.
const counts = new Set(Object.values(paths).map((d) => d.match(/-?\d+(\.\d+)?/g).length));
if (counts.size !== 1) {
  console.error(`Path number counts diverged: ${[...counts].join(", ")}`);
  process.exit(1);
}

const body = Object.entries(paths)
  .map(([name, d]) => `  ${name}:\n    "${d}",`)
  .join("\n");

writeFileSync(
  new URL("../src/lib/shapes.ts", import.meta.url),
  `/**
 * GENERATED FILE — do not edit by hand. Run \`npm run shapes\` to regenerate.
 *
 * Material 3 Expressive shapes as equal-vertex cubic Bezier paths on a
 * ${SIZE}x${SIZE} viewBox. Every path has the same structure and the same number
 * count, so any pair can be interpolated directly by Framer Motion.
 * See scripts/gen-shapes.mjs.
 */

export const SHAPES = {
${body}
} as const;

export type ShapeName = keyof typeof SHAPES;

export const SHAPE_VIEWBOX = "0 0 ${SIZE} ${SIZE}";
`,
);

console.log(
  `wrote src/lib/shapes.ts — ${Object.keys(paths).length} shapes, ${[...counts][0]} numbers each`,
);
