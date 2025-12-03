"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Apps Published", value: "20+" },
    { label: "Happy Clients", value: "50+" },
];

export function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Passionate about creating <span className="text-gradient">intuitive</span> mobile experiences
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-12">
                        I am a dedicated mobile developer with a strong foundation in both iOS and Android platforms.
                        My journey started with native development, and I've since mastered cross-platform frameworks
                        like React Native and Flutter to deliver efficient, scalable solutions. I believe in clean code,
                        pixel-perfect design, and user-centric development.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass-card p-8 rounded-2xl text-center"
                            >
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
