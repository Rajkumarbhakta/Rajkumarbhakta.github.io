"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon, IconLink } from "@/components/ui";
import { navItems } from "@/data/nav";
import { profile, socialLinks } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-outline-variant pb-28 pt-8 md:pb-12">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-6 px-4 sm:px-10">
        {/* Footer nav is a connected run too — same three numbers as the header. */}
        <nav className="run flex-wrap justify-center" aria-label="Footer">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="state-layer flex h-[34px] items-center bg-surface-container-high px-3.5 text-label-md text-on-surface-variant transition-colors duration-[140ms] ease-standard hover:bg-surface-container-highest"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, icon }) => (
            <IconLink
              key={label}
              label={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="size-10"
            >
              {icon === "playstore" ? (
                <Image src="/google_play.png" alt="" width={20} height={20} className="size-5" />
              ) : (
                <Icon name={icon} size={20} />
              )}
            </IconLink>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <Image
            src="/icon-192.png"
            alt=""
            width={22}
            height={22}
            className="size-[22px] shrink-0 rounded-full ring-1 ring-outline-variant"
          />
          <p className="font-mono text-label-sm text-on-surface-variant">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
