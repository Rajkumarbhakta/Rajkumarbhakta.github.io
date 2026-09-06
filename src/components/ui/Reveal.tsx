"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { revealContainer, revealItem, revealItemExpressive } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

type MotionSafeDivProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration" | "onDrag" | "onDragStart" | "onDragEnd"
>;

interface RevealProps extends MotionSafeDivProps {
  /** Use inside a RevealGroup so the parent drives the stagger. */
  asChild?: boolean;
  expressive?: boolean;
  delay?: number;
}

/**
 * Replaces the initial/whileInView/viewport/transition quartet that was
 * duplicated across every section. See useReveal for why the trigger is a
 * plain boolean fed to `animate` rather than Framer's `whileInView`.
 */
export function Reveal({
  className,
  asChild = false,
  expressive = false,
  delay,
  children,
  ...props
}: RevealProps) {
  const variants = expressive ? revealItemExpressive : revealItem;

  if (asChild) {
    // Inherits the variant label from the enclosing RevealGroup.
    return (
      <motion.div variants={variants} className={className} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <SelfRevealing
      variants={variants}
      className={className}
      transition={delay ? { delay } : undefined}
      {...props}
    >
      {children}
    </SelfRevealing>
  );
}

/** Staggers any `<Reveal asChild>` descendants. */
export function RevealGroup({ className, children, ...props }: MotionSafeDivProps) {
  return (
    <SelfRevealing variants={revealContainer} className={cn(className)} {...props}>
      {children}
    </SelfRevealing>
  );
}

function SelfRevealing({
  variants,
  className,
  children,
  ...props
}: MotionSafeDivProps & {
  variants: React.ComponentProps<typeof motion.div>["variants"];
  transition?: React.ComponentProps<typeof motion.div>["transition"];
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const revealed = useReveal(ref);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={revealed ? "show" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
