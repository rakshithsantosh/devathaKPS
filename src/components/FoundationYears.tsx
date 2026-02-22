"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Shield, Gamepad2, BookHeart } from "lucide-react";

const pillars = [
    { icon: Shield, label: "Safe Environment" },
    { icon: Gamepad2, label: "Play-Based Learning" },
    { icon: Heart, label: "Nutritional Support" },
    { icon: BookHeart, label: "Stimulating Aids" },
];

export default function FoundationYears() {
    return (
        <section style={{ padding: "112px 0 128px", backgroundColor: "#FAF6F1" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
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
                            {pillars.map((pillar, i) => {
                                const Icon = pillar.icon;
                                return (
                                    <motion.div
                                        key={pillar.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
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
                                            transition: "all 0.3s ease",
                                            cursor: "default",
                                        }}
                                        className="hover:shadow-lg"
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
                                    </motion.div>
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
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{
                            aspectRatio: "4/5",
                            borderRadius: 24,
                            overflow: "hidden",
                            position: "relative",
                        }}
                    >
                        <Image
                            src="/images/foundation.png"
                            alt="Foundation years at Devatha KPS"
                            fill
                            className="object-cover"
                            quality={85}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
