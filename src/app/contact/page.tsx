"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";

/* ── Data ── */

const faculty = [
    { name: "Nasreen Taj", phone: "9845047051" },
    { name: "Pavithra K", phone: "9901238277" },
    { name: "Parimala", phone: "7618705638" },
];

const management = [
    { name: "Ramitha D K", phone: "8792818558", email: "devathakps@gmail.com" },
];

/* ── Fade variant ── */
const fade = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

/* ── Contact Card ── */
function ContactCard({
    name,
    phone,
    email,
    index,
}: {
    name: string;
    phone: string;
    email?: string;
    index: number;
}) {
    return (
        <motion.div
            custom={index}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                padding: "28px 28px 24px",
                boxShadow: "0 2px 12px rgba(62, 42, 35, 0.05)",
                border: "1px solid rgba(240, 228, 216, 0.7)",
                transition: "all 0.3s ease",
                cursor: "default",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(62, 42, 35, 0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(62, 42, 35, 0.05)";
                e.currentTarget.style.transform = "translateY(0)";
            }}
        >
            {/* Accent line */}
            <div
                style={{
                    width: 28,
                    height: 2,
                    backgroundColor: "rgba(198, 90, 58, 0.35)",
                    borderRadius: 1,
                    marginBottom: 16,
                }}
            />
            <h3
                style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    color: "#3E2A23",
                    fontSize: 18,
                    marginBottom: 14,
                    lineHeight: 1.3,
                }}
            >
                {name}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a
                    href={`tel:${phone}`}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "#7B736C",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 14,
                        fontWeight: 400,
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C65A3A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#7B736C")}
                >
                    <Phone style={{ width: 14, height: 14, flexShrink: 0 }} />
                    {phone}
                </a>
                {email && (
                    <a
                        href={`mailto:${email}`}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            color: "#7B736C",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 14,
                            fontWeight: 400,
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#C65A3A")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#7B736C")}
                    >
                        <Mail style={{ width: 14, height: 14, flexShrink: 0 }} />
                        {email}
                    </a>
                )}
            </div>
        </motion.div>
    );
}

/* ── Page ── */
export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder — integrate with backend/email service
        setSubmitted(true);
    };

    return (
        <main style={{ backgroundColor: "#FAF6F1", minHeight: "100vh" }}>
            {/* ─── Navbar spacer ─── */}
            <div style={{ height: 80 }} />

            {/* ─── Back link ─── */}
            <div style={{ maxWidth: 1152, margin: "0 auto", padding: "16px 48px 0" }}>
                <Link
                    href="/"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#C65A3A",
                        textDecoration: "none",
                        transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                    ← Back to Home
                </Link>
            </div>

            {/* ─── Minimal Hero ─── */}
            <section
                style={{
                    maxWidth: 1152,
                    margin: "0 auto",
                    padding: "56px 48px 0",
                    textAlign: "center",
                }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        color: "#3E2A23",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        lineHeight: 1.15,
                        marginBottom: 20,
                    }}
                >
                    Get in Touch
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "#7B736C",
                        fontSize: 16,
                        fontWeight: 300,
                        lineHeight: 1.7,
                        maxWidth: 520,
                        margin: "0 auto",
                    }}
                >
                    We are here to guide you. Reach out to our faculty or management team
                    for admissions and inquiries.
                </motion.p>
            </section>

            {/* ─── Two-Column Layout ─── */}
            <section
                style={{
                    maxWidth: 1152,
                    margin: "0 auto",
                    padding: "64px 48px 80px",
                }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* ── LEFT: Teams ── */}
                    <div>
                        {/* Faculty Team */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: 48 }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    marginBottom: 28,
                                }}
                            >
                                <div style={{ width: 28, height: 1, backgroundColor: "#C65A3A" }} />
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
                                    Faculty Team
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {faculty.map((person, i) => (
                                    <ContactCard key={person.name + person.phone} {...person} index={i} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Management Team */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    marginBottom: 28,
                                }}
                            >
                                <div style={{ width: 28, height: 1, backgroundColor: "#C65A3A" }} />
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
                                    Management Team
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {management.map((person, i) => (
                                    <ContactCard key={person.name + person.phone} {...person} index={i} />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* ── RIGHT: Contact Form ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <div
                            style={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: 20,
                                padding: "40px 36px",
                                boxShadow: "0 2px 16px rgba(62, 42, 35, 0.06)",
                                border: "1px solid rgba(240, 228, 216, 0.7)",
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 700,
                                    color: "#3E2A23",
                                    fontSize: 22,
                                    marginBottom: 8,
                                }}
                            >
                                Send us a Message
                            </h2>
                            <p
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    color: "#9B938C",
                                    fontSize: 13,
                                    fontWeight: 300,
                                    marginBottom: 32,
                                }}
                            >
                                We will get back to you as soon as possible.
                            </p>

                            {submitted ? (
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "48px 24px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: "50%",
                                            backgroundColor: "rgba(198, 90, 58, 0.1)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "0 auto 20px",
                                        }}
                                    >
                                        <Send style={{ width: 20, height: 20, color: "#C65A3A" }} />
                                    </div>
                                    <h3
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontWeight: 700,
                                            color: "#3E2A23",
                                            fontSize: 20,
                                            marginBottom: 8,
                                        }}
                                    >
                                        Message Sent
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            color: "#7B736C",
                                            fontSize: 14,
                                            fontWeight: 300,
                                        }}
                                    >
                                        Thank you for reaching out. Our team will respond shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                    {/* Name */}
                                    <div>
                                        <label
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: 11,
                                                fontWeight: 600,
                                                color: "#9B938C",
                                                letterSpacing: "0.15em",
                                                textTransform: "uppercase" as const,
                                                display: "block",
                                                marginBottom: 8,
                                            }}
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            style={{
                                                width: "100%",
                                                padding: "14px 16px",
                                                borderRadius: 12,
                                                border: "1px solid #F0E4D8",
                                                backgroundColor: "#FDFBF9",
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: 15,
                                                color: "#3E2A23",
                                                outline: "none",
                                                transition: "border-color 0.2s ease",
                                                boxSizing: "border-box" as const,
                                            }}
                                            onFocus={(e) => (e.currentTarget.style.borderColor = "#C65A3A")}
                                            onBlur={(e) => (e.currentTarget.style.borderColor = "#F0E4D8")}
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: 11,
                                                fontWeight: 600,
                                                color: "#9B938C",
                                                letterSpacing: "0.15em",
                                                textTransform: "uppercase" as const,
                                                display: "block",
                                                marginBottom: 8,
                                            }}
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            style={{
                                                width: "100%",
                                                padding: "14px 16px",
                                                borderRadius: 12,
                                                border: "1px solid #F0E4D8",
                                                backgroundColor: "#FDFBF9",
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: 15,
                                                color: "#3E2A23",
                                                outline: "none",
                                                transition: "border-color 0.2s ease",
                                                boxSizing: "border-box" as const,
                                            }}
                                            onFocus={(e) => (e.currentTarget.style.borderColor = "#C65A3A")}
                                            onBlur={(e) => (e.currentTarget.style.borderColor = "#F0E4D8")}
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: 11,
                                                fontWeight: 600,
                                                color: "#9B938C",
                                                letterSpacing: "0.15em",
                                                textTransform: "uppercase" as const,
                                                display: "block",
                                                marginBottom: 8,
                                            }}
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            style={{
                                                width: "100%",
                                                padding: "14px 16px",
                                                borderRadius: 12,
                                                border: "1px solid #F0E4D8",
                                                backgroundColor: "#FDFBF9",
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: 15,
                                                color: "#3E2A23",
                                                outline: "none",
                                                transition: "border-color 0.2s ease",
                                                resize: "vertical" as const,
                                                boxSizing: "border-box" as const,
                                            }}
                                            onFocus={(e) => (e.currentTarget.style.borderColor = "#C65A3A")}
                                            onBlur={(e) => (e.currentTarget.style.borderColor = "#F0E4D8")}
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 10,
                                            backgroundColor: "#C65A3A",
                                            color: "#FFFFFF",
                                            padding: "15px 32px",
                                            borderRadius: 9999,
                                            fontSize: 14,
                                            fontWeight: 600,
                                            fontFamily: "'Inter', sans-serif",
                                            border: "none",
                                            cursor: "pointer",
                                            boxShadow: "0 2px 16px rgba(198, 90, 58, 0.25)",
                                            transition: "all 0.3s ease",
                                            alignSelf: "flex-start",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = "#b8523c";
                                            e.currentTarget.style.transform = "translateY(-1px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = "#C65A3A";
                                            e.currentTarget.style.transform = "translateY(0)";
                                        }}
                                    >
                                        Send Message
                                        <Send style={{ width: 14, height: 14 }} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Address Block ─── */}
            <section
                style={{
                    borderTop: "1px solid rgba(240, 228, 216, 0.6)",
                    padding: "56px 48px 72px",
                    textAlign: "center",
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <MapPin
                        style={{
                            width: 18,
                            height: 18,
                            color: "#C65A3A",
                            margin: "0 auto 16px",
                        }}
                    />
                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "#7B736C",
                            fontSize: 15,
                            fontWeight: 300,
                            lineHeight: 1.9,
                            margin: 0,
                        }}
                    >
                        Rampura Village
                        <br />
                        Srirangapatna Taluk – 571427
                        <br />
                        Mandya District, Karnataka
                    </p>
                </motion.div>
            </section>
        </main>
    );
}
