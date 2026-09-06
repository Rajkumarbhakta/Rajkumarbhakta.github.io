"use client";

import { Reveal, RevealGroup } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  /** Mono, uppercase, wide-tracked, primary — the guide's eyebrow treatment. */
  eyebrow: string;
  title: React.ReactNode;
  supporting?: string;
  align?: "start" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  supporting,
  align = "start",
  className,
}: SectionHeaderProps) {
  return (
    <RevealGroup
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Reveal asChild>
        <p className="font-mono text-label-sm uppercase tracking-[1.6px] text-primary">{eyebrow}</p>
      </Reveal>
      <Reveal asChild>
        <h2 className="font-display emphasized max-w-[20ch] text-headline-sm text-on-surface sm:text-headline-md">
          {title}
        </h2>
      </Reveal>
      {supporting && (
        <Reveal asChild>
          <p className="max-w-[68ch] text-body-lg text-on-surface-variant">{supporting}</p>
        </Reveal>
      )}
    </RevealGroup>
  );
}
