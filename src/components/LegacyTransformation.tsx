"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const legacyLines = [
    "What once stood as a humble government school",
    "has been reimagined through the vision",
    "of the Devatha Krishna Prasad family -",
    "rooted deeply in the values of giving back to society."
];

const transformationLines = [
    "Today, it stands renewed with modern infrastructure,",
    "rooted thinking in values, and updated mediums of instruction.",
    "Equipped with contemporary tools and dedicated faculty,",
    "the institution is committed to delivering quality education.",
    "This transformation is built to serve deserving students",
    "in and around Rampura Village -",
    "creating opportunities, not just classrooms."
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const blockVariants = (direction: "left" | "right"): Variants => ({
    hidden: {
        opacity: 0,
        x: direction === "left" ? -40 : 40,
        y: 20
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
        }
    }
});

const lineVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const wordVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function LegacyTransformation() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax background text
    const legacyY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const transformationY = useTransform(scrollYProgress, [0, 1], [0, -250]);

    // Timeline growth
    const timelineScaleY = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
    const dotOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);

    const headline = "From Legacy to Transformation";
    const words = headline.split(" ");

    return (
        <section
            ref={sectionRef}
            id="legacy-transformation"
            style={{
                padding: "180px 0",
                backgroundColor: "#FFFFFF",
                position: "relative",
                overflow: "hidden"
            }}
        >
            {/* Background Parallax Typography */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                <motion.div
                    style={{
                        position: "absolute",
                        top: "15%",
                        left: "5%",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(8rem, 20vw, 15rem)",
                        fontWeight: 900,
                        color: "rgba(62, 42, 35, 0.03)",
                        lineHeight: 1,
                        y: legacyY,
                        zIndex: 0
                    }}
                >
                    LEGACY
                </motion.div>
                <motion.div
                    style={{
                        position: "absolute",
                        bottom: "10%",
                        right: "5%",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(8rem, 20vw, 15rem)",
                        fontWeight: 900,
                        color: "rgba(198, 90, 58, 0.03)",
                        lineHeight: 1,
                        y: transformationY,
                        zIndex: 0
                    }}
                >
                    CHANGE
                </motion.div>
            </div>

            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
                {/* Headline with Word Reveal */}
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        color: "#3E2A23",
                        fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                        lineHeight: 1.1,
                        marginBottom: "clamp(60px, 10vw, 140px)",
                        textAlign: "center",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "0.25em"
                    }}
                >
                    {words.map((word, i) => {
                        const isMuted = word === "Legacy";
                        const isHighlighted = word === "Transformation";
                        return (
                            <motion.span
                                key={i}
                                variants={wordVariants}
                                style={{
                                    display: "inline-block",
                                    color: isMuted ? "rgba(62, 42, 35, 0.4)" : isHighlighted ? "#C65A3A" : "inherit"
                                }}
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </motion.h2>

                <div className="relative">
                    {/* Central Vertical Timeline */}
                    <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-rgba(62, 42, 35, 0.05) translate-x-[-0.5px]">
                        <motion.div
                            style={{
                                width: 2,
                                height: "100%",
                                backgroundColor: "rgba(62, 42, 35, 0.15)",
                                scaleY: timelineScaleY,
                                originY: 0
                            }}
                        />
                        {/* Pulsing Dot */}
                        <motion.div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: "50%",
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: "#3E2A23",
                                transform: "translateX(-50%)",
                                opacity: dotOpacity,
                                boxShadow: "0 0 0 4px rgba(62, 42, 35, 0.1)"
                            }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        />
                    </div>

                    <div className="space-y-48 lg:space-y-80">
                        {/* Legacy Block */}
                        <div className="flex justify-start lg:justify-start">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-150px" }}
                                variants={blockVariants("left")}
                                className="pl-12 lg:pl-0 lg:pr-24 w-full lg:w-[45%]"
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                                    <span style={{ color: "rgba(62, 42, 35, 0.35)", fontSize: 11, fontWeight: 600, letterSpacing: "0.4em", textTransform: "uppercase" }}>
                                        Chapter I
                                    </span>
                                </div>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "rgba(62, 42, 35, 0.6)", marginBottom: 32 }}>
                                    A Humble Beginning
                                </h3>
                                <div className="space-y-4">
                                    {legacyLines.map((line, i) => (
                                        <motion.p
                                            key={i}
                                            variants={lineVariants}
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                color: "#7B736C",
                                                fontSize: 20,
                                                lineHeight: 1.6,
                                                fontWeight: 400,
                                            }}
                                        >
                                            {line.split(" ").map((word, idx) => {
                                                const isHighlight = word.includes("society");
                                                return (
                                                    <motion.span
                                                        key={idx}
                                                        whileHover={{ color: "#3E2A23" }}
                                                        style={{
                                                            display: "inline-block",
                                                            marginRight: "0.25em",
                                                            color: isHighlight ? "#3E2A23" : "inherit",
                                                            fontWeight: isHighlight ? 500 : 400,
                                                            transition: "color 0.3s ease"
                                                        }}
                                                    >
                                                        {word}
                                                    </motion.span>
                                                );
                                            })}
                                        </motion.p>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Transformation Block */}
                        <div className="flex justify-start lg:justify-end">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-150px" }}
                                variants={blockVariants("right")}
                                className="pl-12 lg:pl-24 w-full lg:w-[45%]"
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                                    <span style={{ color: "#C65A3A", fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase" }}>
                                        Chapter II
                                    </span>
                                </div>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: "#3E2A23", fontWeight: 700, marginBottom: 32 }}>
                                    The Transformation
                                </h3>
                                <div className="space-y-4">
                                    {transformationLines.map((line, i) => (
                                        <motion.p
                                            key={i}
                                            variants={lineVariants}
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                color: "#3E2A23",
                                                fontSize: 20,
                                                lineHeight: 1.6,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {line.split(" ").map((word, idx) => {
                                                const isHighlight = word.includes("infrastructure") ||
                                                    word.includes("inclusive") ||
                                                    word.includes("classrooms") ||
                                                    word.includes("opportunities");
                                                return (
                                                    <motion.span
                                                        key={idx}
                                                        whileHover={{ color: "#C65A3A", textDecoration: "underline" }}
                                                        style={{
                                                            display: "inline-block",
                                                            marginRight: "0.25em",
                                                            color: isHighlight ? "#C65A3A" : "inherit",
                                                            transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                                                            cursor: "default"
                                                        }}
                                                    >
                                                        {word}
                                                    </motion.span>
                                                );
                                            })}
                                        </motion.p>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
