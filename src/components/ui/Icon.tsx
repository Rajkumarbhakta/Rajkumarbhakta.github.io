import { cn } from "@/lib/utils";

/** Glyph names available in the subset — see scripts/gen-icon-font.mjs. */
export type IconName =
  | "add"
  | "arrow_forward"
  | "call"
  | "check"
  | "code"
  | "dark_mode"
  | "edit"
  | "home"
  | "layers"
  | "light_mode"
  | "location_on"
  | "mail"
  | "memory"
  | "notifications"
  | "open_in_new"
  | "person"
  | "search"
  | "send"
  | "share"
  | "work";

interface IconProps {
  name: IconName;
  /** Material Symbols' FILL axis. M3 fills the icon of the active destination. */
  filled?: boolean;
  /** Optical size in px; the font is tuned for 24. */
  size?: number;
  className?: string;
}

/**
 * Material Symbols Rounded. The glyph is looked up by ligature, so the name
 * goes in as text content.
 */
export function Icon({ name, filled = false, size = 24, className }: IconProps) {
  return (
    <span
      aria-hidden
      className={cn("msr", filled && "msr-fill", className)}
      style={{ fontSize: size, width: size, height: size }}
    >
      {name}
    </span>
  );
}
