"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { springs } from "@/lib/motion";

export type ButtonVariant = "filled" | "tonal" | "elevated" | "outlined" | "text";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Every variant is a fixed pair of colour roles. Nothing picks its own colours
 * — the moment a component does, the theme stops being a theme.
 */
const VARIANTS: Record<ButtonVariant, string> = {
  filled: "bg-primary text-on-primary",
  tonal: "bg-secondary-container text-on-secondary-container",
  elevated: "bg-surface-container-low text-primary shadow-card",
  outlined: "bg-transparent text-primary border border-outline",
  text: "bg-transparent text-primary",
};

/** Heights come from the component spec: buttons are 56dp at default size. */
const SIZES: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-label-lg",
  md: "h-14 px-6 text-label-lg",
  lg: "h-14 px-8 text-body-lg",
};

const BASE =
  "state-layer relative inline-flex shrink-0 items-center justify-center gap-2 select-none " +
  "font-medium transition-[background-color,color,border-color] duration-[120ms] ease-standard " +
  "disabled:pointer-events-none disabled:opacity-40";

export function buttonClasses({
  variant = "filled",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(BASE, "rounded-button", VARIANTS[variant], SIZES[size], className);
}

/**
 * Framer Motion declares its own onAnimationStart/onDrag* props whose types
 * collide with React's DOM handlers of the same name, which is a hard error
 * under `strict`. Omitting them is the standard fix when wrapping motion.*.
 */
type MotionSafe<T> = Omit<
  T,
  "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration" | "onDrag" | "onDragStart" | "onDragEnd"
>;

export interface ButtonProps extends MotionSafe<React.ComponentPropsWithoutRef<"button">> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "filled", size = "md", ...props },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.94 }}
      transition={springs.corner}
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  );
});

/** Anchor flavour — a button cannot legally wrap a link. */
export const LinkButton = React.forwardRef<
  HTMLAnchorElement,
  MotionSafe<React.ComponentPropsWithoutRef<"a">> & { variant?: ButtonVariant; size?: ButtonSize }
>(function LinkButton({ className, variant = "filled", size = "md", ...props }, ref) {
  return (
    <motion.a
      ref={ref}
      whileTap={{ scale: 0.94 }}
      transition={springs.corner}
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  );
});
