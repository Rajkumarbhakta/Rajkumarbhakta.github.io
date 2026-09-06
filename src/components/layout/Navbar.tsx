"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { springs } from "@/lib/motion";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import Image from "next/image";
import { Icon, LinkButton, ThemeToggle } from "@/components/ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (sections.length === 0) return;

    let frame = 0;

    /**
     * Picks the section occupying the most viewport height.
     *
     * This deliberately measures every section on each pass rather than using
     * an IntersectionObserver. An observer callback only carries the entries
     * whose intersection *changed*, so comparing "most visible" across that
     * partial set can hand the indicator to a section that just barely entered
     * while another one still fills the screen — which is what made it jump
     * around during a scroll. Measuring all of them is a handful of rect reads
     * and cannot disagree with itself.
     */
    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);

      const viewportHeight = window.innerHeight;
      let bestId = "";
      let bestVisible = 0;

      for (const section of sections) {
        const { top, bottom } = section.getBoundingClientRect();
        const visible = Math.min(viewportHeight, bottom) - Math.max(0, top);
        if (visible > bestVisible) {
          bestVisible = visible;
          bestId = section.id;
        }
      }

      // A short trailing section can never win on height, so once the page is
      // scrolled to the end, pin the indicator to it.
      const atBottom =
        window.scrollY + viewportHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) bestId = sections[sections.length - 1].id;

      // Setting the same value is a no-op re-render, so this is cheap.
      if (bestId) setActiveSection(bestId);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Desktop: a top app bar whose nav is itself a connected run. */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 hidden border-b transition-[background-color,border-color,box-shadow] duration-[120ms] ease-standard md:block",
          scrolled
            ? "border-outline-variant bg-surface-container shadow-toolbar"
            : "border-transparent bg-surface",
        )}
      >
        <div className="mx-auto flex max-w-[1180px] items-center gap-4 px-4 py-2.5 sm:px-10">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 font-display text-label-lg text-on-surface"
            style={{ fontVariationSettings: '"wdth" 88, "wght" 750' }}
          >
            {/* The mark carries its own near-white ground, so it needs a hairline
                ring to separate from the light theme's surface. */}
            <Image
              src="/icon-192.png"
              alt=""
              width={26}
              height={26}
              priority
              className="size-[26px] shrink-0 rounded-full ring-1 ring-outline-variant"
            />
            {profile.name}
          </Link>

          {/* Connected run: 28dp outer, 8dp inner, 3px gap. */}
          <nav className="run ml-auto" aria-label="Sections">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "state-layer flex h-[34px] shrink-0 items-center px-3.5 text-label-md",
                    "transition-[background-color,color] duration-[140ms] ease-standard",
                    isActive
                      ? "bg-primary font-semibold text-on-primary"
                      : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />
          <LinkButton href="#contact" size="sm" variant="filled" className="h-[34px] px-4">
            Hire Me
          </LinkButton>
        </div>
      </header>

      {/* Mobile: M3 navigation bar with a morphing active indicator. */}
      <nav
        className="fixed inset-x-0 bottom-0 z-50 bg-surface-container md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Sections"
      >
        <ul className="flex items-stretch justify-around px-2 py-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.name} className="flex-1">
                <Link
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="relative flex h-8 w-16 items-center justify-center">
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator-mobile"
                        transition={springs.transition}
                        className="absolute inset-0 rounded-full bg-secondary-container"
                      />
                    )}
                    {/* M3 fills the glyph of the active destination. */}
                    <Icon
                      name={item.icon}
                      filled={isActive}
                      size={22}
                      className={cn(
                        "relative z-10",
                        isActive ? "text-on-secondary-container" : "text-on-surface-variant",
                      )}
                    />
                  </span>
                  <span
                    className={cn(
                      "text-label-md",
                      isActive ? "font-bold text-on-surface" : "text-on-surface-variant",
                    )}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
