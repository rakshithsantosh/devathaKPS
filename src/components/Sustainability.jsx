import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Wind, Sun, ShieldCheck } from 'lucide-react';

const Sustainability = () => {
    const features = [
        {
            icon: <Wind className="w-6 h-6" />,
            title: "Natural Ventilation",
            desc: "Designed to breathe. Strategically placed openings ensure constant air flow, eliminating the need for artificial cooling."
        },
        {
            icon: <Sun className="w-6 h-6" />,
            title: "Abundant Daylighting",
            desc: "Large apertures and corridors flooded with natural light, creating a vibrant learning environment while saving energy."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Durable Materials",
            desc: "Natural granite and wire-cut bricks require zero maintenance and age gracefully, standing strong against the elements."
        },
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "Low Carbon Footprint",
            desc: "Minimized cement usage and locally sourced materials significantly reduce the environmental impact of our campus."
        }
    ];

    return (
        <section id="sustainability" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-terracotta font-bold tracking-[0.2em] uppercase text-xs"
                    >
                        Responsible Architecture
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading text-deep-brown mt-4 mb-6"
                    >
                        Thoughtfully Built. <br />
                        <span className="italic">Responsibly Designed.</span>
                    </motion.h2>
                    <p className="text-stone-grey">
                        Every brick and stone in our school has been placed with a purpose: to create a healthy, lasting, and inspiring space for education.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-bg-offwhite rounded-2xl border border-warm-sand/50 hover:border-terracotta/20 transition-all hover:shadow-soft group"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center text-terracotta mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-heading text-deep-brown mb-4">{item.title}</h3>
                            <p className="text-stone-grey text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-24 rounded-3xl overflow-hidden relative h-[400px] bg-warm-sand flex items-center justify-center"
                >
                    {/* Sustainability Background Image Placeholder */}
                    <div className="absolute inset-0 bg-olive-green/5 mix-blend-multiply" />
                    <div className="relative text-center z-10 px-6">
                        <h3 className="text-3xl font-heading text-deep-brown mb-4">A Healthier Learning Atmosphere</h3>
                        <p className="text-stone-grey max-w-lg mx-auto mb-8">
                            We provide a campus that respects both the child and the planet, fostering a deep connection with nature from the first day of school.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Sustainability;
