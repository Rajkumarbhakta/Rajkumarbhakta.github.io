"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Briefcase, User } from "lucide-react";

const professionalProjects = [
    {
        title: "Olinda",
        company: "Feelancing",
        description: "A online grocery ordering app with real-time tracking and payment processing.",
        tags: ["Android", "Kotlin", "Jetpack Compose", "Retrofit", "Google Maps API", "Payment Gateway"],
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
        links: { demo: "https://play.google.com/store/apps/details?id=com.webworldtech.olindaa", github: "" },
    },
    {
        title: "Kuick - Order Food Online",
        company: "Redoq Software Services Ltd.",
        description: "Quick online food ordering app with real-time tracking and payment processing.",
        tags: ["Android", "Kotlin", "XML", "Retrofit", "Google Maps API", "Payment Gateway"],
        image: "https://res.cloudinary.com/dbezoksfw/image/upload/v1754301960/Redo/Group_1686552958_nag02g.png",
        links: { demo: "https://play.google.com/store/apps/details?id=com.redoq.kuick", github: "" },
    },
    {
        title: "Kuick Shop CC",
        company: "Redoq Software Services Ltd.",
        description: "A POS application for restaurants and cafes to manage orders and billing.",
        tags: ["Flutter", "Http", "Provider", "Google Analytics"],
        image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800",
        links: { demo: "https://play.google.com/store/apps/details?id=com.redoq.kuick.ccapp", github: "" },
    },
    {
        title: "Kuick Studio",
        company: "Redoq Software Services Ltd.",
        description: "A no-code application builder with drive and database management system.",
        tags: ["Flutter", "Http", "Bloc", "Google Analytics"],
        image: "https://res.cloudinary.com/dbezoksfw/image/upload/v1754486849/Group_1686552654_hw8xhy.png",
        links: { demo: "https://redoq.com/products/kuick-studio", github: "" },
    },
    {
        title: "Trutimer",
        company: "Sentientgeeks Consultancy and Services",
        description: "An efficient offline-first employee time tracking app.",
        tags: ["Android", "Kotlin", "Jetpack Compose", "Room", "Retrofit", "WorkManager", "Google Maps API"],
        image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", github: "" },
    },
    {
        title: "FitLife",
        company: "Sentientgeeks Consultancy and Services",
        description: "A customized food delivery application focused on healthy meals.",
        tags: ["Flutter", "Dio", "Riverpod", "Google Analytics"],
        image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", github: "" },
    },
];

const personalProjects = [
    {
        title: "Canvas (Multiplatform Drawing App)",
        description: "Cross-platform drawing app (Android, iOS, web, desktop) with offline storage, customizable brushes, undo/redo, and dark mode. 10K+ downloads and 2K+ active users.",
        tags: ["Kotlin Multiplatform", "Compose Multiplatform", "Coroutines", "Koin"],
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
        links: { demo: "https://me.rkbapps.in/canvas_build", github: "https://github.com/Rajkumarbhakta/Canvas" },
    },
    {
        title: "TooAI (AI Utility App)",
        description: "On-device AI app offering OCR, barcode scanning, and image segmentation using Google ML Kit and TensorFlow Lite.",
        tags: ["Android", "Kotlin", "Jetpack Compose", "ML Kit", "CameraX", "Hilt"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        links: { demo: "https://play.google.com/store/apps/details?id=com.rkbapps.tooai", github: "https://github.com/Rajkumarbhakta/TooAi" },
    },
    {
        title: "G Dealz (Gaming Deals App)",
        description: "Tracks real-time game deals and free giveaways with notifications. 7K+ downloads. Top rankings in Play Store's 'Top New Free Apps'.",
        tags: ["Android", "Kotlin", "Retrofit", "Room DB", "Hilt"],
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
        links: { demo: "https://play.google.com/store/apps/details?id=com.rkbapps.gdealz", github: "https://github.com/Rajkumarbhakta/GDealz" },
    },
    {
        title: "Physics Galaxy (EdTech App)",
        description: "Interactive physics learning app with study materials, online tests, and integrated payments. 2K+ downloads.",
        tags: ["Kotlin", "Jetpack Compose", "Hilt", "Firebase Suite", "Payment Gateway"],
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
        links: { demo: "https://play.google.com/store/apps/details?id=com.rkbapps.physicsgalaxy", github: "#" },
    },
    {
        title: "CGPA Calculator - MAKAUT",
        description: "A comprehensive CGPA/SGPA calculator designed specifically for MAKAUT students (WBUT).",
        tags: ["Kotlin", "Jetpack Compose", "Room DB", "Hilt"],
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
        links: { demo: "https://play.google.com/store/apps/details?id=com.rkbapps.makautsgpaygpacalculator", github: "https://github.com/Rajkumarbhakta/cgpa_calculator_makaut" },
    },
    {
        title: "Nested Menu Bar",
        description: "A Flutter package for creating multi-level nested horizontal menu bars with ease.",
        tags: ["Flutter"],
        image: "https://github.com/Rajkumarbhakta/nested_menu_bar/raw/main/screenshot/screenshot.png",
        links: { demo: "https://pub.dev/packages/nested_menu_bar", github: "https://github.com/Rajkumarbhakta/nested_menu_bar" },
    },
    {
        title: "Neetflix",
        description: "Movie discovery application powered by the TMDB API.",
        tags: ["Android", "Java", "Kotlin", "XML", "Retrofit", "Room DB"],
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
        links: { demo: "https://github.com/Rajkumarbhakta/Neetflix/releases", github: "https://github.com/Rajkumarbhakta/Neetflix" },
    },
    {
        title: "Pixy",
        description: "Stock image discovery app fetching real-time data from the Unsplash API.",
        tags: ["Android", "Kotlin", "Jetpack Compose", "Retrofit", "Room DB"],
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", github: "https://github.com/Rajkumarbhakta/Pixy" },
    },
    {
        title: "Video Player",
        description: "Android video player built with ExoPlayer and Jetpack Compose.",
        tags: ["Android", "Kotlin", "Jetpack Compose", "ExoPlayer"],
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", github: "https://github.com/Rajkumarbhakta/ExoPlayerDemo" },
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
            <div className="mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                {project.company && (
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                        <Briefcase className="w-3 h-3" />
                        <span>{project.company}</span>
                    </div>
                )}
            </div>
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
                {project.links.github && project.links.github !== "#" && project.links.github !== "" && (
                    <a
                        href={project.links.github}
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                        <Github className="w-4 h-4" /> Code
                    </a>
                )}
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
