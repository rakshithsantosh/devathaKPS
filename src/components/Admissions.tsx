"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Admissions() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        const ctx = gsap.context(() => {
            if (bgRef.current) {
                gsap.to(bgRef.current, {
                    yPercent: 15,
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
        <section
            ref={sectionRef}
            id="admissions"
            style={{
                position: "relative",
                minHeight: 480,
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {/* Background with parallax */}
            <div
                ref={bgRef}
                className="will-change-transform"
                style={{
                    position: "absolute",
                    inset: "-20%",
                    width: "140%",
                    height: "140%",
                }}
            >
                <Image
                    src="/images/hero.png"
                    alt="Devatha KPS campus"
                    fill
                    className="object-cover"
                    quality={85}
                />
            </div>

            {/* Dark gradient overlay (static) */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(180deg, rgba(20,12,8,0.88) 0%, rgba(20,12,8,0.82) 60%, rgba(20,12,8,0.92) 100%)",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <div
                style={{
                    maxWidth: 680,
                    margin: "0 auto",
                    padding: "80px 48px",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <ScrollReveal y={30} duration={0.8} stagger={0.1}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 24 }}>
                        <div style={{ width: 32, height: 1, backgroundColor: "rgba(198, 90, 58, 0.7)" }} />
                        <span
                            style={{
                                color: "rgba(198, 90, 58, 0.85)",
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                fontSize: 11,
                                letterSpacing: "0.3em",
                                textTransform: "uppercase" as const,
                            }}
                        >
                            Join Us
                        </span>
                        <div style={{ width: 32, height: 1, backgroundColor: "rgba(198, 90, 58, 0.7)" }} />
                    </div>

                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            lineHeight: 1.15,
                            marginBottom: 20,
                        }}
                    >
                        Admissions{" "}
                        <span style={{ fontWeight: 400, fontStyle: "italic", color: "rgba(255,255,255,0.55)" }}>
                            Open
                        </span>
                    </h2>

                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "rgba(255,255,255,0.55)",
                            fontSize: 16,
                            lineHeight: 1.85,
                            fontWeight: 300,
                            marginBottom: 40,
                            maxWidth: 520,
                            margin: "0 auto 40px",
                        }}
                    >
                        Enrol your child in a school that values education, architecture, and
                        community in equal measure.
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="/contact"
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
                            Begin Application
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
