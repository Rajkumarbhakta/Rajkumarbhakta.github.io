"use client";

import { MotionConfig } from "framer-motion";
import { spatial } from "@/lib/motion";

/**
 * `reducedMotion="user"` makes Framer Motion drop transform and layout
 * animations (while keeping opacity) whenever the OS asks for reduced motion,
 * which covers every motion component in the tree at once. Infinite loops and
 * SVG path morphs are not transforms, so those components additionally check
 * `useReducedMotion()` themselves.
 *
 * Setting a default `transition` here makes spatial.default the implicit spring
 * so most components need no transition prop at all.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={spatial.default}>
      {children}
    </MotionConfig>
  );
}
