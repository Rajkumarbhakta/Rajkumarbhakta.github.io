"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Chip, Reveal, RevealGroup, SectionHeader } from "@/components/ui";
import { skillCategories, skills } from "@/data/skills";
import { springs } from "@/lib/motion";

export function Skills() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-10">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          eyebrow="Skills"
          title="Technical arsenal"
          supporting="The languages, frameworks and tooling I reach for. Pick a category to bring it forward."
        />

        {/* Filter chips as one connected run — the segmented-control pattern. */}
        <RevealGroup className="run mt-8 overflow-x-auto pb-1 [scrollbar-width:none]">
          {skillCategories.map((category) => (
            <Reveal asChild key={category}>
              <Chip
                variant="filter"
                selected={active === category}
                onClick={() => setActive((current) => (current === category ? null : category))}
                className="h-[38px]"
              >
                {category}
              </Chip>
            </Reveal>
          ))}
        </RevealGroup>

        {/* Nothing is removed on select — non-matching skills dim in place, so
            the cluster never reflows and loses your reading position. */}
        <RevealGroup className="mt-4 flex max-w-[900px] flex-wrap gap-1.5">
          {skills.map((skill) => {
            const dimmed = active !== null && skill.category !== active;
            return (
              <Reveal asChild key={skill.name}>
                <motion.div
                  animate={{ opacity: dimmed ? 0.38 : 1 }}
                  transition={springs.gap}
                >
                  <Chip asTag>{skill.name}</Chip>
                </motion.div>
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
