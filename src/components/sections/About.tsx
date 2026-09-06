"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Reveal, RevealGroup, SectionHeader } from "@/components/ui";
import { profile, stats } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Last tile in the run takes the accent, as the guide's own tier block does. */
const TILE_TONES = [
  "bg-surface-container text-on-surface",
  "bg-surface-container text-on-surface",
  "bg-primary-container text-on-primary-container",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-10">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Passionate about creating <span className="text-primary">intuitive</span> mobile
              experiences
            </>
          }
        />

        <Reveal className="mt-6 max-w-[68ch]">
          <p className="text-body-lg text-on-surface-variant">{profile.bio}</p>
        </Reveal>

        {/* A connected run of stat tiles: 28dp outer, 8dp inner, 3px gap. */}
        <RevealGroup className="run mt-10 max-w-[760px] flex-col sm:flex-row">
          {stats.map((stat, index) => (
            <Reveal asChild key={stat.label} className="flex-1">
              <div className={cn("flex h-full flex-col gap-1 px-6 py-6", TILE_TONES[index % 3])}>
                <CountUp value={stat.value} suffix={stat.suffix} />
                <span className="font-mono text-label-sm uppercase tracking-[1.2px] opacity-70">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/** Counts up once the tile scrolls into view. */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;

    const duration = 900;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // Ease-out so it decelerates into the final number.
      setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="font-display emphasized text-headline-md tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
