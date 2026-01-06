"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="pt-8 pb-28 md:py-8 border-t border-glass-border mt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Rajkumar Bhakta. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/Rajkumarbhakta/" className="text-gray-400 hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/rajkumar-bhakta" className="text-gray-400 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://play.google.com/store/apps/dev?id=8595458926248803860" className="opacity-60 hover:opacity-100 transition-opacity">
                        <Image
                            src="/google_play.png"
                            alt="Play Store"
                            width={20}
                            height={20}
                            className="w-5 h-5 grayscale hover:grayscale-0 transition-all"
                        />
                    </a>
                    <a href="mailto:contact@rkbapps.in" className="text-gray-400 hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
