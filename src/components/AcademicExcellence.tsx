"use client";

import ScrollReveal from "./ScrollReveal";
import {
    BookOpen,
    FlaskConical,
    Monitor,
    Library,
    MessageCircle,
    GraduationCap,
} from "lucide-react";

const programs = [
    {
        icon: BookOpen,
        title: "English Medium Instruction",
        desc: "Building confidence and global readiness through strong linguistic foundations from Grade 1.",
    },
    {
        icon: Monitor,
        title: "ನಮ್ಮ ಕನ್ನಡ, ನಮ್ಮ ಗುರುತು",
        desc: "Encouraging the use of Kannada as a symbol of pride, fostering deeper community roots and preserving our rich cultural heritage.",
    },
    {
        icon: FlaskConical,
        title: "Science Laboratory and Computer Lab",
        desc: "As part of our expansion to classes 6-10, we are setting up a state-of-the-art science laboratory and computer laboratory",
    },
    {
        icon: Library,
        title: "Library & Reading Room",
        desc: "A quiet, curated space for reading, research, and expanding intellectual horizons.",
    },
    {
        icon: MessageCircle,
        title: "Spoken English",
        desc: "Dedicated sessions to enhance communication, presentation, and interpersonal skills.",
    },
    {
        icon: GraduationCap,
        title: "Expanding to Grade 10",
        desc: "Extension to 10th Standard in progress - serving the growing educational needs of Rampura.",
        highlight: true,
    },
];

export default function AcademicExcellence() {
    return (
        <section id="academics" style={{ padding: "112px 0 128px", backgroundColor: "#FAF6F1" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
                {/* Header */}
                <ScrollReveal y={30} duration={0.7}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8" style={{ marginBottom: 80 }}>
                        <div>
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
                                    Academic Programs
                                </span>
                            </div>
                            <h2
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 700,
                                    color: "#3E2A23",
                                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                                    lineHeight: 1.15,
                                    margin: 0,
                                }}
                            >
                                Academic{" "}
                                <span style={{ fontWeight: 400, color: "rgba(62, 42, 35, 0.7)" }}>
                                    Excellence
                                </span>
                            </h2>
                        </div>
                        <div
                            style={{
                                backgroundColor: "#FFFFFF",
                                padding: "14px 24px",
                                borderRadius: 16,
                                boxShadow: "0 2px 16px rgba(62, 42, 35, 0.06)",
                                border: "1px solid #F0E4D8",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    color: "#3E2A23",
                                    fontWeight: 600,
                                    fontSize: 13,
                                    letterSpacing: "0.02em",
                                }}
                            >
                                LKG UKG and Classes 1 – 5 &bull; English Medium
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* 2x3 Grid */}
                <ScrollReveal stagger={0.08} y={24} duration={0.6}>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {programs.map((item) => {
                            const Icon = item.icon;
                            const isHighlight = "highlight" in item && item.highlight;
                            return (
                                <div
                                    key={item.title}
                                    style={{
                                        padding: 32,
                                        borderRadius: 20,
                                        border: isHighlight ? "none" : "1px solid #F0E4D8",
                                        backgroundColor: isHighlight ? "#C65A3A" : "#FFFFFF",
                                        boxShadow: isHighlight
                                            ? "0 8px 32px rgba(198, 90, 58, 0.25)"
                                            : "0 2px 12px rgba(62, 42, 35, 0.04)",
                                        transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease",
                                        cursor: "default",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-4px)";
                                        e.currentTarget.style.boxShadow = isHighlight
                                            ? "0 12px 40px rgba(198, 90, 58, 0.35)"
                                            : "0 12px 36px rgba(62, 42, 35, 0.1)";
                                        if (!isHighlight) e.currentTarget.style.borderColor = "rgba(198, 90, 58, 0.2)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = isHighlight
                                            ? "0 8px 32px rgba(198, 90, 58, 0.25)"
                                            : "0 2px 12px rgba(62, 42, 35, 0.04)";
                                        if (!isHighlight) e.currentTarget.style.borderColor = "#F0E4D8";
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: 14,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: isHighlight ? "rgba(255,255,255,0.2)" : "rgba(244, 232, 220, 0.6)",
                                            color: isHighlight ? "#FFFFFF" : "#3E2A23",
                                            marginBottom: 24,
                                        }}
                                    >
                                        <Icon style={{ width: 20, height: 20 }} />
                                    </div>
                                    <h3
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontWeight: 700,
                                            color: isHighlight ? "#FFFFFF" : "#3E2A23",
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
                                            color: isHighlight ? "rgba(255,255,255,0.8)" : "#7B736C",
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
