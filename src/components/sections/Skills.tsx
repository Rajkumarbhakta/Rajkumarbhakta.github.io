"use client";

import { motion } from "framer-motion";

const skills = [
    // Programming Languages
    { name: "Kotlin", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "Dart", category: "Languages" },

    // Cross-Platform Development
    { name: "Flutter", category: "Cross-Platform" },
    { name: "Compose Multiplatform", category: "Cross-Platform" },
    { name: "Kotlin Multiplatform", category: "Cross-Platform" },

    // Frameworks & Architecture
    { name: "MVVM", category: "Architecture" },
    { name: "Jetpack Compose", category: "Android" },
    { name: "Retrofit", category: "Android" },
    { name: "Room DB", category: "Android" },
    { name: "Hilt", category: "DI" },
    { name: "Koin", category: "DI" },

    // Backend & Network
    { name: "Spring Boot", category: "Backend" },
    { name: "Ktor Client", category: "Network" },

    // Tools & Platforms
    { name: "Android Studio", category: "Tools" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Firebase Suite", category: "Backend" },

    // CI/CD & Testing
    { name: "GitHub Actions", category: "CI/CD" },
    { name: "JUnit", category: "Testing" },
    { name: "Espresso", category: "Testing" },
];

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                            className="glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold text-lg">
                                {skill.name.charAt(0)}
                            </div>
                            <span className="font-medium text-gray-200">{skill.name}</span>
                            <span className="text-xs text-gray-500">{skill.category}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
