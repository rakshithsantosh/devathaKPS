"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export default function Admissions() {
    return (
        <section id="admissions" style={{ position: "relative", overflow: "hidden" }}>
            {/* Background image */}
            <div style={{ position: "absolute", inset: 0 }}>
                <Image
                    src="/images/hero.png"
                    alt="Devatha KPS Campus"
                    fill
                    className="object-cover"
                    quality={80}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(135deg, rgba(30, 18, 12, 0.94) 0%, rgba(62, 42, 35, 0.92) 100%)",
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
                            color: "#C65A3A",
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                            fontSize: 11,
                            letterSpacing: "0.35em",
                            textTransform: "uppercase" as const,
                            display: "block",
                            marginBottom: 32,
                        }}
                    >
                        Enroll Now
                    </span>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: "#F4E8DC",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            lineHeight: 1.1,
                            marginBottom: 24,
                        }}
                    >
                        Admissions Open
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "rgba(244, 232, 220, 0.5)",
                            fontSize: 18,
                            fontWeight: 300,
                            lineHeight: 1.6,
                            marginBottom: 12,
                        }}
                    >
                        Grades 1 to 5 — English Medium
                    </p>
                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "#C65A3A",
                            fontSize: 15,
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                            marginBottom: 56,
                        }}
                    >
                        Extension to Grade 10 in Progress
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 10,
                                backgroundColor: "#C65A3A",
                                color: "#FFFFFF",
                                padding: "16px 40px",
                                borderRadius: 9999,
                                fontSize: 15,
                                fontWeight: 600,
                                fontFamily: "'Inter', sans-serif",
                                textDecoration: "none",
                                boxShadow: "0 4px 24px rgba(198, 90, 58, 0.4)",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#b14f30";
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#C65A3A";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            Apply Now
                            <ArrowRight style={{ width: 16, height: 16 }} />
                        </a>
                        <a
                            href="#"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 10,
                                border: "1px solid rgba(244, 232, 220, 0.2)",
                                color: "rgba(244, 232, 220, 0.8)",
                                padding: "16px 40px",
                                borderRadius: 9999,
                                fontSize: 15,
                                fontWeight: 600,
                                fontFamily: "'Inter', sans-serif",
                                textDecoration: "none",
                                backdropFilter: "blur(8px)",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(244, 232, 220, 0.1)";
                                e.currentTarget.style.borderColor = "rgba(244, 232, 220, 0.35)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.borderColor = "rgba(244, 232, 220, 0.2)";
                            }}
                        >
                            <Calendar style={{ width: 16, height: 16 }} />
                            Schedule a Visit
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
