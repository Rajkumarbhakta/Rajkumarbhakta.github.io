"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Icon, LinkButton, MorphShape, Reveal, RevealGroup } from "@/components/ui";
import { PhoneMockup } from "./PhoneMockup";
import { profile } from "@/data/profile";
import { springs } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-10">
      <MorphShape
        sequence={["clover", "cookie", "flower"]}
        className="pointer-events-none absolute -left-40 top-8 size-[26rem] text-primary/12 blur-3xl"
      />
      <MorphShape
        sequence={["gem", "sunny", "squircle"]}
        className="pointer-events-none absolute -right-32 bottom-0 size-[30rem] text-tertiary/12 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-[1180px] items-center gap-16 lg:grid-cols-[1fr_auto]">
        <RevealGroup className="flex max-w-[68ch] flex-col items-start gap-5">
          <Reveal asChild>
            <p className="font-mono text-label-sm uppercase tracking-[1.6px] text-primary">
              {profile.role} · {profile.specialisms}
            </p>
          </Reveal>

          <Reveal asChild expressive>
            <h1
              className="font-display text-headline-md text-on-surface sm:text-display-sm lg:text-display-lg"
              style={{ fontVariationSettings: '"wdth" 96, "wght" 700' }}
            >
              Hi, I&apos;m <span className="text-primary">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal asChild>
            <p className="max-w-[60ch] text-title-lg text-on-surface-variant">{profile.tagline}</p>
          </Reveal>

          <Reveal asChild>
            <p className="max-w-[68ch] text-body-lg text-on-surface-variant">{profile.intro}</p>
          </Reveal>

          {/* Two buttons of the same family side by side fuse into a run. */}
          <Reveal asChild>
            <div className="run mt-2">
              <LinkButton href="#projects" variant="filled" size="lg">
                View Projects
                <Icon name="arrow_forward" size={20} />
              </LinkButton>
              <LinkButton href="#contact" variant="tonal" size="lg">
                Contact Me
              </LinkButton>

            </div>
          </Reveal>
        </RevealGroup>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springs.transition}
          className="relative mx-auto hidden w-fit lg:block"
        >
          <PhoneMockup />

          <motion.div
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-7 top-32 z-30 grid size-12 place-items-center rounded-fab bg-surface-container-high text-primary shadow-fab"
          >
            <Icon name="code" size={22} />
          </motion.div>
          <motion.div
            animate={reduce ? undefined : { y: [0, 12, 0] }}
            transition={
              reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }
            className="absolute -right-7 bottom-36 z-30 grid size-12 place-items-center rounded-fab bg-surface-container-high text-tertiary shadow-fab"
          >
            <Icon name="layers" size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
