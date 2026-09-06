"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon, type IconName } from "@/components/ui";
import { cn } from "@/lib/utils";
import { springs } from "@/lib/motion";

const DESTINATIONS: { id: string; label: string; icon: IconName }[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "projects", label: "Apps", icon: "layers" },
  { id: "alerts", label: "Alerts", icon: "notifications" },
  { id: "profile", label: "You", icon: "person" },
];

const SEGMENTS = ["Day", "Week", "Month"];

/**
 * An M3 Expressive surface rendered as a phone, standing in for the Android
 * work this portfolio is about: a segmented button group, an expanding FAB
 * menu, the wavy loading indicator, and a navigation bar whose active glyph
 * fills. Everything runs on the same tokens as the page, so it re-themes with
 * the site.
 */
export function PhoneMockup() {
  const reduce = useReducedMotion();
  const [destination, setDestination] = useState("home");
  const [segment, setSegment] = useState("Week");
  const [fabOpen, setFabOpen] = useState(false);
  const [progress, setProgress] = useState(0.35);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setProgress((p) => (p >= 0.95 ? 0.2 : p + 0.05)), 900);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative mx-auto h-[620px] w-[300px] rounded-[40px] border-[10px] border-surface-container-highest bg-surface shadow-dialog">
      <div className="absolute left-1/2 top-3 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-surface-container-highest" />

      <div className="flex h-full flex-col overflow-hidden rounded-[30px] bg-surface-container-low">
        <div className="flex-1 space-y-4 overflow-hidden px-4 pb-2 pt-11">
          <header className="flex items-center justify-between">
            <div>
              <p className="font-mono text-label-sm uppercase tracking-[1.2px] text-on-surface-variant">
                Welcome back
              </p>
              <p className="font-display text-title-lg text-on-surface">Rajkumar</p>
            </div>
            <span className="grid size-10 place-items-center rounded-full bg-primary font-mono text-label-md text-on-primary">
              RB
            </span>
          </header>

          {/* Button group — a connected run with a springy selection. */}
          <div className="run">
            {SEGMENTS.map((item) => {
              const active = segment === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSegment(item)}
                  className={cn(
                    "relative flex-1 py-2 text-label-md transition-colors duration-[140ms] ease-standard",
                    active
                      ? "text-on-primary"
                      : "bg-surface-container-high text-on-surface-variant",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="phone-segment"
                      transition={springs.transition}
                      className="absolute inset-0 rounded-[inherit] bg-primary"
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-card bg-primary p-4 text-on-primary">
            <p className="font-mono text-label-sm uppercase tracking-[1.2px] opacity-80">
              Total projects
            </p>
            <p className="font-display emphasized text-headline-md">24</p>
            <span className="mt-2 inline-flex rounded-chip bg-on-primary/20 px-3 py-1 text-label-md">
              +3 this week
            </span>
          </div>

          {/* Two tiles of the same family, fused. */}
          <div className="run">
            <div className="flex-1 bg-tertiary-container p-3 text-on-tertiary-container">
              <Icon name="edit" size={20} />
              <p className="mt-6 text-label-lg">Design</p>
            </div>
            <div className="flex-1 bg-secondary-container p-3 text-on-secondary-container">
              <Icon name="share" size={20} />
              <p className="mt-6 text-label-lg">Ship</p>
            </div>
          </div>

          <div>
            <p className="mb-2 font-mono text-label-sm uppercase tracking-[1.2px] text-on-surface-variant">
              Build progress
            </p>
            <WavyProgress value={progress} animate={!reduce} />
          </div>
        </div>

        {/* FAB menu */}
        <div className="pointer-events-none absolute bottom-28 right-4 z-20 flex flex-col items-end gap-2">
          <AnimatePresence>
            {fabOpen &&
              (["search", "edit"] as const).map((name, i) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0, scale: 0.4, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.4, y: 12 }}
                  transition={{ ...springs.gap, delay: i * 0.04 }}
                  className="pointer-events-auto grid size-10 place-items-center rounded-fab bg-secondary-container text-on-secondary-container shadow-fab"
                >
                  <Icon name={name} size={18} />
                </motion.span>
              ))}
          </AnimatePresence>
          <motion.button
            type="button"
            aria-label={fabOpen ? "Close actions" : "Open actions"}
            onClick={() => setFabOpen((open) => !open)}
            initial={false}
            animate={{ rotate: fabOpen ? 45 : 0 }}
            whileTap={{ scale: 0.94 }}
            transition={springs.corner}
            className="pointer-events-auto grid size-14 place-items-center rounded-fab bg-tertiary-container text-on-tertiary-container shadow-fab"
          >
            <Icon name="add" size={24} />
          </motion.button>
        </div>

        {/* Navigation bar — active glyph fills, indicator morphs between items. */}
        <nav className="flex items-stretch justify-around bg-surface-container px-1 py-2">
          {DESTINATIONS.map(({ id, label, icon }) => {
            const active = destination === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setDestination(id)}
                className="flex flex-1 flex-col items-center gap-1"
              >
                <span className="relative flex h-7 w-12 items-center justify-center">
                  {active && (
                    <motion.span
                      layoutId="phone-nav-indicator"
                      transition={springs.transition}
                      className="absolute inset-0 rounded-full bg-secondary-container"
                    />
                  )}
                  <Icon
                    name={icon}
                    filled={active}
                    size={18}
                    className={cn(
                      "relative z-10",
                      active ? "text-on-secondary-container" : "text-on-surface-variant",
                    )}
                  />
                </span>
                <span
                  className={cn(
                    "text-label-sm",
                    active ? "font-bold text-on-surface" : "text-on-surface-variant",
                  )}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

/** M3's determinate progress indicator: the filled track is a sine wave. */
function WavyProgress({ value, animate }: { value: number; animate: boolean }) {
  const width = 240;
  const height = 12;
  const wavelength = 16;
  const amplitude = 3;

  const points: string[] = [];
  for (let x = 0; x <= width; x += 2) {
    const y = height / 2 + Math.sin((x / wavelength) * Math.PI * 2) * amplitude;
    points.push(`${x},${y.toFixed(2)}`);
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-3 w-full" aria-hidden>
      <line
        x1={0}
        y1={height / 2}
        x2={width}
        y2={height / 2}
        className="stroke-surface-container-highest"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <motion.polyline
        points={points.join(" ")}
        fill="none"
        className="stroke-primary"
        strokeWidth={4}
        strokeLinecap="round"
        initial={false}
        animate={{ pathLength: value }}
        transition={animate ? springs.transition : { duration: 0 }}
      />
    </svg>
  );
}
