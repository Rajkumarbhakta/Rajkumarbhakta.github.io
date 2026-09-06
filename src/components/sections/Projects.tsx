"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, Chip, Icon, Reveal, RevealGroup, SectionHeader } from "@/components/ui";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";

type Filter = "all" | "professional" | "personal";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "professional", label: "Professional" },
  { id: "personal", label: "Personal" },
];

/** First card in each group spans wide; the rest fall into a 12-column grid. */
const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-4", "md:col-span-4", "md:col-span-4"];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.kind === filter);

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-10">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          eyebrow="Selected work"
          title="Things I've shipped"
          supporting="Client work and personal apps, from Play Store releases to open-source packages."
        />

        <RevealGroup className="run mt-8 w-fit">
          {FILTERS.map(({ id, label }) => (
            <Reveal asChild key={id}>
              <Chip
                variant="filter"
                selected={filter === id}
                onClick={() => setFilter(id)}
                className="h-[38px]"
              >
                {label}
              </Chip>
            </Reveal>
          ))}
        </RevealGroup>

        {/* Plain div, not a RevealGroup: these cards mount and unmount as the
            filter changes, and each one reveals itself (see ProjectCard) rather
            than inheriting a variant from a parent. */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12">
          {visible.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              span={SPANS[index % SPANS.length]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  span,
  index,
}: {
  project: Project;
  span: string;
  index: number;
}) {
  // Every image is on a third-party CDN, so any of them can 404 without
  // warning. Degrade to a tinted initial rather than a broken-image icon.
  const [imageFailed, setImageFailed] = useState(false);

  return (
    // Self-revealing rather than `asChild`. Framer only propagates a parent's
    // variant to children when the parent's `animate` value *changes*; on a
    // filter switch it stays "show", so a card mounted at that moment would
    // inherit `initial="hidden"` and never be pushed out of it. Staggering by
    // index here keeps the cascade without depending on that propagation.
    <Reveal
      className={cn("sm:col-span-1", span)}
      delay={Math.min(index, 6) * 0.04}
    >
      <Card variant="filled" interactive className="group flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high">
          {imageFailed ? (
            <div className="grid size-full place-items-center bg-primary-container font-display text-headline-md text-on-primary-container">
              {project.title.charAt(0)}
            </div>
          ) : (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => setImageFailed(true)}
              className="object-cover transition-transform duration-[420ms] ease-standard group-hover:scale-[1.03]"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <h3 className="font-display text-title-lg text-on-surface">{project.title}</h3>
            {project.company && (
              <p className="font-mono text-label-sm uppercase tracking-[1.2px] text-primary">
                {project.company}
              </p>
            )}
          </div>

          <p className="flex-1 text-body-md text-on-surface-variant">{project.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <Chip key={tag} asTag className="h-7 px-3 text-label-md">
                {tag}
              </Chip>
            ))}
          </div>

          {(project.links.demo || project.links.github) && (
            <div className="run mt-1 w-fit">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="state-layer flex h-9 items-center gap-1.5 bg-surface-container-highest px-4 text-label-md text-primary"
                >
                  <Icon name="open_in_new" size={16} />
                  Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="state-layer flex h-9 items-center gap-1.5 bg-surface-container-highest px-4 text-label-md text-on-surface-variant"
                >
                  <Icon name="code" size={16} />
                  Code
                </a>
              )}
            </div>
          )}
        </div>
      </Card>
    </Reveal>
  );
}
