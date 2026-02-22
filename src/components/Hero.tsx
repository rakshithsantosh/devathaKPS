"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Parallax Background Image */}
            <motion.div
                style={{ y: bgY }}
                className="absolute -top-[20%] left-0 right-0 h-[130%] z-0"
            >
                <Image
                    src="/images/hero.png"
                    alt="Devatha KPS Campus"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
            </motion.div>

            {/* Dark gradient overlays for text readability */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        "linear-gradient(to right, rgba(20,12,8,0.88) 0%, rgba(40,25,18,0.65) 50%, rgba(40,25,18,0.3) 100%)",
                }}
            />
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        "linear-gradient(to top, rgba(20,12,8,0.5) 0%, transparent 40%, rgba(20,12,8,0.25) 100%)",
                }}
            />

            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
                <div className="max-w-2xl pt-24">
                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center gap-3 mb-10"
                    >
                        <div style={{ width: 32, height: 1, backgroundColor: "#C65A3A" }} />
                        <span
                            style={{
                                color: "#C65A3A",
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                fontSize: 11,
                                letterSpacing: "0.35em",
                                textTransform: "uppercase" as const,
                            }}
                        >
                            Rooted in Rampura
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            lineHeight: 1.08,
                            fontSize: "clamp(2.5rem, 6vw, 5rem)",
                            letterSpacing: "-0.02em",
                            marginBottom: 32,
                        }}
                    >
                        A New Era of
                        <br />
                        Education{" "}
                        <span
                            style={{
                                fontWeight: 400,
                                fontStyle: "italic",
                                color: "rgba(244, 232, 220, 0.75)",
                            }}
                        >
                            in Rampura
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        style={{
                            color: "rgba(244, 232, 220, 0.6)",
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 300,
                            fontSize: "clamp(1rem, 2vw, 1.25rem)",
                            lineHeight: 1.7,
                            maxWidth: 440,
                            marginBottom: 56,
                        }}
                    >
                        Modern, sustainable education rooted in community values and
                        responsible architecture.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#story"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#C65A3A",
                                color: "#FFFFFF",
                                padding: "16px 36px",
                                borderRadius: 9999,
                                fontSize: 15,
                                fontWeight: 600,
                                fontFamily: "'Inter', sans-serif",
                                textDecoration: "none",
                                boxShadow: "0 4px 24px rgba(198, 90, 58, 0.4)",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#b14f30";
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "0 8px 30px rgba(198, 90, 58, 0.5)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#C65A3A";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 24px rgba(198, 90, 58, 0.4)";
                            }}
                        >
                            Explore Our Campus
                        </a>
                        <a
                            href="#admissions"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid rgba(255,255,255,0.25)",
                                color: "rgba(255,255,255,0.9)",
                                padding: "16px 36px",
                                borderRadius: 9999,
                                fontSize: 15,
                                fontWeight: 600,
                                fontFamily: "'Inter', sans-serif",
                                textDecoration: "none",
                                backdropFilter: "blur(8px)",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                            }}
                        >
                            Admissions Open
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span
                    style={{
                        color: "rgba(255,255,255,0.3)",
                        fontSize: 10,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.3em",
                        fontWeight: 500,
                        fontFamily: "'Inter', sans-serif",
                    }}
                >
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown style={{ width: 16, height: 16, color: "rgba(255,255,255,0.3)" }} />
                </motion.div>
            </motion.div>

            {/* Bottom gradient into next section */}
            <div
                className="absolute bottom-0 left-0 right-0 h-40 z-20"
                style={{
                    background: "linear-gradient(to top, #FAF6F1 0%, transparent 100%)",
                }}
            />
        </section>
    );
}
