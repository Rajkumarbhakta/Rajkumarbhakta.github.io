"use client";

import { Chip, Reveal, RevealGroup, SectionHeader } from "@/components/ui";
import { experiences } from "@/data/experience";

/**
 * Stacked list items within 48dp of each other fuse into a vertical run, so the
 * two roles read as one object rather than two floating cards.
 */
export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-20 sm:px-10">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader eyebrow="Experience" title="Where I've built things" />

        <RevealGroup className="run-y mt-8 max-w-[860px]">
          {experiences.map((job) => (
            <Reveal asChild key={`${job.company}-${job.start}`}>
              <article className="flex gap-5 bg-surface-container p-6 sm:gap-6 sm:p-7">
                <span className="grid size-12 shrink-0 place-items-center rounded-fab bg-primary font-mono text-label-lg text-on-primary">
                  {job.companyShort}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="font-mono text-label-sm uppercase tracking-[1.2px] text-primary">
                    {job.start} — {job.end ?? "Present"}
                  </p>
                  <h3 className="font-display mt-1 text-title-lg text-on-surface">{job.role}</h3>
                  <p className="text-body-md text-on-surface-variant">{job.company}</p>
                  <p className="mt-3 max-w-[68ch] text-body-md text-on-surface-variant">
                    {job.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.skills.map((skill) => (
                      <Chip key={skill} asTag>
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
