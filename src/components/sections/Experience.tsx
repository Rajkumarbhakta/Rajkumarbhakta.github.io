"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Software Developer",
        company: "Sentientgeeks Consultancy and Services",
        period: "Mar 2025 - Present",
        description: "Built and optimized Android apps using Jetpack Compose and MVVM architecture. Developed an offline-first employee tracking app with Room DB and Compose UI. Improved app modularity, scalability, and performance through clean architecture.",
        skills: ["Jetpack Compose", "MVVM", "Room DB", "Clean Architecture", "Android"],
    },
    {
        role: "Junior Android Developer",
        company: "Redoq Software Services Ltd.",
        period: "Sep 2023 - Mar 2025",
        description: "Developed and deployed Android and Flutter applications for enterprise clients. Built a POS system with billing, inventory, and analytics using MVVM + Firebase. Created a no-code website builder enabling real-time drag-and-drop UI generation.",
        skills: ["Android", "Flutter", "MVVM", "Firebase", "Enterprise Apps"],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey and career highlights.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent transform md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)] transform md:-translate-x-1/2 mt-1.5 z-10" />

                            {/* Content Card */}
                            <div className="md:w-1/2 pl-8 md:pl-0 md:px-12">
                                <div className={`glass-card p-6 rounded-2xl relative hover:border-primary/30 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                    }`}>
                                    <div className={`flex items-center gap-2 text-primary text-sm font-medium mb-2 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                        }`}>
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                    <div className={`flex items-center gap-2 text-gray-300 mb-4 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                        }`}>
                                        <Briefcase className="w-4 h-4" />
                                        {exp.company}
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                        }`}>
                                        {exp.skills.map((skill) => (
                                            <span key={skill} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Empty Space for alignment */}
                            <div className="md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
