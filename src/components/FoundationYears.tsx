"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Heart, Shield, Gamepad2, BookHeart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
    { icon: Shield, label: "Safe Environment" },
    { icon: Gamepad2, label: "Play-Based Learning" },
    { icon: Heart, label: "Nutritional Support" },
    { icon: BookHeart, label: "Stimulating Aids" },
];

export default function FoundationYears() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

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
                    yPercent: 8,
                    ease: "none",
                    scrollTrigger: {
                        trigger: imageRef.current.parentElement,
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
        <section ref={sectionRef} style={{ padding: "112px 0 128px", backgroundColor: "#FAF6F1" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                    {/* Left: Text */}
                    <ScrollReveal y={30} duration={0.8}>
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
                                Early Development
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
                            Strong Beginnings Create{" "}
                            <span style={{ fontWeight: 400, color: "rgba(62, 42, 35, 0.45)" }}>
                                Confident Futures
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
                            Our Anganwadi foundation stage provides a child-centric, nurturing
                            environment where the youngest members of our community explore,
                            play, and learn in complete safety.
                        </p>

                        {/* Pillar Grid */}
                        <div className="grid grid-cols-2 gap-5">
                            {pillars.map((pillar) => {
                                const Icon = pillar.icon;
                                return (
                                    <div
                                        key={pillar.label}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            gap: 12,
                                            padding: "24px 16px",
                                            backgroundColor: "#FFFFFF",
                                            borderRadius: 20,
                                            border: "1px solid #F0E4D8",
                                            transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease",
                                            cursor: "default",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateY(-4px)";
                                            e.currentTarget.style.boxShadow = "0 8px 28px rgba(62, 42, 35, 0.08)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 56,
                                                height: 56,
                                                backgroundColor: "rgba(244, 232, 220, 0.6)",
                                                borderRadius: 16,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#C65A3A",
                                            }}
                                        >
                                            <Icon style={{ width: 24, height: 24 }} />
                                        </div>
                                        <span
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                color: "#3E2A23",
                                                fontSize: 13,
                                                fontWeight: 600,
                                                lineHeight: 1.35,
                                            }}
                                        >
                                            {pillar.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div
                            style={{
                                marginTop: 32,
                                paddingTop: 24,
                                borderTop: "1px solid #F0E4D8",
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    color: "#7B736C",
                                    fontSize: 14,
                                    fontStyle: "italic",
                                    lineHeight: 1.7,
                                }}
                            >
                                &ldquo;We focus on sensory-rich environments and child-scale
                                perspectives to ensure every child feels seen, supported, and
                                inspired.&rdquo;
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Right: Image with parallax */}
                    <ScrollReveal y={40} duration={0.8} delay={0.1}>
                        <div
                            style={{
                                aspectRatio: "4/5",
                                borderRadius: 24,
                                overflow: "hidden",
                                position: "relative",
                            }}
                        >
                            <div
                                ref={imageRef}
                                className="will-change-transform"
                                style={{
                                    position: "absolute",
                                    inset: "-10%",
                                    width: "120%",
                                    height: "120%",
                                }}
                            >
                                <Image
                                    src="/images/foundation.png"
                                    alt="Foundation years at Devatha KPS"
                                    fill
                                    className="object-cover"
                                    quality={85}
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
