"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Smartphone, User, Cpu, Briefcase, Layers, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Layers },
    { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                // Filter for intersecting entries
                const intersectingEntries = entries.filter(entry => entry.isIntersecting);

                if (intersectingEntries.length === 0) return;

                // Find the section that is most visible in the viewport
                const mostVisible = intersectingEntries.reduce((max, entry) => {
                    const rect = entry.target.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;

                    // Calculate how much of the section is visible
                    const visibleTop = Math.max(0, rect.top);
                    const visibleBottom = Math.min(viewportHeight, rect.bottom);
                    const visibleHeight = Math.max(0, visibleBottom - visibleTop);

                    const maxRect = max.target.getBoundingClientRect();
                    const maxVisibleTop = Math.max(0, maxRect.top);
                    const maxVisibleBottom = Math.min(viewportHeight, maxRect.bottom);
                    const maxVisibleHeight = Math.max(0, maxVisibleBottom - maxVisibleTop);

                    return visibleHeight > maxVisibleHeight ? entry : max;
                }, intersectingEntries[0]);

                if (mostVisible) {
                    setActiveSection(mostVisible.target.id);
                }
            },
            {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                rootMargin: '-20% 0px -20% 0px'
            }
        );

        document.querySelectorAll("section[id]").forEach((section) => {
            observer.observe(section);
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Top Navbar (Desktop Only) */}
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",
                    scrolled ? "nav-glass py-4" : "py-6 bg-transparent"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
                        <Smartphone className="w-8 h-8 text-primary" />
                        <span className="text-gradient">Rajkumar Bhakta</span>
                    </Link>

                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:scale-105 transform",
                                    activeSection === link.href.substring(1)
                                        ? "text-primary font-bold"
                                        : "text-gray-300 hover:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="px-6 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary hover:bg-primary/30 transition-all"
                        >
                            Hire Me
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Top Bar (Logo Only) */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-40 p-4 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-white/5">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <Smartphone className="w-6 h-6 text-primary" />
                    <span className="text-gradient">Rajkumar Bhakta</span>
                </Link>
            </div>

            {/* Bottom Navigation (Mobile Only) */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-glass-border pb-safe">
                <div className="flex items-center justify-around p-3">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "flex flex-col items-center gap-1 min-w-[3.5rem] p-1 transition-colors group",
                                    isActive ? "text-primary" : "text-gray-400 hover:text-primary"
                                )}
                            >
                                <div className={cn(
                                    "p-1.5 rounded-full transition-colors",
                                    isActive ? "bg-primary/20" : "group-hover:bg-primary/10"
                                )}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-medium">{link.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
