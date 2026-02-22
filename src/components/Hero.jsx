import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-warm-sand">
            {/* Cinematic Image Placeholder - Using a CSS gradient pattern that feels "grounded" until images are ready */}
            <div
                className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #8C8175 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Soft Light Vignette */}
            <div className="absolute inset-0 bg-gradient-to-tr from-warm-sand via-transparent to-transparent z-0 opacity-60" />

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-terracotta/10 text-terracotta rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8">
                            Rooted in Rampura
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-deep-brown leading-[1.1] mb-8">
                            A New Era of <br />
                            <span className="italic">Education</span> in Rampura
                        </h1>
                        <p className="text-xl md:text-2xl text-stone-grey max-w-xl mb-12 font-light leading-relaxed">
                            Modern, sustainable education for the children of Rampura, rooted in community values and sustainable architecture.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <button className="bg-terracotta text-warm-sand px-10 py-5 rounded-full text-lg font-semibold shadow-soft hover:shadow-medium hover:bg-deep-brown group inline-flex items-center gap-2">
                                Explore Our Campus
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="border-2 border-stone-grey/20 text-deep-brown px-10 py-5 rounded-full text-lg font-semibold hover:border-terracotta hover:text-terracotta transition-all">
                                Admissions Open
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-offwhite to-transparent z-10" />

            {/* Decorative element: Paper Grain Texture (Logic handled in index.css) */}
        </section>
    );
};

export default Hero;
