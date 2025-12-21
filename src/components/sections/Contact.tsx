"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
        window.location.href = `mailto:contact@rkbapps.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in <span className="text-gradient">Touch</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? Let's build something amazing together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/20 text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                                <p className="text-gray-400">contact@rkbapps.in</p>
                            </div>
                        </div>
                        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                            <div className="p-3 rounded-full bg-secondary/20 text-secondary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                                <p className="text-gray-400">+91 8373001874</p>
                            </div>
                        </div>
                        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                            <div className="p-3 rounded-full bg-accent/20 text-accent">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                                <p className="text-gray-400">Kolkata, India</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                                <input
                                    id="subject"
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white h-32 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
