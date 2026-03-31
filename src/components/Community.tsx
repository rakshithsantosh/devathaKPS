"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Community() {
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
            id="community"
            style={{
                position: "relative",
                minHeight: 520,
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
                    src="/images/campus.png"
                    alt="Rampura community"
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
                        "linear-gradient(180deg, rgba(20,12,8,0.85) 0%, rgba(20,12,8,0.75) 50%, rgba(20,12,8,0.85) 100%)",
                    zIndex: 1,
                }}
            />

            {/* Subtle dot pattern */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.03,
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    zIndex: 2,
                    pointerEvents: "none",
                }}
            />

            {/* Content */}
            <div
                style={{
                    maxWidth: 780,
                    margin: "0 auto",
                    padding: "80px 48px",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 3,
                }}
            >
                <ScrollReveal y={30} duration={0.8} stagger={0.12}>
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
                            Our Community
                        </span>
                        <div style={{ width: 32, height: 1, backgroundColor: "rgba(198, 90, 58, 0.7)" }} />
                    </div>

                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                            lineHeight: 1.15,
                            marginBottom: 24,
                        }}
                    >
                        Born from{" "}
                        <span style={{ fontWeight: 400, fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>
                            Rampura
                        </span>
                    </h2>

                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "rgba(255,255,255,0.9)",
                            fontSize: 17,
                            lineHeight: 1.85,
                            fontWeight: 400,
                            marginBottom: 20,
                        }}
                    >
                        Devatha KPS Government Primary School isn&apos;t just a school built in a village - it&apos;s a
                        school built by a village. Every decision reflects the aspirations and
                        needs of Rampura&apos;s families.
                    </p>

                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "rgba(255,255,255,0.75)",
                            fontSize: 14,
                            lineHeight: 1.8,
                            fontWeight: 400,
                        }}
                    >
                        From the architecture to the curriculum, this is a place where the
                        spirit of community lives in every corner.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
