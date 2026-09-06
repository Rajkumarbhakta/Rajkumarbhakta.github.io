"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";
import { springs } from "@/lib/motion";

export type ChipVariant = "assist" | "filter";

type MotionSafe<T> = Omit<
  T,
  "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration" | "onDrag" | "onDragStart" | "onDragEnd"
>;

export interface ChipProps extends MotionSafe<React.ComponentPropsWithoutRef<"button">> {
  variant?: ChipVariant;
  selected?: boolean;
  /** Renders a non-interactive chip — used for read-only tag lists. */
  asTag?: boolean;
}

/** 32dp tall, 8dp radius, per the component spec. */
const BASE =
  "inline-flex h-8 shrink-0 items-center gap-1.5 px-4 text-label-lg border " +
  "transition-[background-color,color,border-color] duration-[120ms] ease-standard";

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(function Chip(
  { className, variant = "assist", selected = false, asTag = false, children, ...props },
  ref,
) {
  const tone = selected
    ? "bg-primary text-on-primary border-transparent font-semibold"
    : "bg-surface-container-high text-on-surface-variant border-transparent";

  const content = (
    <>
      {variant === "filter" && (
        <AnimatePresence initial={false}>
          {selected && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 18, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={springs.gap}
              className="inline-flex shrink-0 items-center justify-center overflow-hidden"
            >
              <Icon name="check" size={18} />
            </motion.span>
          )}
        </AnimatePresence>
      )}
      {children}
    </>
  );

  if (asTag) {
    return <span className={cn(BASE, "rounded-chip", tone, className)}>{content}</span>;
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      aria-pressed={variant === "filter" ? selected : undefined}
      whileTap={{ scale: 0.94 }}
      transition={springs.corner}
      className={cn("state-layer rounded-chip", BASE, tone, className)}
      {...props}
    >
      {content}
    </motion.button>
  );
});
