import type { Variants } from "framer-motion";

/**
 * Material 3 Expressive motion tokens.
 *
 * M3 specifies springs as (damping ratio, stiffness); Framer Motion wants
 * (stiffness, damping coefficient, mass). With mass = 1 the conversion is
 * c = 2 * zeta * sqrt(k).
 *
 * Rule of thumb for picking one: spatial springs are for things that move
 * through space (position, size, layout) and are allowed to overshoot — that
 * overshoot is the signature of Expressive motion. Effects springs are for
 * things that only change appearance (colour, opacity, elevation) and must
 * not overshoot, because an overshooting button reads as broken.
 *
 * This module imports only types, so it stays usable from server components.
 */
/**
 * The four springs, straight from the field guide. Note the gradient: the
 * closer a spring is to the user's finger, the more damped it gets. Screen
 * transitions bounce; a corner tracking the pointer does not.
 *
 * Damping ratio zeta = damping / (2 * sqrt(stiffness * mass)).
 */
export const springs = {
  /** zeta 0.69 — underdamped, visibly overshoots. This is what "alive" means. */
  transition: { type: "spring", stiffness: 360, damping: 26, mass: 1 },
  /** zeta 0.91 — a little lag, reads as weight. */
  dragged: { type: "spring", stiffness: 620, damping: 38, mass: 0.7 },
  /** zeta 1.07 — crisp, no wobble. */
  gap: { type: "spring", stiffness: 700, damping: 42, mass: 0.55 },
  /** zeta 1.26 — locked to the pointer. */
  corner: { type: "spring", stiffness: 900, damping: 48, mass: 0.4 },
} as const;

/**
 * Kept as aliases so call sites can say what they mean. Spatial motion moves
 * through space and may overshoot; effects only change appearance and must not.
 */
export const spatial = {
  fast: springs.gap,
  default: springs.transition,
  slow: springs.transition,
} as const;

export const effects = {
  fast: springs.corner,
  default: springs.gap,
  slow: springs.dragged,
} as const;

/** M3 emphasized easing curves, for the rare tween (e.g. SVG path morphing). */
export const easing = {
  standard: [0.2, 0, 0, 1],
  emphasized: [0.2, 0, 0, 1],
  emphasizedDecelerate: [0.05, 0.7, 0.1, 1],
  emphasizedAccelerate: [0.3, 0, 0.8, 0.15],
} as const;

/** Durations from the guide, in seconds. */
export const duration = {
  press: 0.12,
  colorChange: 0.12,
  hoverLift: 0.14,
  fade: 0.3,
  landingCommit: 0.34,
  expand: 0.36,
  slide: 0.42,
} as const;

/* -------------------------------------------------------------------------- */
/* Scroll reveal                                                              */
/* -------------------------------------------------------------------------- */

export const revealContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.02 } },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: springs.transition },
};

/** Springier entrance with a slight rotation, for hero and feature tiles. */
export const revealItemExpressive: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, rotate: -2 },
  show: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: springs.transition },
};

/* -------------------------------------------------------------------------- */
/* Interaction presets                                                        */
/* -------------------------------------------------------------------------- */

/** Buttons and chips: appearance-only, so effects springs. */
export const pressable = {
  whileTap: { scale: 0.94, transition: springs.corner },
} as const;

/** Cards: they move in space on hover, so spatial. */
export const liftable = {
  whileHover: { y: -1, transition: springs.gap },
  whileTap: { scale: 0.98, transition: springs.corner },
} as const;
