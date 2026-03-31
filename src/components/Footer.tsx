"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#1A120D",
                borderTop: "1px solid rgba(198, 90, 58, 0.15)",
                position: "relative",
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "56px 48px 32px",
                }}
            >
                <ScrollReveal y={20} duration={0.6} stagger={0.08}>
                    <div className="grid md:grid-cols-3 gap-12" style={{ marginBottom: 48 }}>
                        {/* Logo + name */}
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                                <div
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 12,
                                        overflow: "hidden",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src="/images/logo.jpg"
                                        alt="Devatha KPS Logo"
                                        width={44}
                                        height={44}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            color: "#FFFFFF",
                                            fontSize: 17,
                                            fontWeight: 700,
                                            lineHeight: 1.2,
                                            margin: 0,
                                        }}
                                    >
                                        Devatha KPS Government Primary School
                                    </h3>
                                </div>
                            </div>
                            <p
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    color: "rgba(255,255,255,0.4)",
                                    fontSize: 13,
                                    lineHeight: 1.7,
                                    maxWidth: 280,
                                    fontWeight: 300,
                                }}
                            >
                                A modern, sustainable school rooted in the
                                community and values of Rampura.
                            </p>
                        </div>

                        {/* Location */}
                        <div>
                            <h4
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    color: "rgba(255,255,255,0.55)",
                                    fontWeight: 600,
                                    fontSize: 11,
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase" as const,
                                    marginBottom: 16,
                                }}
                            >
                                Location
                            </h4>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                                <MapPin style={{ width: 16, height: 16, color: "#C65A3A", marginTop: 3, flexShrink: 0 }} />
                                <p
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        color: "rgba(255,255,255,0.5)",
                                        fontSize: 14,
                                        lineHeight: 1.65,
                                        fontWeight: 300,
                                        margin: 0,
                                    }}
                                >
                                    Devatha KPS Government Primary School
                                    <br />
                                    Rampura Village, Karnataka - 571427
                                    <br />
                                    India
                                </p>
                            </div>
                        </div>


                    </div>
                </ScrollReveal>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: 24,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 12,
                    }}
                >
                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "rgba(255,255,255,0.25)",
                            fontSize: 12,
                            fontWeight: 300,
                            margin: 0,
                        }}
                    >
                        © {new Date().getFullYear()} Devatha KPS. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: 24 }}>
                        <a
                            href="/privacy"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                color: "rgba(255,255,255,0.25)",
                                fontSize: 12,
                                fontWeight: 300,
                                textDecoration: "none",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.25)"; }}
                        >
                            Privacy
                        </a>
                        <a
                            href="/terms"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                color: "rgba(255,255,255,0.25)",
                                fontSize: 12,
                                fontWeight: 300,
                                textDecoration: "none",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.25)"; }}
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
