import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
    return (
        <section id="story" className="py-24 bg-bg-offwhite overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading text-deep-brown mb-8 leading-tight">
                            Built with <span className="italic">Intention</span>
                        </h2>
                        <div className="space-y-6 text-stone-grey text-lg leading-relaxed">
                            <p>
                                Founded with the vision of Shri Devatha Krishna Prasad and family, Devatha KPS is more than just a school. It is a commitment to the future of Rampura, providing equal access to high-quality English medium education in a government-supported framework.
                            </p>
                            <p className="font-semibold text-deep-brown">
                                We believe that the environment where a child learns is as important as the curriculum itself.
                            </p>
                            <p>
                                Our campus is a testament to sustainable living. Using locally sourced granite and traditional wire-cut bricks, we've created a structure that breathes naturally, stays cool in the heat, and stands as a symbol of resilience for generations to come.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-8">
                            <div>
                                <span className="block text-3xl font-heading text-terracotta">1-5</span>
                                <span className="text-xs uppercase tracking-widest text-stone-grey">Grades Offered</span>
                            </div>
                            <div className="w-px h-12 bg-warm-sand" />
                            <div>
                                <span className="block text-3xl font-heading text-terracotta">30</span>
                                <span className="text-xs uppercase tracking-widest text-stone-grey">Students / Class</span>
                            </div>
                            <div className="w-px h-12 bg-warm-sand" />
                            <div>
                                <span className="block text-3xl font-heading text-terracotta">100%</span>
                                <span className="text-xs uppercase tracking-widest text-stone-grey">Sustainable Materials</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-medium">
                            <div
                                className="aspect-[4/5] bg-warm-sand flex items-center justify-center relative group"
                            >
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-stone-grey opacity-20 mix-blend-overlay" />
                                <div className="text-center p-12">
                                    <div className="w-20 h-20 border-2 border-terracotta relative mx-auto mb-6 transform rotate-45 flex items-center justify-center">
                                        <span className="transform -rotate-45 font-heading text-2xl text-terracotta">KPS</span>
                                    </div>
                                    <h3 className="font-heading text-2xl text-deep-brown">Nature's Material</h3>
                                    <p className="text-sm text-stone-grey mt-2 italic">Granite & Wire-cut Bricks</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Floating Element */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-terracotta rounded-full -z-10 opacity-10 blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Story;
