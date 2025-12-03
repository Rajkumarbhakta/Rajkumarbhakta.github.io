"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Senior Mobile Developer",
        company: "Tech Solutions Inc.",
        period: "2022 - Present",
        description: "Leading the mobile development team in building cross-platform applications using React Native. Improved app performance by 40% and implemented CI/CD pipelines.",
        skills: ["React Native", "TypeScript", "Redux", "CI/CD"],
    },
    {
        role: "Mobile App Developer",
        company: "Creative Apps Studio",
        period: "2020 - 2022",
        description: "Developed and maintained multiple iOS and Android applications using Flutter. Collaborated with designers to implement pixel-perfect UIs.",
        skills: ["Flutter", "Dart", "Firebase", "Figma"],
    },
    {
        role: "Junior iOS Developer",
        company: "StartUp Hub",
        period: "2018 - 2020",
        description: "Assisted in the development of native iOS applications using Swift. Fixed bugs and implemented new features for existing apps.",
        skills: ["Swift", "UIKit", "CoreData"],
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
