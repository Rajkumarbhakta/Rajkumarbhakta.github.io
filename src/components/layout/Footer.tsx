import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="pt-8 pb-28 md:py-8 border-t border-glass-border mt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Rajkumar Bhakta. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
