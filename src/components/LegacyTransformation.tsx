"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function LegacyTransformation() {
    return (
        <section
            className="py-16 md:py-24"
            style={{ backgroundColor: "#FAFAF8" }}
        >
            {/* Header */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <p className="text-[11px] tracking-[0.2em] uppercase text-[#C65A3A] mb-3 font-semibold">
                        Our Journey
                    </p>

                    <h2
                        className="text-3xl sm:text-3xl md:text-4xl font-semibold"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            color: "#3E2A23",
                        }}
                    >
                        From Legacy to Transformation
                    </h2>
                </motion.div>
            </div>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:block overflow-hidden pb-4">

                {/* 
                  Mobile Timeline Container - Adds vertical spacing, rhythm, 
                  and the subtle connector line *only* visible on mobile 
                */}
                <div className="relative flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-6 pt-[20px] md:pt-0 pb-[20px] md:pb-0 z-0">

                    {/* Removed Mobile Only Vertical Timeline Line Connector for Centered Layout */}

                    {/* CHAPTER 1 */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative bg-white/50 md:bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 md:border-neutral-200 shadow-[0_4px_24px_rgba(0,0,0,0.02)] md:shadow-none backdrop-blur-sm"
                    >
                        <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
                            {/* Chapter Label */}
                            <div className="inline-flex items-center gap-4">
                                <span className="text-[10px] md:text-xs tracking-[0.15em] text-[#C65A3A] uppercase font-medium">
                                    01 / Foundation
                                </span>
                            </div>

                            {/* Heading */}
                            <h3 className="text-[26px] md:text-2xl font-semibold text-[#3E2A23] leading-[1.2] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                A Humble Beginning
                            </h3>

                            {/* Paragraph */}
                            <p className="text-sm md:text-base leading-[1.8] text-neutral-600 max-w-[60ch] font-light">
                                What once stood as a humble government school has been reimagined
                                through the vision of the Devatha Krishna Prasad family — rooted
                                deeply in the values of giving back to society.
                            </p>
                        </div>
                    </motion.div>

                    {/* CHAPTER 2 */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative bg-white/80 md:bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 md:border-neutral-200 shadow-[0_8px_32px_rgba(0,0,0,0.04)] md:shadow-none backdrop-blur-sm"
                    >
                        <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
                            {/* Chapter Label */}
                            <div className="inline-flex items-center gap-4">
                                <span className="text-[10px] md:text-xs tracking-[0.15em] text-[#7B736C] uppercase font-medium">
                                    02 / Evolution
                                </span>
                            </div>

                            {/* Heading */}
                            <h3 className="text-[26px] md:text-2xl font-semibold text-[#3E2A23] leading-[1.2] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                The New Chapter
                            </h3>

                            {/* Paragraphs */}
                            <p className="text-sm md:text-base leading-[1.8] text-neutral-600 max-w-[60ch] font-light">
                                Today, it stands renewed with modern <span className="text-[#3E2A23] font-medium">infrastructure</span>, rooted
                                thinking in values, and updated mediums of instruction.
                                Equipped with contemporary tools and dedicated faculty, the
                                institution is committed to delivering quality education.
                            </p>

                            <p className="text-sm md:text-base leading-[1.8] text-neutral-600 max-w-[60ch] font-light">
                                This <span className="text-[#C65A3A] font-medium">transformation</span> is built to serve deserving students in and
                                around Rampura Village — creating <span className="text-[#3E2A23] font-medium">opportunities</span>, not just classrooms.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}