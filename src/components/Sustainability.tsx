"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";
import {
    Landmark,
    Leaf,
    Wind,
    ShieldCheck,
    Sparkles,
    TreePine,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: Landmark,
        title: "Natural Granite & Wire-Cut Bricks",
        desc: "Locally sourced natural materials that require zero maintenance and age with architectural dignity.",
    },
    {
        icon: Leaf,
        title: "Minimal Cement Usage",
        desc: "Constructed with environmental responsibility, significantly reducing the school's carbon footprint.",
    },
    {
        icon: Wind,
        title: "Natural Ventilation",
        desc: "Strategically designed apertures ensure constant airflow, creating a naturally cool atmosphere year-round.",
    },
    {
        icon: ShieldCheck,
        title: "Durable Infrastructure",
        desc: "Strong, resilient construction designed to last for generations against rural elements and weather.",
    },
    {
        icon: Sparkles,
        title: "Healthier Indoor Air",
        desc: "Chemical-free natural materials ensure cleaner air quality for students and staff every day.",
    },
    {
        icon: TreePine,
        title: "Cleaner Campus Environment",
        desc: "Dust-resistant natural stone floors create a cleaner, safer environment for children to learn and play.",
    },
];

export default function Sustainability() {
    const bannerImageRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        const ctx = gsap.context(() => {
            if (bannerImageRef.current) {
                gsap.to(bannerImageRef.current, {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: bannerImageRef.current.parentElement,
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
            id="sustainability"
            style={{ padding: "112px 0 128px", backgroundColor: "rgba(244, 232, 220, 0.4)" }}
        >
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
                {/* Full-width image banner with parallax */}
                <ScrollReveal y={20} duration={0.7}>
                    <div
                        style={{
                            width: "100%",
                            height: 280,
                            borderRadius: 24,
                            overflow: "hidden",
                            position: "relative",
                            marginBottom: 64,
                        }}
                    >
                        <div
                            ref={bannerImageRef}
                            className="will-change-transform"
                            style={{
                                position: "absolute",
                                inset: "-15%",
                                width: "130%",
                                height: "130%",
                            }}
                        >
                            <Image
                                src="/images/architecture.png"
                                alt="Sustainable architecture of Devatha KPS"
                                fill
                                className="object-cover"
                                quality={85}
                            />
                        </div>
                        {/* Color overlay (static — Layer 2) */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(to top, rgba(20,12,8,0.6) 0%, rgba(20,12,8,0.1) 60%, transparent 100%)",
                                zIndex: 1,
                            }}
                        />
                        <div style={{ position: "absolute", bottom: 32, left: 0, right: 0, textAlign: "center", zIndex: 2 }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
                                <div style={{ width: 32, height: 1, backgroundColor: "rgba(255,255,255,0.4)" }} />
                                <span
                                    style={{
                                        color: "rgba(255,255,255,0.7)",
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 600,
                                        fontSize: 11,
                                        letterSpacing: "0.3em",
                                        textTransform: "uppercase" as const,
                                    }}
                                >
                                    Responsible Architecture
                                </span>
                                <div style={{ width: 32, height: 1, backgroundColor: "rgba(255,255,255,0.4)" }} />
                            </div>
                            <h2
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 700,
                                    color: "#FFFFFF",
                                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                                    lineHeight: 1.15,
                                    margin: 0,
                                }}
                            >
                                Thoughtfully Built.{" "}
                                <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.6)" }}>
                                    Responsibly Designed.
                                </span>
                            </h2>
                        </div>
                    </div>
                </ScrollReveal>

                {/* 3-Column Grid */}
                <ScrollReveal stagger={0.08} y={30} duration={0.6}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {features.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    style={{
                                        backgroundColor: "#FFFFFF",
                                        borderRadius: 20,
                                        padding: 32,
                                        border: "1px solid #F0E4D8",
                                        transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease",
                                        cursor: "default",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-4px)";
                                        e.currentTarget.style.boxShadow = "0 12px 36px rgba(62, 42, 35, 0.1)";
                                        e.currentTarget.style.borderColor = "rgba(198, 90, 58, 0.2)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "none";
                                        e.currentTarget.style.borderColor = "#F0E4D8";
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 48,
                                            height: 48,
                                            backgroundColor: "rgba(244, 232, 220, 0.8)",
                                            borderRadius: 14,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#C65A3A",
                                            marginBottom: 24,
                                            transition: "background-color 0.3s ease, color 0.3s ease",
                                        }}
                                    >
                                        <Icon style={{ width: 22, height: 22 }} />
                                    </div>
                                    <h3
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontWeight: 700,
                                            color: "#3E2A23",
                                            fontSize: 18,
                                            lineHeight: 1.35,
                                            marginBottom: 12,
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            color: "#7B736C",
                                            fontSize: 14,
                                            lineHeight: 1.7,
                                            margin: 0,
                                        }}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
