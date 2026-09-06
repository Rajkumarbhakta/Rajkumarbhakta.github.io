import type { ContactDetail, SocialLink, Stat } from "./types";

export const profile = {
  name: "Rajkumar Bhakta",
  initials: "RB",
  role: "Mobile Engineer",
  specialisms: "Android · Kotlin Multiplatform · Flutter",
  tagline: "Building production Android and cross-platform apps",
  intro:
    "Mobile engineer with 3 years building and maintaining production apps across native Android and cross-platform stacks — Kotlin, Jetpack Compose, Kotlin Multiplatform and Flutter. Five apps shipped on Google Play with 30K+ cumulative downloads, plus on-device AI features built on Google AI Edge SDK, LiteRT and ML Kit.",
  bio: "I work primarily in Kotlin and Jetpack Compose, with a lot of time spent in Kotlin Multiplatform and Flutter for cross-platform delivery. Most of what I build is offline-first and architecture-led — MVVM and Clean Architecture, modularised, dependency-injected — because that is what keeps an app maintainable once it is actually in the store. Lately I have been shipping on-device AI: OCR, segmentation, and local LLM inference that runs entirely without a network.",
  email: "contact@rkbapps.in",
  phone: "+91 8373001874",
  location: "Kolkata, India",
  playStore: "https://play.google.com/store/apps/dev?id=8595458926248803860",
  /** Served from public/. Replace that file to publish a new version. */
  resume: "/rajkumar-bhakta-resume.pdf",
} as const;

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  institution: "GMIT, Kolkata",
  period: "2020 – 2024",
  result: "CGPA 9.02",
} as const;

export const stats: Stat[] = [
  { label: "Years experience", value: 3, suffix: "" },
  { label: "Apps on Play Store", value: 5, suffix: "+" },
  { label: "Downloads", value: 30, suffix: "K+" },
  { label: "Active users", value: 7, suffix: "K+" },
];

export const contactDetails: ContactDetail[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "mail", tone: "primary" },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: "call",
    tone: "secondary",
  },
  { label: "Location", value: profile.location, href: "#contact", icon: "location_on", tone: "tertiary" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Rajkumarbhakta/", icon: "code" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rajkumar-bhakta", icon: "person" },
  { label: "Play Store", href: profile.playStore, icon: "playstore" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];
