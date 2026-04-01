"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const termsSections = [
    {
        title: "Introduction",
        content:
            'Devatha KPS Government Primary School ("the School") provides this website for informational purposes only. By accessing or using this website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of this site.',
    },
    {
        title: "Use of Website",
        content:
            "This website and its content are provided for students, parents, and community members as a window into the School's architecture and mission. You agree to use the site responsibly and not for any harmful or illegal purposes, such as spreading malware or attempting to breach the technical security of the platform.",
    },
    {
        title: "Content Accuracy",
        content:
            "While we strive to maintain the most accurate and up-to-date information, the School does not guarantee that all content, including architectural details and descriptions, are completely error-free. We reserve the right to update or modify information on this site at any time without notice.",
    },
    {
        title: "Intellectual Property",
        content:
            "Traditional and digital elements, including photography, architectural designs, and the school logo, are the intellectual property of the School or its family of donors and are protected by applicable laws. Users may view and print content for personal, non-commercial use only.",
    },
    {
        title: "Third-Party Links",
        content:
            "Our website may contain links to external sites or third-party platforms. The School is not responsible for the content, privacy practices, or availability of those outside resources.",
    },
    {
        title: "Limitation of Liability",
        content:
            "The School is not liable for any direct or indirect decisions made based on the content of this informational website. We encourage users to verify important academic or institutional details directly with our administration office.",
    },
    {
        title: "Governing Law",
        content:
            "These Terms & Conditions are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts located in the respective state of the School's primary campus.",
    },
    {
        title: "Changes to Terms",
        content:
            "We may update these Terms & Conditions occasionally to reflect changes in our website's functionality or our institutional policies. Any updates will be reflected on this page.",
    },
];

export default function TermsPage() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .tp-toc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 2rem;
        }
        .tp-section {
          display: grid;
          grid-template-columns: 3px 1fr;
          gap: 0 1.5rem;
        }
        .tp-bar {
          background: #EEE8E3;
          border-radius: 2px;
          transition: background 0.25s ease;
        }
        .tp-section:hover .tp-bar {
          background: #C65A3A;
        }

        @media (max-width: 520px) {
          .tp-toc-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

            <main
                className="flex flex-col min-h-screen"
                style={{ backgroundColor: "#FAFAF8", fontFamily: "'DM Sans', sans-serif" }}
            >
                <Navbar />

                <section className="flex-1 px-6 md:px-12" style={{ paddingTop: "10rem", paddingBottom: "6rem" }}>
                    <div style={{ maxWidth: 720, margin: "0 auto" }}>

                        {/* Hero Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                marginBottom: "3.5rem",
                                paddingBottom: "2.5rem",
                                borderBottom: "1px solid #E8E0DA",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 10,
                                    letterSpacing: "0.22em",
                                    textTransform: "uppercase",
                                    color: "#C65A3A",
                                    fontWeight: 600,
                                    marginBottom: "0.75rem",
                                }}
                            >
                                Legal
                            </p>
                            <h1
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "clamp(2rem, 5vw, 3rem)",
                                    color: "#3E2A23",
                                    fontWeight: 600,
                                    lineHeight: 1.12,
                                    marginBottom: "1rem",
                                }}
                            >
                                Terms & Conditions
                            </h1>
                            <p style={{ fontSize: 13, color: "#9E8E85", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                                Agreement on responsible use of our informational platform
                                <span
                                    style={{
                                        background: "#EEE8E3",
                                        color: "#7B5C52",
                                        fontSize: 11,
                                        fontWeight: 500,
                                        padding: "3px 10px",
                                        borderRadius: 20,
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    Last revised: March 2026
                                </span>
                            </p>
                        </motion.div>

                        {/* Table of Contents */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            style={{
                                background: "#F3EDE8",
                                borderRadius: 12,
                                padding: "1.25rem 1.5rem",
                                marginBottom: "3rem",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 10,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.16em",
                                    color: "#9E8E85",
                                    fontWeight: 500,
                                    marginBottom: "0.75rem",
                                }}
                            >
                                Contents
                            </p>
                            <div className="tp-toc-grid">
                                {termsSections.map((s, i) => (
                                    <div
                                        key={i}
                                        style={{ fontSize: 13, color: "#6B5E57", display: "flex", alignItems: "baseline", gap: 8 }}
                                    >
                                        <span style={{ fontSize: 10, color: "#C65A3A", fontWeight: 500, minWidth: 16 }}>
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {s.title}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Sections */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "2.75rem" }}>
                            {termsSections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    className="tp-section"
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
                                >
                                    <div className="tp-bar" />
                                    <div>
                                        <h2
                                            style={{
                                                fontFamily: "'Playfair Display', serif",
                                                fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                                                color: "#3E2A23",
                                                fontWeight: 600,
                                                lineHeight: 1.25,
                                                marginBottom: "0.65rem",
                                            }}
                                        >
                                            {section.title}
                                        </h2>
                                        <p style={{ fontSize: 14, lineHeight: 1.85, color: "#6B5E57", fontWeight: 300 }}>
                                            {section.content}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{
                                marginTop: "3.5rem",
                                paddingTop: "2.5rem",
                                borderTop: "1px solid #E8E0DA",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "1.25rem",
                            }}
                        >
                            <div
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    background: "#EEE8E3",
                                    flexShrink: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 2,
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C65A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h2
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "1.2rem",
                                        color: "#3E2A23",
                                        fontWeight: 600,
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    Contact Us
                                </h2>
                                <p style={{ fontSize: 14, lineHeight: 1.85, color: "#6B5E57", fontWeight: 300 }}>
                                    If you have any questions regarding these terms, please contact the school
                                    administration office directly at our Rampura campus.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}