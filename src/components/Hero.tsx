"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const driftRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        const ctx = gsap.context(() => {
            // Layer 1: Background parallax at 0.8x scroll speed
            if (bgRef.current) {
                gsap.to(bgRef.current, {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }

            // Layer 2: Light overlay parallax at 0.9x
            if (overlayRef.current) {
                gsap.to(overlayRef.current, {
                    yPercent: 12,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }

            // Light drift layer — very subtle slow shift
            if (driftRef.current) {
                gsap.to(driftRef.current, {
                    yPercent: 8,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }

            // Content fade on scroll
            if (contentRef.current) {
                gsap.to(contentRef.current, {
                    opacity: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: "60% top",
                        scrub: true,
                    },
                });
            }
        }, container);

        return () => ctx.revert();
    }, []);

    /* Stagger config for text entrance */
    const textEase = [0.22, 1, 0.36, 1] as const;

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* ─── LAYER 1: Background Image (0.8x scroll) ─── */}
            <div
                ref={bgRef}
                className="absolute -top-[15%] left-0 right-0 h-[125%] will-change-transform"
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
            </div>

            {/* ─── LAYER 2: Light / atmosphere overlay (0.9x scroll) ─── */}
            <div
                ref={overlayRef}
                className="absolute inset-0 will-change-transform"
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
            </div>

            {/* ─── LAYER 2.5: Light drift gradient (subtle depth) ─── */}
            <div
                ref={driftRef}
                className="absolute inset-0 will-change-transform"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(244,232,220,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            {/* ─── LAYER 3: Content (static, with fade-on-scroll) ─── */}
            <div
                ref={contentRef}
                className="relative z-20 w-full max-w-7xl mx-auto"
                style={{ padding: "0 clamp(20px, 5vw, 42px)" }}
            >
                <div className="max-w-2xl pt-24 pt-sm-32">
                    {/* Glass text backing — anchors left content compositionally */}
                    <div
                        style={{
                            position: "absolute",
                            top: 64,
                            left: -32,
                            bottom: 32,
                            width: "calc(100% + 64px)",
                            background:
                                "linear-gradient(135deg, rgba(15,10,6,0.45) 0%, rgba(15,10,6,0.15) 60%, transparent 100%)",
                            borderRadius: 32,
                            pointerEvents: "none",
                        }}
                    />

                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: textEase }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "6px 16px",
                            backgroundColor: "rgba(20, 14, 10, 0.35)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(244, 180, 150, 0.2)",
                            borderRadius: 100,
                            marginBottom: 32,
                            position: "relative",
                        }}
                    >
                        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#C65A3A", marginRight: 10 }} />
                        <span
                            style={{
                                color: "rgba(255, 255, 255, 0.95)",
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                fontSize: 10,
                                letterSpacing: "0.5em",
                                textTransform: "uppercase" as const,
                            }}
                        >
                            Rooted in Rampura
                        </span>
                    </motion.div>

                    {/* Heading — staggered words */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: textEase }}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            lineHeight: 1.08,
                            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                            letterSpacing: "-0.02em",
                            marginBottom: 28,
                            position: "relative",
                            textShadow: "0 2px 10px rgba(0,0,0,0.45)",
                        }}
                    >
                        A New Era of
                        <br />
                        Education{" "}
                        <span
                            style={{
                                fontWeight: 400,
                                fontStyle: "italic",
                                color: "rgba(255, 252, 245, 0.9)",
                            }}
                        >
                            in Rampura
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: textEase }}
                        style={{
                            color: "rgba(255, 255, 255, 0.95)",
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 450,
                            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                            lineHeight: 1.75,
                            maxWidth: 420,
                            marginBottom: 48,
                            position: "relative",
                        }}
                    >
                        Where public education meets private innovation - delivering modern, sustainable learning rooted in community values and
                        responsible architecture.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9, ease: textEase }}
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
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "0 6px 28px rgba(198, 90, 58, 0.35)";
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
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            Admissions Open
                        </a>
                    </motion.div>
                </div>
            </div>

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
