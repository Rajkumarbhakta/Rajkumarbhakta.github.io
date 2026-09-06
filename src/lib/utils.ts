import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge validates theme keys with `isTshirtSize`, which only accepts
 * xs/sm/md/lg/xl/2xl-style names. Our Material 3 scale uses compound names, and
 * they fail that check with two consequences:
 *
 *   - `text-headline-md` falls through to the `text-color` group (validated with
 *     `isAny`), so cn("text-headline-md", "text-on-surface-variant") silently
 *     drops the font size.
 *   - `rounded-xl-increased` matches no group at all, so it and `rounded-xl`
 *     are both emitted and CSS source order decides the winner.
 *
 * Registering the names here puts them in the right group. Anything added to
 * the type or shape scale in globals.css must be added here too — see the
 * guard test in utils.test.ts.
 */
/** Must match the --text-* entries in globals.css. */
const TYPE_SIZES = [
  "display-lg", "display-sm",
  "headline-md", "headline-sm",
  "title-lg",
  "body-lg", "body-md",
  "label-lg", "label-md", "label-sm",
] as const;

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [...TYPE_SIZES],
      radius: [
        "button", "icon-button", "fab", "chip", "card",
        "dialog", "field", "toolbar", "list-item", "media", "inner",
      ],
      shadow: ["card", "fab", "toolbar", "dialog"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
