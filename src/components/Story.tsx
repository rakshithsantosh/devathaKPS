"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: "1–5", label: "Grades Offered" },
    { value: "30", label: "Students per Class" },
    { value: "100%", label: "Sustainable Materials", accent: true },
    { value: "10th", label: "Expansion Coming" },
];

export default function Story() {
    const imageRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        const ctx = gsap.context(() => {
            if (imageRef.current) {
                gsap.to(imageRef.current, {
                    yPercent: 6,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="story" style={{ padding: "112px 0 128px", backgroundColor: "#FAF6F1" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center">
                    {/* Left: Real Image with subtle parallax */}
                    <ScrollReveal y={40} duration={0.8}>
                        <div className="relative">
                            <div
                                style={{
                                    aspectRatio: "4/5",
                                    borderRadius: 24,
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                            >
                                <div ref={imageRef} className="will-change-transform" style={{ position: "absolute", inset: "-10%", width: "120%", height: "120%" }}>
                                    <Image
                                        src="/images/story.png"
                                        alt="Granite and brick architecture of Devatha KPS"
                                        fill
                                        className="object-cover"
                                        quality={85}
                                    />
                                </div>
                                {/* Quote overlay */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: 28,
                                        zIndex: 2,
                                    }}
                                >
                                    <div
                                        style={{
                                            background: "rgba(255,255,255,0.92)",
                                            backdropFilter: "blur(12px)",
                                            borderRadius: 20,
                                            padding: "20px 24px",
                                            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontFamily: "'Playfair Display', serif",
                                                color: "#3E2A23",
                                                fontSize: 18,
                                                fontStyle: "italic",
                                                lineHeight: 1.4,
                                                margin: 0,
                                            }}
                                        >
                                            &ldquo;Built to last, designed to inspire.&rdquo;
                                        </p>
                                        <span
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                color: "#7B736C",
                                                fontSize: 10,
                                                textTransform: "uppercase" as const,
                                                letterSpacing: "0.2em",
                                                fontWeight: 600,
                                                marginTop: 8,
                                                display: "block",
                                            }}
                                        >
                                            Granite & Brick Architecture
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative frame */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: -20,
                                    right: -20,
                                    width: "100%",
                                    height: "100%",
                                    border: "2px solid rgba(198, 90, 58, 0.12)",
                                    borderRadius: 24,
                                    zIndex: -1,
                                }}
                            />
                        </div>
                    </ScrollReveal>

                    {/* Right: Text Block */}
                    <ScrollReveal y={40} duration={0.8} delay={0.1}>
                        {/* Section label */}
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                            <div style={{ width: 32, height: 1, backgroundColor: "#C65A3A" }} />
                            <span
                                style={{
                                    color: "#C65A3A",
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 600,
                                    fontSize: 11,
                                    letterSpacing: "0.3em",
                                    textTransform: "uppercase" as const,
                                }}
                            >
                                Our Story
                            </span>
                        </div>

                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                color: "#3E2A23",
                                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                                lineHeight: 1.15,
                                marginBottom: 32,
                            }}
                        >
                            Built With{" "}
                            <span style={{ fontWeight: 400, color: "rgba(62, 42, 35, 0.45)" }}>
                                Intention
                            </span>
                        </h2>

                        <p
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                color: "#7B736C",
                                fontSize: 17,
                                lineHeight: 1.85,
                                marginBottom: 16,
                            }}
                        >
                            Devatha KPS was born from a vision to provide world-class
                            education in a rural setting. Every wall, corridor, and classroom
                            has been designed with purpose.
                        </p>
                        <p
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                color: "#7B736C",
                                fontSize: 15,
                                lineHeight: 1.85,
                                marginBottom: 48,
                            }}
                        >
                            Using locally sourced granite and wire-cut bricks, our campus
                            stands as a testament to durability, dignity, and responsible
                            architecture.
                        </p>

                        {/* Stat Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => {
                                const isAccent = "accent" in stat && stat.accent;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        style={{
                                            borderRadius: 16,
                                            padding: "20px 24px",
                                            backgroundColor: isAccent ? "#C65A3A" : "#FFFFFF",
                                            border: isAccent ? "none" : "1px solid #F0E4D8",
                                            boxShadow: isAccent
                                                ? "0 4px 20px rgba(198, 90, 58, 0.25)"
                                                : "0 2px 12px rgba(62, 42, 35, 0.05)",
                                            cursor: "default",
                                            transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isAccent) {
                                                e.currentTarget.style.transform = "translateY(-4px)";
                                                e.currentTarget.style.boxShadow = "0 8px 28px rgba(62, 42, 35, 0.1)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isAccent) {
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "0 2px 12px rgba(62, 42, 35, 0.05)";
                                            }
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "'Playfair Display', serif",
                                                fontWeight: 700,
                                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                                color: isAccent ? "#FFFFFF" : "#C65A3A",
                                                display: "block",
                                                lineHeight: 1,
                                            }}
                                        >
                                            {stat.value}
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: isAccent ? "rgba(255,255,255,0.8)" : "#7B736C",
                                                display: "block",
                                                marginTop: 8,
                                            }}
                                        >
                                            {stat.label}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
