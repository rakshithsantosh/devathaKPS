"use client";

import ScrollReveal from "./ScrollReveal";
import WordReveal from "./WordReveal";
import { BookOpen, Heart, Shield, Compass, Flame, Users } from "lucide-react";

const pillars = [
    {
        icon: BookOpen,
        title: "Philosophical Wisdom",
        text: "Drawing from the Bhagavad Gita and ancient Indian thought to offer universal lessons in character and purpose.",
    },
    {
        icon: Shield,
        title: "Duty & Discipline",
        text: "Cultivating a sense of responsibility and self-governance through daily practice and structured learning.",
    },
    {
        icon: Heart,
        title: "Compassion & Empathy",
        text: "Developing kindness as a core strength - understanding that true education begins with care for others.",
    },
    {
        icon: Compass,
        title: "Integrity & Truth",
        text: "Building moral clarity so students learn to act with honesty, even when no one is watching.",
    },
    {
        icon: Flame,
        title: "Courage & Resilience",
        text: "Encouraging students to face challenges with inner strength, inspired by timeless teachings on perseverance.",
    },
    {
        icon: Users,
        title: "Family & Heritage",
        text: "Honouring the role of family and community as the first teachers, grounding students in cultural identity.",
    },
];

export default function CulturalValues() {
    return (
        <section
            style={{
                backgroundColor: "#FAF6F1",
                padding: "112px 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Subtle background texture */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "radial-gradient(circle at 20% 30%, rgba(198, 90, 58, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(62, 42, 35, 0.02) 0%, transparent 50%)",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "0 48px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* ─── Header ─── */}
                <ScrollReveal y={30} duration={0.7}>
                    <div style={{ maxWidth: 640, marginBottom: 72 }}>
                        <span
                            style={{
                                color: "#C65A3A",
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                fontSize: 11,
                                letterSpacing: "0.3em",
                                textTransform: "uppercase" as const,
                                display: "block",
                                marginBottom: 24,
                            }}
                        >
                            Character &amp; Heritage
                        </span>

                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                color: "#3E2A23",
                                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                                lineHeight: 1.15,
                                marginBottom: 24,
                            }}
                        >
                            Rooted in Values.
                            <br />
                            Guided by Wisdom.
                        </h2>

                        {/* Terracotta divider */}
                        <div
                            style={{
                                width: 48,
                                height: 2,
                                backgroundColor: "#C65A3A",
                                borderRadius: 1,
                                marginBottom: 28,
                            }}
                        />

                        <p
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                color: "#7B736C",
                                fontSize: 16,
                                fontWeight: 300,
                                lineHeight: 1.8,
                            }}
                        >
                            We nurture character by connecting students to timeless family
                            values, cultural heritage, and universal principles of
                            responsibility, courage, and integrity.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ─── Two-column layout: body text + pillar grid ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16" style={{ alignItems: "start" }}>
                    {/* Left column — narrative text with WordReveal */}
                    <ScrollReveal className="lg:col-span-2" y={24} duration={0.6} delay={0.1}>
                        <div
                            style={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: 20,
                                padding: "36px 32px",
                                border: "1px solid rgba(240, 228, 216, 0.7)",
                                boxShadow: "0 2px 12px rgba(62, 42, 35, 0.04)",
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 600,
                                    color: "#3E2A23",
                                    fontSize: 18,
                                    lineHeight: 1.6,
                                    marginBottom: 20,
                                    fontStyle: "italic",
                                }}
                            >
                                <WordReveal
                                    text="Education is the manifestation of the perfection already in man."
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 600,
                                        color: "#3E2A23",
                                        fontSize: 18,
                                        lineHeight: 1.6,
                                        fontStyle: "italic",
                                    }}
                                />
                            </p>
                            <p
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    color: "#7B736C",
                                    fontSize: 14,
                                    fontWeight: 300,
                                    lineHeight: 1.85,
                                    marginBottom: 20,
                                }}
                            >
                                At Devatha KPS, moral development is woven into the everyday
                                experience - not as doctrine, but as lived practice. Our
                                students are introduced to the philosophical richness of Indian
                                civilizational thought, including teachings from the Bhagavad
                                Gita, framed as universal lessons in duty, self-awareness, and
                                ethical action.
                            </p>
                            <p
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    color: "#7B736C",
                                    fontSize: 14,
                                    fontWeight: 300,
                                    lineHeight: 1.85,
                                    margin: 0,
                                }}
                            >
                                We believe that cultural rootedness and exposure to divine
                                thought - understood as universal truths about compassion,
                                courage, and service - prepare children to navigate the modern
                                world with clarity and character.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Right column — pillar cards */}
                    <ScrollReveal className="lg:col-span-3" stagger={0.08} y={24} duration={0.5}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {pillars.map((pillar) => (
                                <div
                                    key={pillar.title}
                                    style={{
                                        backgroundColor: "#FFFFFF",
                                        borderRadius: 16,
                                        padding: "24px 24px 20px",
                                        border: "1px solid rgba(240, 228, 216, 0.7)",
                                        boxShadow: "0 1px 8px rgba(62, 42, 35, 0.03)",
                                        transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease",
                                        cursor: "default",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = "0 8px 28px rgba(62, 42, 35, 0.08)";
                                        e.currentTarget.style.transform = "translateY(-4px)";
                                        e.currentTarget.style.borderColor = "rgba(198, 90, 58, 0.18)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = "0 1px 8px rgba(62, 42, 35, 0.03)";
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.borderColor = "rgba(240, 228, 216, 0.7)";
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: 10,
                                            backgroundColor: "rgba(198, 90, 58, 0.08)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: 14,
                                        }}
                                    >
                                        <pillar.icon
                                            style={{ width: 18, height: 18, color: "#C65A3A" }}
                                        />
                                    </div>
                                    <h3
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontWeight: 700,
                                            color: "#3E2A23",
                                            fontSize: 15,
                                            marginBottom: 8,
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {pillar.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            color: "#9B938C",
                                            fontSize: 13,
                                            fontWeight: 300,
                                            lineHeight: 1.7,
                                            margin: 0,
                                        }}
                                    >
                                        {pillar.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
