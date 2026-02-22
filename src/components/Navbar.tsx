"use client";

import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

const links = [
    { label: "Our Story", href: "#story" },
    { label: "Architecture", href: "#sustainability" },
    { label: "Academics", href: "#academics" },
    { label: "Community", href: "#community" },
    { label: "Admissions", href: "#admissions" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: "all 0.4s ease",
                backgroundColor: scrolled ? "rgba(30, 18, 12, 0.95)" : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(244, 232, 220, 0.06)" : "none",
            }}
        >
            <div
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "18px 48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
                    <div
                        style={{
                            backgroundColor: "#C65A3A",
                            padding: 8,
                            borderRadius: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <GraduationCap style={{ color: "#FFFFFF", width: 20, height: 20 }} />
                    </div>
                    <div>
                        <span
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                fontSize: 18,
                                display: "block",
                                lineHeight: 1.2,
                            }}
                        >
                            DEVATHA KPS
                        </span>
                        <span
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                color: "rgba(255,255,255,0.35)",
                                fontSize: 9,
                                letterSpacing: "0.25em",
                                textTransform: "uppercase" as const,
                                display: "block",
                            }}
                        >
                            Rampura
                        </span>
                    </div>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex" style={{ alignItems: "center", gap: 40 }}>
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                color: "rgba(255,255,255,0.65)",
                                fontSize: 13,
                                textDecoration: "none",
                                letterSpacing: "0.02em",
                                transition: "color 0.3s ease",
                                position: "relative",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#FFFFFF";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                    style={{
                        background: "none",
                        border: "none",
                        color: "#FFFFFF",
                        cursor: "pointer",
                        padding: 4,
                    }}
                    aria-label="Toggle menu"
                >
                    {open ? <X style={{ width: 24, height: 24 }} /> : <Menu style={{ width: 24, height: 24 }} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div
                    className="md:hidden"
                    style={{
                        backgroundColor: "rgba(30, 18, 12, 0.98)",
                        backdropFilter: "blur(16px)",
                        padding: "24px 48px 32px",
                        borderTop: "1px solid rgba(244, 232, 220, 0.06)",
                    }}
                >
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            style={{
                                display: "block",
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                color: "rgba(255,255,255,0.7)",
                                fontSize: 15,
                                textDecoration: "none",
                                padding: "14px 0",
                                borderBottom: "1px solid rgba(244, 232, 220, 0.06)",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
