import type { IconName } from "@/components/ui/Icon";

export type SkillCategory =
  | "Languages"
  | "Android"
  | "Cross-Platform"
  | "Architecture"
  | "On-Device AI"
  | "Backend"
  | "Testing & CI/CD"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface ProjectLinks {
  demo?: string;
  github?: string;
}

export interface Project {
  /** Stable key for lists; also the anchor for a future per-project route. */
  slug: string;
  title: string;
  kind: "professional" | "personal";
  company?: string;
  description: string;
  tags: string[];
  image: string;
  links: ProjectLinks;
}

export interface Experience {
  role: string;
  company: string;
  /** Initials shown in the timeline avatar. */
  companyShort: string;
  location: string;
  start: string;
  /** `null` renders as "Present". */
  end: string | null;
  highlights: string[];
  skills: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface NavItem {
  name: string;
  href: `#${string}`;
  icon: IconName;
}

export interface ContactDetail {
  label: string;
  value: string;
  href: string;
  icon: IconName;
  /** Which container role tints the leading icon. */
  tone: "primary" | "secondary" | "tertiary";
}

export interface SocialLink {
  label: string;
  href: string;
  /** `"playstore"` renders the Play Store image instead of a glyph. */
  icon: IconName | "playstore";
}
