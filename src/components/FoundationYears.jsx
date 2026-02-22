import React from 'react';
import { motion } from 'framer-motion';

const FoundationYears = () => {
    return (
        <section className="py-24 bg-bg-offwhite relative overflow-hidden">
            {/* Soft Pastel Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-olive-green/5 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading text-deep-brown">Foundation <span className="italic">Years</span></h2>
                        <p className="text-stone-grey mt-4">Strong Beginnings Create Confident Futures.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="order-2 md:order-1"
                        >
                            <h3 className="text-2xl font-heading text-deep-brown mb-6 italic">Early Childhood Care (Anganwadi)</h3>
                            <div className="space-y-6 text-stone-grey">
                                <p>
                                    Our foundation years are designed with a child-centric approach. We provide a nurturing environment where the youngest members of our community can explore, play, and learn safely.
                                </p>
                                <div className="p-6 bg-white rounded-2xl shadow-soft border-l-4 border-terracotta/30">
                                    <p className="text-sm italic font-medium text-deep-brown">
                                        "At Devatha KPS, we focus on sensory-rich environments and low-height perspectives to ensure every child feels seen and supported."
                                    </p>
                                </div>
                                <ul className="space-y-3">
                                    {['Safe & hygienic facility', 'Dedicated play areas', 'Nutritional support', 'Stimulating learning aids'].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm">
                                            <div className="w-4 h-4 rounded-full bg-warm-sand flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-terracotta rounded-full" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2 rounded-3xl overflow-hidden aspect-square bg-white shadow-medium p-4"
                        >
                            <div className="w-full h-full bg-warm-sand/50 rounded-2xl flex items-center justify-center">
                                {/* Child-centric Photography Placeholder */}
                                <div className="text-center p-8 opacity-40">
                                    <div className="w-16 h-16 bg-terracotta/20 rounded-full mx-auto mb-4" />
                                    <p className="font-heading text-deep-brown">Safe Haven</p>
                                    <p className="text-xs uppercase tracking-widest mt-1">Foundation Stage</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundationYears;
