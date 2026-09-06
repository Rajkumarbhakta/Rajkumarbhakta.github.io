"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { liftable } from "@/lib/motion";

export type CardVariant = "elevated" | "filled" | "outlined";

/** Same variant → role map the buttons use. */
const VARIANTS: Record<CardVariant, string> = {
  elevated: "bg-surface-container-low shadow-card",
  filled: "bg-surface-container",
  outlined: "bg-surface border border-outline-variant",
};

type MotionSafe<T> = Omit<
  T,
  "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration" | "onDrag" | "onDragStart" | "onDragEnd"
>;

export interface CardProps extends MotionSafe<React.ComponentPropsWithoutRef<"div">> {
  variant?: CardVariant;
  /** Adds the 1px hover lift. Off by default so static cards stay still. */
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, variant = "filled", interactive = false, ...props },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      {...(interactive ? liftable : {})}
      className={cn(
        "rounded-card transition-[background-color,box-shadow,border-color] duration-[120ms] ease-standard",
        VARIANTS[variant],
        interactive && "cursor-pointer hover:shadow-card",
        className,
      )}
      {...props}
    />
  );
});
