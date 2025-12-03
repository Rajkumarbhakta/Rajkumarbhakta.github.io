"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Briefcase, User } from "lucide-react";

const professionalProjects = [
    {
        title: "Enterprise Banking App",
        description: "Secure mobile banking application for a major financial institution. Implemented biometric authentication and real-time transaction updates.",
        tags: ["React Native", "TypeScript", "Redux Saga"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", github: "#" },
    },
    {
        title: "Healthcare Telemedicine Platform",
        description: "Video consultation app connecting patients with doctors. Features include appointment scheduling, secure video calls, and prescription management.",
        tags: ["Flutter", "WebRTC", "Firebase"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", github: "#" },
    },
];

const personalProjects = [
    {
        title: "Fitness Tracker App",
        description: "A comprehensive fitness tracking application with workout plans, diet tracking, and progress analytics.",
        tags: ["React Native", "Firebase", "Redux"],
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", github: "#" },
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media managers to track engagement and growth across platforms.",
        tags: ["React", "TypeScript", "Chart.js"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", github: "#" },
    },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors"
    >
        <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag: string) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex items-center gap-4">
                <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                    <Github className="w-4 h-4" /> Code
                </a>
            </div>
        </div>
    </motion.div>
);

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work in mobile and web development.
                    </p>
                </motion.div>

                {/* Professional Projects */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-primary/20 text-primary">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Professional Projects</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {professionalProjects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </div>
                </div>

                {/* Personal Projects */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-secondary/20 text-secondary">
                            <User className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Personal Projects</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {personalProjects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
