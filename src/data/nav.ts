import type { NavItem } from "./types";

/** Shared by the desktop toolbar and the mobile navigation bar. */
export const navItems: NavItem[] = [
  { name: "About", href: "#about", icon: "person" },
  { name: "Skills", href: "#skills", icon: "memory" },
  { name: "Work", href: "#experience", icon: "work" },
  { name: "Projects", href: "#projects", icon: "layers" },
  { name: "Contact", href: "#contact", icon: "mail" },
];
