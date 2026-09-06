/**
 * Guard for src/lib/utils.ts. tailwind-merge silently mis-groups our compound
 * Material 3 token names unless they are registered; when that happens cn()
 * drops classes instead of erroring, so this asserts the behaviour directly.
 *
 * Run with `npm run check:cn`. Keep the lists in sync with src/lib/utils.ts and
 * the token blocks in src/app/globals.css.
 */
import { extendTailwindMerge } from "tailwind-merge";

const TYPE_SIZES = [
  "display-lg", "display-sm",
  "headline-md", "headline-sm",
  "title-lg",
  "body-lg", "body-md",
  "label-lg", "label-md", "label-sm",
];

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: TYPE_SIZES,
      radius: [
        "button", "icon-button", "fab", "chip", "card",
        "dialog", "field", "toolbar", "list-item", "media", "inner",
      ],
      shadow: ["card", "fab", "toolbar", "dialog"],
    },
  },
});

const cases = [
  // A type utility and a colour utility must both survive.
  [["text-headline-md", "text-on-surface-variant"], "text-headline-md text-on-surface-variant"],
  [["text-display-lg", "text-primary"], "text-display-lg text-primary"],
  [["text-label-md", "text-on-surface"], "text-label-md text-on-surface"],
  // Two utilities from the same group must collapse to the last one.
  [["text-body-md", "text-body-lg"], "text-body-lg"],
  [["text-primary", "text-on-surface"], "text-on-surface"],
  [["rounded-chip", "rounded-card"], "rounded-card"],
  [["rounded-button", "rounded-full"], "rounded-full"],
  [["rounded-list-item", "rounded-inner"], "rounded-inner"],
  [["shadow-card", "shadow-toolbar"], "shadow-toolbar"],
  [["bg-surface-container-high", "bg-primary"], "bg-primary"],
];

let failures = 0;
for (const [input, expected] of cases) {
  const actual = twMerge(...input);
  if (actual !== expected) {
    failures += 1;
    console.error(`FAIL  cn(${input.map((c) => `"${c}"`).join(", ")})`);
    console.error(`        expected: ${expected}`);
    console.error(`        actual:   ${actual}`);
  }
}

if (failures > 0) {
  console.error(`\n${failures} of ${cases.length} cn() merge cases failed.`);
  process.exit(1);
}
console.log(`cn() merge behaviour ok (${cases.length} cases).`);
