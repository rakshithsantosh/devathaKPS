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

    /* ── 3-layer parallax speeds ── */
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);       // Layer 1 – bg image
    const overlayY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);   // Layer 2 – light wash
    const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);         // Content fade on scroll

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* ─── LAYER 1: Background Image (0.6x scroll) ─── */}
            <motion.div
                style={{ y: bgY }}
                className="absolute -top-[15%] left-0 right-0 h-[125%]"
            >
                <Image
                    src="/images/hero.png"
                    alt="Devatha KPS Campus"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Warm color-grade: lets natural sunlight through */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(180deg, rgba(62,42,35,0.18) 0%, rgba(198,90,58,0.08) 40%, rgba(244,232,220,0.06) 100%)",
                        mixBlendMode: "multiply",
                    }}
                />
            </motion.div>

            {/* ─── LAYER 2: Light / atmosphere overlay (0.8x scroll) ─── */}
            <motion.div
                style={{ y: overlayY }}
                className="absolute inset-0"
            >
                {/* Directional light — softens left, reveals right */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(105deg, rgba(30,20,14,0.52) 0%, rgba(30,20,14,0.30) 38%, rgba(255,248,240,0.04) 65%, rgba(255,248,240,0.10) 100%)",
                    }}
                />
                {/* Contrast beam for navbar readability */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 140,
                        background:
                            "linear-gradient(to bottom, rgba(15,10,6,0.50) 0%, rgba(20,14,10,0.30) 50%, transparent 100%)",
                    }}
                />
            </motion.div>

            {/* ─── LAYER 3: Content (static, with fade-on-scroll) ─── */}
            <motion.div
                style={{ opacity: fadeOut }}
                className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20"
            >
                <div className="max-w-2xl pt-24">
                    {/* Glass text backing — anchors left content compositionally */}
                    <div
                        style={{
                            position: "absolute",
                            top: 64,
                            left: -32,
                            bottom: 32,
                            width: "calc(100% + 64px)",
                            background:
                                "linear-gradient(135deg, rgba(30,20,14,0.12) 0%, rgba(30,20,14,0.04) 60%, transparent 100%)",
                            borderRadius: 32,
                            backdropFilter: "blur(0.5px)",
                            pointerEvents: "none",
                        }}
                    />

                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            marginBottom: 40,
                            position: "relative",
                        }}
                    >
                        <div style={{ width: 32, height: 1, backgroundColor: "rgba(198, 90, 58, 0.7)" }} />
                        <span
                            style={{
                                color: "rgba(198, 90, 58, 0.85)",
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
                        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            lineHeight: 1.08,
                            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                            letterSpacing: "-0.02em",
                            marginBottom: 28,
                            position: "relative",
                            textShadow: "0 2px 20px rgba(20,14,10,0.15)",
                        }}
                    >
                        A New Era of
                        <br />
                        Education{" "}
                        <span
                            style={{
                                fontWeight: 400,
                                fontStyle: "italic",
                                color: "rgba(255, 252, 245, 0.65)",
                            }}
                        >
                            in Rampura
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            color: "rgba(255, 252, 245, 0.55)",
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 300,
                            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                            lineHeight: 1.75,
                            maxWidth: 420,
                            marginBottom: 48,
                            position: "relative",
                        }}
                    >
                        Modern, sustainable education rooted in community values and
                        responsible architecture.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row gap-4"
                        style={{ position: "relative" }}
                    >
                        <a
                            href="#story"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#C65A3A",
                                color: "#FFFFFF",
                                padding: "15px 34px",
                                borderRadius: 9999,
                                fontSize: 14,
                                fontWeight: 600,
                                fontFamily: "'Inter', sans-serif",
                                textDecoration: "none",
                                boxShadow: "0 2px 16px rgba(198, 90, 58, 0.25)",
                                transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#b8523c";
                                e.currentTarget.style.transform = "translateY(-1px)";
                                e.currentTarget.style.boxShadow = "0 4px 24px rgba(198, 90, 58, 0.35)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#C65A3A";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 2px 16px rgba(198, 90, 58, 0.25)";
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
                                border: "1px solid rgba(255,255,255,0.22)",
                                color: "rgba(255,255,255,0.85)",
                                padding: "15px 34px",
                                borderRadius: 9999,
                                fontSize: 14,
                                fontWeight: 500,
                                fontFamily: "'Inter', sans-serif",
                                textDecoration: "none",
                                backdropFilter: "blur(6px)",
                                transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
                            }}
                        >
                            Admissions Open
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* ─── Scroll indicator ─── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1.2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span
                    style={{
                        color: "rgba(255,255,255,0.25)",
                        fontSize: 9,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.35em",
                        fontWeight: 500,
                        fontFamily: "'Inter', sans-serif",
                    }}
                >
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                >
                    <ArrowDown style={{ width: 14, height: 14, color: "rgba(255,255,255,0.2)" }} />
                </motion.div>
            </motion.div>

            {/* ─── Bottom transition: subtle, architectural ─── */}
            <div
                className="absolute bottom-0 left-0 right-0 z-20"
                style={{
                    height: 120,
                    background:
                        "linear-gradient(to top, rgba(250, 246, 241, 0.12) 0%, transparent 100%)",
                }}
            />
        </section>
    );
}
