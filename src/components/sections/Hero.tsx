"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Code, Layers } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 rounded-full glass border-primary/30 text-primary mb-6">
                        <span className="flex items-center gap-2 text-sm font-medium">
                            <Smartphone className="w-4 h-4" />
                            Mobile App Developer
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <span className="text-gradient">Rajkumar Bhakta</span>
                        <br />
                        <span className="text-3xl md:text-5xl block mt-2 text-white">Building Digital Experiences for Mobile</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg">
                        I craft high-performance, beautiful mobile applications specializing in Native Android (Kotlin & Java).
                        I also build cross-platform solutions using Flutter and Compose Multiplatform. Turning ideas into reality, one pixel at a time.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
                        >
                            View Projects <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-full glass hover:bg-white/10 transition-all font-medium"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Detailed Phone Mockup */}
                    <div className="relative w-[320px] h-[640px] mx-auto bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden glass-card ring-1 ring-white/10">
                        {/* Notch & Sensors */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-2xl z-20 flex justify-center items-center gap-4">
                            <div className="w-16 h-1.5 bg-gray-800 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                        </div>

                        {/* Side Buttons */}
                        <div className="absolute top-24 -right-2.5 w-1 h-16 bg-gray-700 rounded-r-md"></div>
                        <div className="absolute top-24 -left-2.5 w-1 h-8 bg-gray-700 rounded-l-md"></div>
                        <div className="absolute top-36 -left-2.5 w-1 h-16 bg-gray-700 rounded-l-md"></div>

                        {/* Screen Content - Mock App UI */}
                        <div className="w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-black p-5 flex flex-col gap-5 pt-14 relative overflow-hidden">

                            {/* Status Bar Mock */}
                            <div className="flex justify-between items-center text-[10px] text-gray-400 px-2">
                                <span>9:41</span>
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 bg-gray-600 rounded-sm"></div>
                                    <div className="w-3 h-3 bg-gray-600 rounded-sm"></div>
                                    <div className="w-4 h-3 bg-gray-600 rounded-sm"></div>
                                </div>
                            </div>

                            {/* App Header */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-xs text-gray-400">Welcome back</div>
                                    <div className="text-lg font-bold text-white">Rajkumar</div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary p-0.5">
                                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-xs font-bold text-white">RB</div>
                                </div>
                            </div>

                            {/* Balance/Stats Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="w-full h-36 rounded-2xl bg-gradient-to-r from-primary/80 to-secondary/80 p-5 text-white shadow-lg shadow-primary/20 relative overflow-hidden"
                            >
                                <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                                <div className="text-sm opacity-80 mb-1">Total Projects</div>
                                <div className="text-3xl font-bold mb-4">24 Active</div>
                                <div className="flex gap-2 text-xs">
                                    <span className="bg-white/20 px-2 py-1 rounded-lg">+3 this week</span>
                                </div>
                            </motion.div>

                            {/* Quick Actions Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="h-28 rounded-2xl bg-white/5 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors cursor-pointer"
                                >
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <Code className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-200">Code</span>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="h-28 rounded-2xl bg-white/5 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors cursor-pointer"
                                >
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                        <Layers className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-200">Design</span>
                                </motion.div>
                            </div>

                            {/* Recent Activity List */}
                            <div className="flex-1 overflow-hidden">
                                <div className="text-sm font-medium text-gray-400 mb-3">Recent Activity</div>
                                <div className="space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.9 + (i * 0.1) }}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-gray-800"></div>
                                            <div className="flex-1">
                                                <div className="h-2 w-24 bg-gray-700 rounded mb-1.5"></div>
                                                <div className="h-2 w-16 bg-gray-800 rounded"></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Nav Bar */}
                            <div className="absolute bottom-4 left-4 right-4 h-14 rounded-2xl bg-gray-900/90 backdrop-blur-md flex items-center justify-around px-2 border border-white/5">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary"><div className="w-4 h-4 rounded-sm bg-current"></div></div>
                                <div className="w-8 h-8 flex items-center justify-center text-gray-600"><div className="w-4 h-4 rounded-sm bg-current"></div></div>
                                <div className="w-8 h-8 flex items-center justify-center text-gray-600"><div className="w-4 h-4 rounded-sm bg-current"></div></div>
                                <div className="w-8 h-8 flex items-center justify-center text-gray-600"><div className="w-4 h-4 rounded-sm bg-current"></div></div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-32 -right-8 p-3 rounded-xl glass border-primary/30 shadow-xl z-30 bg-black/50 backdrop-blur-md"
                        >
                            <Code className="w-6 h-6 text-primary" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-32 -left-8 p-3 rounded-xl glass border-secondary/30 shadow-xl z-30 bg-black/50 backdrop-blur-md"
                        >
                            <Layers className="w-6 h-6 text-secondary" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
