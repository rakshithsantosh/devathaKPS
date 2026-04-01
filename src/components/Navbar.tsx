"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { label: "Our Story", href: "/#story" },
    { label: "Architecture", href: "/#sustainability" },
    { label: "Academics", href: "/#academics" },
    { label: "Community", href: "/#community" },
    { label: "Admissions", href: "/#admissions" },
];

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const scrolled = isScrolled || !isHome;

    const onScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 60);
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
                    padding: scrolled 
                        ? "clamp(8px, 1.5vw, 10px) clamp(20px, 4vw, 48px)" 
                        : "clamp(12px, 2vw, 16px) clamp(20px, 4vw, 48px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "padding 0.4s ease",
                }}
            >
                {/* Logo */}
                <Link
                    href="/"
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
                                fontSize: "clamp(13px, 3vw, 16px)",
                                display: "block",
                                lineHeight: 1.2,
                                letterSpacing: "0.02em",
                            }}
                        >
                            DEVATHA KPS <span className="hidden sm:inline">Government Primary School</span>
                        </span>
                        <span
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                color: scrolled
                                    ? "rgba(244, 232, 220, 0.7)"
                                    : "rgba(255, 255, 255, 0.8)",
                                fontSize: 10,
                                letterSpacing: "0.25em",
                                textTransform: "uppercase" as const,
                                display: "block",
                                transition: "color 0.4s ease",
                            }}
                        >
                            Rampura - 571427
                        </span>
                    </div>
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex" style={{ alignItems: "center", gap: 36 }}>
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 500,
                                color: scrolled
                                    ? "rgba(244, 232, 220, 0.75)"
                                    : "rgba(255,255,255,0.88)",
                                fontSize: 13,
                                textDecoration: "none",
                                letterSpacing: "0.06em",
                                transition: "color 0.3s ease",
                                position: "relative",
                                textShadow: scrolled
                                    ? "none"
                                    : "0 1px 3px rgba(0,0,0,0.25)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#FFFFFF";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = scrolled
                                    ? "rgba(244, 232, 220, 0.75)"
                                    : "rgba(255,255,255,0.88)";
                            }}
                        >
                            {link.label}
                        </Link>
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
                        <div style={{ padding: "16px clamp(20px, 4vw, 48px) 28px" }}>
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setOpen(false)}
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
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
