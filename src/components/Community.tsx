"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Community() {
    return (
        <section
            id="community"
            style={{ position: "relative", overflow: "hidden" }}
        >
            {/* Full-width background image */}
            <div style={{ position: "absolute", inset: 0 }}>
                <Image
                    src="/images/campus.png"
                    alt="Devatha KPS Campus"
                    fill
                    className="object-cover"
                    quality={85}
                />
                {/* Strong overlay for text readability */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(135deg, rgba(198, 90, 58, 0.92) 0%, rgba(165, 72, 40, 0.88) 50%, rgba(140, 58, 30, 0.95) 100%)",
                    }}
                />
                {/* Dot pattern */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        opacity: 0.06,
                        backgroundImage:
                            "radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.6) 1px, transparent 0)",
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "112px 48px 128px",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}
                >
                    <span
                        style={{
                            color: "rgba(255,255,255,0.45)",
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                            fontSize: 10,
                            letterSpacing: "0.4em",
                            textTransform: "uppercase" as const,
                            display: "block",
                            marginBottom: 24,
                        }}
                    >
                        Community Driven
                    </span>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            lineHeight: 1.15,
                            marginBottom: 32,
                        }}
                    >
                        Rooted in{" "}
                        <span style={{ fontWeight: 400, fontStyle: "italic", color: "rgba(255,255,255,0.7)" }}>
                            Rampura
                        </span>
                    </h2>

                    <div
                        style={{
                            width: 64,
                            height: 1,
                            backgroundColor: "rgba(255,255,255,0.25)",
                            margin: "0 auto 40px",
                        }}
                    />

                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "rgba(255,255,255,0.85)",
                            fontSize: 18,
                            lineHeight: 1.85,
                            fontWeight: 300,
                            marginBottom: 28,
                        }}
                    >
                        Devatha KPS is more than a school — it is the heartbeat of
                        Rampura&apos;s future. With a commitment to limited class strength,
                        every child receives the personal attention they deserve.
                    </p>
                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "rgba(255,255,255,0.55)",
                            fontSize: 16,
                            lineHeight: 1.85,
                            fontWeight: 300,
                            maxWidth: 540,
                            margin: "0 auto",
                        }}
                    >
                        Our community-driven vision ensures that education here isn&apos;t
                        just imparted; it is lived. Parents, teachers, and the village of
                        Rampura walk this journey together.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
