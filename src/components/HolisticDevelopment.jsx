import React from 'react';
import { motion } from 'framer-motion';

const HolisticDevelopment = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-stretch gap-12">
                    {/* Left: Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 rounded-3xl overflow-hidden shadow-medium bg-warm-sand min-h-[400px] relative group"
                    >
                        {/* Visual Split Overlay Pattern */}
                        <div className="absolute inset-0 flex">
                            <div className="w-1/2 h-full border-r border-white/20 relative">
                                <div className="absolute inset-0 bg-stone-grey/10" />
                                <div className="absolute bottom-8 left-8 text-deep-brown">
                                    <span className="text-xs uppercase tracking-widest font-bold">Cultural Heritage</span>
                                    <h4 className="text-2xl font-heading">Expression</h4>
                                </div>
                            </div>
                            <div className="w-1/2 h-full relative">
                                <div className="absolute inset-0 bg-olive-green/10" />
                                <div className="absolute bottom-8 left-8 text-deep-brown">
                                    <span className="text-xs uppercase tracking-widest font-bold">Sports & Play</span>
                                    <h4 className="text-2xl font-heading">Character</h4>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 flex flex-col justify-center py-8"
                    >
                        <span className="text-terracotta font-bold tracking-[0.2em] uppercase text-xs mb-4">Beyond the Classroom</span>
                        <h2 className="text-4xl md:text-5xl font-heading text-deep-brown mb-8 leading-tight">
                            A Complete <span className="italic">Development</span> Path
                        </h2>
                        <div className="space-y-6 text-stone-grey text-lg leading-relaxed">
                            <p>
                                We believe in nurturing the whole child. Our programs extend beyond academic rigor to include cultural arts, sports, and regular exposure visits that broaden perspectives.
                            </p>
                            <p>
                                Through value-based learning and personality development workshops, we ensure our students grow into confident, ethical, and responsible individuals who carry the spirit of Rampura with them wherever they go.
                            </p>
                        </div>

                        <ul className="mt-10 grid grid-cols-2 gap-4">
                            {['Dance & Music', 'Team Sports', 'Nature Outings', 'Value Education', 'Public Speaking', 'Community Service'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-deep-brown font-medium">
                                    <div className="w-1.5 h-1.5 bg-terracotta rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HolisticDevelopment;
