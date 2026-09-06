"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SHAPES, SHAPE_VIEWBOX, type ShapeName } from "@/lib/shapes";
import { easing } from "@/lib/motion";

interface MorphShapeProps {
  /** Cycled in order, then mirrored back. Two or more names to animate. */
  sequence?: ShapeName[];
  className?: string;
  /** Seconds per shape transition. */
  pace?: number;
  /** Fill applied to the path. Ignored when `children` is provided. */
  fill?: string;
  /** When present the shape becomes a clip path around this content. */
  children?: React.ReactNode;
}

/**
 * Material 3 Expressive morphing shape.
 *
 * The paths in @/lib/shapes are generated with identical structure and number
 * counts, so Framer Motion interpolates `d` directly — no morphing library.
 * `d` is not a transform, so MotionConfig's reduced-motion handling does not
 * reach it; the hook check below is what stops the animation.
 */
export function MorphShape({
  sequence = ["cookie", "clover", "flower"],
  className,
  pace = 1.6,
  fill = "currentColor",
  children,
}: MorphShapeProps) {
  const reduce = useReducedMotion();
  // Multiple instances on one page would collide on a literal id.
  const clipId = React.useId().replace(/:/g, "");

  const paths = sequence.map((name) => SHAPES[name]);
  const animated = !reduce && paths.length > 1;

  const path = (
    <motion.path
      d={paths[0]}
      animate={animated ? { d: paths } : undefined}
      transition={
        animated
          ? {
              duration: pace * paths.length,
              times: paths.map((_, i) => i / (paths.length - 1)),
              ease: easing.emphasized,
              repeat: Infinity,
              repeatType: "mirror",
            }
          : undefined
      }
    />
  );

  if (!children) {
    return (
      <svg viewBox={SHAPE_VIEWBOX} className={className} aria-hidden fill={fill}>
        {path}
      </svg>
    );
  }

  return (
    <svg viewBox={SHAPE_VIEWBOX} className={className} aria-hidden>
      <defs>
        <clipPath id={clipId}>{path}</clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>{children}</g>
    </svg>
  );
}
