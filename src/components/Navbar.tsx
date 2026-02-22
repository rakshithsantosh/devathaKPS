"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

    const onScroll = useCallback(() => {
        setScrolled(window.scrollY > 60);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: "background-color 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease",
                backgroundColor: scrolled
                    ? "rgba(30, 18, 12, 0.85)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(20px) saturate(1.2)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.2)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(244, 232, 220, 0.08)"
                    : "1px solid transparent",
            }}
        >
            <div
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: scrolled ? "10px 48px" : "16px 48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "padding 0.4s ease",
                }}
            >
                {/* Logo */}
                <a
                    href="#"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        textDecoration: "none",
                    }}
                >
                    <div
                        style={{
                            width: 42,
                            height: 42,
                            borderRadius: 12,
                            overflow: "hidden",
                            position: "relative",
                            flexShrink: 0,
                            border: scrolled ? "1px solid rgba(244,232,220,0.15)" : "1px solid rgba(255,255,255,0.15)",
                            transition: "border-color 0.4s ease",
                        }}
                    >
                        <Image
                            src="/images/logo.jpg"
                            alt="Devatha KPS Logo"
                            fill
                            className="object-cover"
                            quality={90}
                        />
                    </div>
                    <div>
                        <span
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                fontSize: 16,
                                display: "block",
                                lineHeight: 1.2,
                                letterSpacing: "0.02em",
                            }}
                        >
                            DEVATHA KPS
                        </span>
                        <span
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 500,
                                color: scrolled
                                    ? "rgba(244, 232, 220, 0.4)"
                                    : "rgba(255,255,255,0.4)",
                                fontSize: 9,
                                letterSpacing: "0.3em",
                                textTransform: "uppercase" as const,
                                display: "block",
                                transition: "color 0.4s ease",
                            }}
                        >
                            Rampura
                        </span>
                    </div>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex" style={{ alignItems: "center", gap: 36 }}>
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 500,
                                color: scrolled
                                    ? "rgba(244, 232, 220, 0.7)"
                                    : "rgba(255,255,255,0.75)",
                                fontSize: 13,
                                textDecoration: "none",
                                letterSpacing: "0.01em",
                                transition: "color 0.3s ease",
                                position: "relative",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#FFFFFF";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = scrolled
                                    ? "rgba(244, 232, 220, 0.7)"
                                    : "rgba(255,255,255,0.75)";
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
                        padding: 6,
                        borderRadius: 8,
                    }}
                    aria-label="Toggle menu"
                >
                    {open ? (
                        <X style={{ width: 22, height: 22 }} />
                    ) : (
                        <Menu style={{ width: 22, height: 22 }} />
                    )}
                </button>
            </div>

            {/* Mobile menu — animated */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden overflow-hidden"
                        style={{
                            backgroundColor: "rgba(30, 18, 12, 0.97)",
                            backdropFilter: "blur(20px)",
                            borderTop: "1px solid rgba(244, 232, 220, 0.06)",
                        }}
                    >
                        <div style={{ padding: "16px 48px 28px" }}>
                            {links.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.3 }}
                                    style={{
                                        display: "block",
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 500,
                                        color: "rgba(255,255,255,0.7)",
                                        fontSize: 15,
                                        textDecoration: "none",
                                        padding: "14px 0",
                                        borderBottom: "1px solid rgba(244, 232, 220, 0.06)",
                                        transition: "color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = "#FFFFFF";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                                    }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
