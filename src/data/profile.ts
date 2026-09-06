import type { ContactDetail, SocialLink, Stat } from "./types";

export const profile = {
  name: "Rajkumar Bhakta",
  initials: "RB",
  role: "Mobile App Developer",
  tagline: "Building Digital Experiences for Mobile",
  intro:
    "I craft high-performance, beautiful mobile applications specializing in Native Android (Kotlin & Java). I also build cross-platform solutions using Flutter and Compose Multiplatform. Turning ideas into reality, one pixel at a time.",
  bio: "I am a dedicated mobile developer with deep expertise in Native Android development (Kotlin & Java). My journey is rooted in native development, and I've expanded my skills to cross-platform architectures using Flutter and Kotlin Multiplatform to deliver efficient, scalable solutions. I believe in clean code, modern architecture, and user-centric development.",
  email: "contact@rkbapps.in",
  phone: "+91 8373001874",
  location: "Kolkata, India",
  playStore: "https://play.google.com/store/apps/dev?id=8595458926248803860",
} as const;

export const stats: Stat[] = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Apps Published", value: 20, suffix: "+" },
  { label: "Happy Clients", value: 50, suffix: "+" },
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
