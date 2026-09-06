"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { springs } from "@/lib/motion";

export type IconButtonVariant = "standard" | "filled" | "tonal" | "outlined";

const VARIANTS: Record<IconButtonVariant, string> = {
  standard: "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest",
  filled: "bg-primary text-on-primary",
  tonal: "bg-secondary-container text-on-secondary-container",
  outlined: "bg-transparent text-on-surface-variant border border-outline-variant",
};

/** 48dp box, 24dp radius, per the component spec. */
const BASE =
  "state-layer relative inline-flex size-12 shrink-0 items-center justify-center rounded-icon-button " +
  "transition-[background-color,color,border-color] duration-[120ms] ease-standard " +
  "disabled:pointer-events-none disabled:opacity-40";

type MotionSafe<T> = Omit<
  T,
  "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration" | "onDrag" | "onDragStart" | "onDragEnd"
>;

export interface IconButtonProps extends MotionSafe<React.ComponentPropsWithoutRef<"button">> {
  variant?: IconButtonVariant;
  label: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { className, variant = "standard", label, children, ...props },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      type="button"
      aria-label={label}
      whileTap={{ scale: 0.94 }}
      transition={springs.corner}
      className={cn(BASE, VARIANTS[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
});

/** Anchor flavour, for social and outbound links. */
export const IconLink = React.forwardRef<
  HTMLAnchorElement,
  MotionSafe<React.ComponentPropsWithoutRef<"a">> & { variant?: IconButtonVariant; label: string }
>(function IconLink({ className, variant = "standard", label, children, ...props }, ref) {
  return (
    <motion.a
      ref={ref}
      aria-label={label}
      whileTap={{ scale: 0.94 }}
      transition={springs.corner}
      className={cn(BASE, VARIANTS[variant], className)}
      {...props}
    >
      {children}
    </motion.a>
  );
});
