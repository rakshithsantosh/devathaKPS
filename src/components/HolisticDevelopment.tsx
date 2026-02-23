"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const activities = [
    "Sports & Physical Education",
    "Cultural Activities & Dance",
    "Exposure Visits & Field Trips",
    "Personality Development",
    "Value-Based Learning",
    "Leadership Building",
];

export default function HolisticDevelopment() {
    const sectionRef = useRef<HTMLElement>(null);
    const img1Ref = useRef<HTMLDivElement>(null);
    const img2Ref = useRef<HTMLDivElement>(null);
    const img3Ref = useRef<HTMLDivElement>(null);
    const img4Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        const ctx = gsap.context(() => {
            [img1Ref, img2Ref, img3Ref, img4Ref].forEach((ref) => {
                if (ref.current) {
                    gsap.to(ref.current, {
                        yPercent: 6,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ref.current.parentElement,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    });
                }
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} style={{ padding: "112px 0 128px", backgroundColor: "rgba(244, 232, 220, 0.25)" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center">
                    {/* Left: Image Grid with parallax on each image */}
                    <ScrollReveal y={30} duration={0.8}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div style={{ aspectRatio: "3/4", borderRadius: 20, overflow: "hidden", position: "relative" }}>
                                    <div ref={img1Ref} className="will-change-transform" style={{ position: "absolute", inset: "-8%", width: "116%", height: "116%" }}>
                                        <Image
                                            src="/images/campus.png"
                                            alt="Students at Devatha KPS"
                                            fill
                                            className="object-cover"
                                            quality={80}
                                        />
                                    </div>
                                    <div style={{ position: "absolute", bottom: 12, left: 12, zIndex: 2 }}>
                                        <span
                                            style={{
                                                background: "rgba(255,255,255,0.92)",
                                                backdropFilter: "blur(8px)",
                                                color: "#3E2A23",
                                                fontSize: 11,
                                                fontWeight: 600,
                                                fontFamily: "'Inter', sans-serif",
                                                padding: "6px 14px",
                                                borderRadius: 999,
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            Sports
                                        </span>
                                    </div>
                                </div>
                                <div style={{ aspectRatio: "1/1", borderRadius: 20, overflow: "hidden", position: "relative" }}>
                                    <div ref={img2Ref} className="will-change-transform" style={{ position: "absolute", inset: "-8%", width: "116%", height: "116%" }}>
                                        <Image
                                            src="/images/foundation.png"
                                            alt="Dance at Devatha KPS"
                                            fill
                                            className="object-cover"
                                            quality={80}
                                        />
                                    </div>
                                    <div style={{ position: "absolute", bottom: 12, left: 12, zIndex: 2 }}>
                                        <span
                                            style={{
                                                background: "rgba(255,255,255,0.92)",
                                                backdropFilter: "blur(8px)",
                                                color: "#3E2A23",
                                                fontSize: 11,
                                                fontWeight: 600,
                                                fontFamily: "'Inter', sans-serif",
                                                padding: "6px 14px",
                                                borderRadius: 999,
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            Learning
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4" style={{ paddingTop: 40 }}>
                                <div style={{ aspectRatio: "1/1", borderRadius: 20, overflow: "hidden", position: "relative" }}>
                                    <div ref={img3Ref} className="will-change-transform" style={{ position: "absolute", inset: "-8%", width: "116%", height: "116%" }}>
                                        <Image
                                            src="/images/sustainability.png"
                                            alt="Outdoor education"
                                            fill
                                            className="object-cover"
                                            quality={80}
                                        />
                                    </div>
                                    <div style={{ position: "absolute", bottom: 12, left: 12, zIndex: 2 }}>
                                        <span
                                            style={{
                                                background: "rgba(255,255,255,0.92)",
                                                backdropFilter: "blur(8px)",
                                                color: "#3E2A23",
                                                fontSize: 11,
                                                fontWeight: 600,
                                                fontFamily: "'Inter', sans-serif",
                                                padding: "6px 14px",
                                                borderRadius: 999,
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            Outdoor
                                        </span>
                                    </div>
                                </div>
                                <div style={{ aspectRatio: "3/4", borderRadius: 20, overflow: "hidden", position: "relative" }}>
                                    <div ref={img4Ref} className="will-change-transform" style={{ position: "absolute", inset: "-8%", width: "116%", height: "116%" }}>
                                        <Image
                                            src="/images/architecture.png"
                                            alt="Cultural activities"
                                            fill
                                            className="object-cover"
                                            quality={80}
                                        />
                                    </div>
                                    <div style={{ position: "absolute", bottom: 12, left: 12, zIndex: 2 }}>
                                        <span
                                            style={{
                                                background: "rgba(255,255,255,0.92)",
                                                backdropFilter: "blur(8px)",
                                                color: "#3E2A23",
                                                fontSize: 11,
                                                fontWeight: 600,
                                                fontFamily: "'Inter', sans-serif",
                                                padding: "6px 14px",
                                                borderRadius: 999,
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            Culture
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right: Text */}
                    <ScrollReveal y={40} duration={0.8} delay={0.1}>
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
                                Beyond Academics
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
                            Holistic{" "}
                            <span style={{ fontWeight: 400, color: "rgba(62, 42, 35, 0.45)" }}>
                                Development
                            </span>
                        </h2>
                        <p
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                color: "#7B736C",
                                fontSize: 17,
                                lineHeight: 1.85,
                                marginBottom: 48,
                            }}
                        >
                            Education at Devatha KPS goes beyond textbooks. We cultivate
                            intellect, character, and community through a comprehensive
                            approach that nurtures every dimension of a child&apos;s growth.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            {activities.map((activity, i) => (
                                <motion.div
                                    key={activity}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.06 }}
                                    viewport={{ once: true }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12,
                                        padding: "12px 16px",
                                        borderRadius: 12,
                                        transition: "background 0.2s",
                                        cursor: "default",
                                    }}
                                    className="hover:bg-white/80"
                                >
                                    <div
                                        style={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            backgroundColor: "#C65A3A",
                                            flexShrink: 0,
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            color: "rgba(62, 42, 35, 0.7)",
                                            fontSize: 14,
                                            fontWeight: 500,
                                        }}
                                    >
                                        {activity}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
