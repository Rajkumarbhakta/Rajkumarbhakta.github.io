"use client";

import { useLayoutEffect, useRef, useState, type RefObject } from "react";

/**
 * One IntersectionObserver shared by every reveal target, rather than one per
 * element. Created lazily so it is never constructed during SSR.
 */
let observer: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        observer?.unobserve(entry.target);
      }
    },
    // Fire slightly before the element is fully on screen so a fast scroll does
    // not outrun the animation and leave a visibly blank band.
    { rootMargin: "0px 0px -5% 0px", threshold: 0 },
  );
  return observer;
}

/**
 * Latching "has this scrolled into view yet" flag.
 *
 * Two things here are deliberate.
 *
 * It returns a plain boolean for the caller to feed to `animate`, rather than
 * using Framer's `whileInView`. `whileInView` is a *gesture* state: with
 * `once: true` it latches and tears down its observer, so any child mounted
 * afterwards — the project cards that appear when the filter changes —
 * inherits the parent's `initial` variant with no live target to animate
 * toward, and stays invisible permanently. An `animate` prop is real state
 * that late arrivals inherit.
 *
 * And the first measurement is synchronous, in useLayoutEffect, so anything
 * already on screen at mount is revealed before the browser paints. Nothing on
 * the reveal path depends on requestAnimationFrame, which a background tab
 * throttles to a standstill.
 */
export function useReveal(ref: RefObject<Element | null>) {
  const [revealed, setRevealed] = useState(false);
  const revealedRef = useRef(false);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || revealedRef.current) return;

    const reveal = () => {
      if (revealedRef.current) return;
      revealedRef.current = true;
      setRevealed(true);
    };

    // Already on screen — resolve now rather than waiting for the observer's
    // first delivery, which would otherwise paint one frame of hidden content.
    const { top, bottom } = element.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0) {
      reveal();
      return;
    }

    callbacks.set(element, reveal);
    getObserver().observe(element);

    return () => {
      callbacks.delete(element);
      observer?.unobserve(element);
    };
  }, [ref]);

  return revealed;
}
