"use client";

import { GraduationCap, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#1e120c", paddingTop: 96, paddingBottom: 48 }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
                {/* Top: Logo + Social */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: 64,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#C65A3A",
                            padding: 14,
                            borderRadius: 16,
                            marginBottom: 24,
                            boxShadow: "0 4px 20px rgba(198, 90, 58, 0.3)",
                        }}
                    >
                        <GraduationCap style={{ color: "#FFFFFF", width: 28, height: 28 }} />
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: "#F4E8DC",
                            fontSize: 24,
                            letterSpacing: "0.05em",
                            marginBottom: 8,
                        }}
                    >
                        DEVATHA KPS
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "rgba(244, 232, 220, 0.25)",
                            fontSize: 10,
                            textTransform: "uppercase" as const,
                            letterSpacing: "0.4em",
                            fontWeight: 600,
                            marginBottom: 32,
                        }}
                    >
                        Rampura &bull; Karnataka
                    </p>
                    <div style={{ display: "flex", gap: 12 }}>
                        {[
                            { Icon: Instagram, label: "Instagram" },
                            { Icon: Facebook, label: "Facebook" },
                        ].map(({ Icon, label }) => (
                            <a
                                key={label}
                                href="#"
                                aria-label={label}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    border: "1px solid rgba(244, 232, 220, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "rgba(244, 232, 220, 0.35)",
                                    transition: "all 0.3s ease",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "#C65A3A";
                                    e.currentTarget.style.borderColor = "#C65A3A";
                                    e.currentTarget.style.color = "#FFFFFF";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                    e.currentTarget.style.borderColor = "rgba(244, 232, 220, 0.1)";
                                    e.currentTarget.style.color = "rgba(244, 232, 220, 0.35)";
                                }}
                            >
                                <Icon style={{ width: 16, height: 16 }} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* 3-column info */}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    style={{
                        maxWidth: 900,
                        margin: "0 auto 64px",
                        textAlign: "center",
                        borderTop: "1px solid rgba(244, 232, 220, 0.08)",
                        borderBottom: "1px solid rgba(244, 232, 220, 0.08)",
                        padding: "48px 0",
                    }}
                >
                    <div>
                        <h4
                            style={{
                                color: "#C65A3A",
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                fontSize: 10,
                                textTransform: "uppercase" as const,
                                letterSpacing: "0.2em",
                                marginBottom: 20,
                            }}
                        >
                            Contact
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
                            <p style={{ color: "rgba(244, 232, 220, 0.45)", fontSize: 14, fontWeight: 300, fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: 8, margin: 0 }}>
                                <Phone style={{ width: 14, height: 14 }} />
                                +91 91234 56789
                            </p>
                            <p style={{ color: "rgba(244, 232, 220, 0.45)", fontSize: 14, fontWeight: 300, fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: 8, margin: 0 }}>
                                <Mail style={{ width: 14, height: 14 }} />
                                contact@devathakps.edu.in
                            </p>
                        </div>
                    </div>
                    <div>
                        <h4
                            style={{
                                color: "#C65A3A",
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                fontSize: 10,
                                textTransform: "uppercase" as const,
                                letterSpacing: "0.2em",
                                marginBottom: 20,
                            }}
                        >
                            Location
                        </h4>
                        <p style={{ color: "rgba(244, 232, 220, 0.45)", fontSize: 14, fontWeight: 300, fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 8, margin: 0 }}>
                            <MapPin style={{ width: 14, height: 14, marginTop: 4, flexShrink: 0 }} />
                            <span>
                                Devatha KPS, Rampura Village,
                                <br />
                                Srirangapatna Taluk, Karnataka
                            </span>
                        </p>
                    </div>
                    <div>
                        <h4
                            style={{
                                color: "#C65A3A",
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                fontSize: 10,
                                textTransform: "uppercase" as const,
                                letterSpacing: "0.2em",
                                marginBottom: 20,
                            }}
                        >
                            Affiliation
                        </h4>
                        <p
                            style={{
                                color: "rgba(244, 232, 220, 0.35)",
                                fontSize: 12,
                                fontWeight: 300,
                                fontFamily: "'Inter', sans-serif",
                                fontStyle: "italic",
                                lineHeight: 1.7,
                                margin: 0,
                            }}
                        >
                            Government of Karnataka
                            <br />
                            Supported Institution.
                            <br />
                            English Medium Higher Primary.
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{ textAlign: "center" }}>
                    <p
                        style={{
                            color: "rgba(244, 232, 220, 0.12)",
                            fontSize: 10,
                            textTransform: "uppercase" as const,
                            letterSpacing: "0.3em",
                            fontWeight: 600,
                            fontFamily: "'Inter', sans-serif",
                            margin: 0,
                        }}
                    >
                        &copy; 2026 Devatha KPS Rampura. Designed with Intention.
                    </p>
                </div>
            </div>
        </footer>
    );
}
