import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Beaker, Laptop, Library, MessageCircle } from 'lucide-react';

const AcademicExcellence = () => {
    const academics = [
        {
            icon: <BookOpen className="w-5 h-5" />,
            title: "English Medium Instruction",
            desc: "Building confidence and global readiness through strong linguistic foundations."
        },
        {
            icon: <Beaker className="w-5 h-5" />,
            title: "Science Lab",
            desc: "Practical discovery and exploration for curious young minds."
        },
        {
            icon: <Laptop className="w-5 h-5" />,
            title: "Computer Lab",
            desc: "Digital literacy as a core skill for the modern era."
        },
        {
            icon: <Library className="w-5 h-5" />,
            title: "Library",
            desc: "A quiet space for reading, research, and expanding horizons."
        },
        {
            icon: <MessageCircle className="w-5 h-5" />,
            title: "Spoken English Programs",
            desc: "Dedicated sessions to enhance communication and presentation skills."
        }
    ];

    return (
        <section id="academics" className="py-24 bg-bg-offwhite">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-heading text-deep-brown mb-6">
                            Academic <span className="italic">Excellence</span>
                        </h2>
                        <p className="text-stone-grey leading-relaxed">
                            Our curriculum is designed to balance rigorous academic standards with practical skills, ensuring every student is prepared for the challenges of tomorrow.
                        </p>
                    </div>
                    <div className="bg-terracotta/5 px-6 py-3 rounded-full border border-terracotta/10">
                        <span className="text-terracotta font-semibold text-sm">Classes 1 to 5 • English Medium</span>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {academics.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white rounded-2xl shadow-soft border border-warm-sand/50 hover:shadow-medium transition-all group"
                        >
                            <div className="w-10 h-10 bg-warm-sand/30 rounded-lg flex items-center justify-center text-deep-brown mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-heading text-deep-brown mb-3">{item.title}</h3>
                            <p className="text-stone-grey text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="p-8 bg-terracotta rounded-2xl shadow-medium flex flex-col justify-center items-center text-center text-warm-sand"
                    >
                        <h3 className="text-2xl font-heading mb-2">Expanding Futures</h3>
                        <p className="text-sm opacity-90 mb-6">Extension to 10th Standard in Progress</p>
                        <div className="w-12 h-1 bg-warm-sand/30 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AcademicExcellence;
