"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const privacySections = [
    {
        title: "Introduction",
        content:
            'Devatha KPS Government Primary School ("the School") is committed to protecting the privacy of our visitors. This website is primarily informational, designed to share the story, values, and updates of our institution. We respect your privacy and aim to be transparent about the minimal data interactions that happen on this site.',
    },
    {
        title: "No Active Data Collection",
        content:
            'We believe in a "privacy-first" approach. Our website does not feature any contact forms, user accounts, or login systems. We do not intentionally collect, store, or process any personal identifiable information (PII) such as your name, email address, or phone number through this platform.',
    },
    {
        title: "Technical Data & Security",
        content:
            "Like most websites, our hosting sub-processors may automatically collect limited technical data for security and performance purposes. This may include your IP address, browser type, and time of access. This information is used solely to maintain the stability and security of the website and is not used to identify individuals.",
    },
    {
        title: "Cookies & Tracking",
        content:
            "This website does not use tracking cookies or third-party analytics tools to monitor your behavior. No active tracking cookies are used to build user profiles or for advertising purposes.",
    },
    {
        title: "Data Security",
        content:
            "We take reasonable administrative and technical steps to maintain a secure website environment and protect against unauthorized access or misuse of technical data.",
    },
    {
        title: "Changes to this Policy",
        content:
            'We may update this Privacy Policy if our website\'s functionality changes in the future. Any updates will be reflected on this page with an updated "Last Revised" date.',
    },
];

export default function PrivacyPage() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .pp-section {
          display: grid;
          grid-template-columns: 3px 1fr;
          gap: 0 1.5rem;
        }
        .pp-section-bar {
          background: #EEE8E3;
          border-radius: 2px;
          transition: background 0.25s ease;
        }
        .pp-section:hover .pp-section-bar {
          background: #C65A3A;
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
                                Privacy Policy
                            </h1>
                            <p style={{ fontSize: 13, color: "#9E8E85", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                                How we handle privacy on our informational school website
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
                            <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                                {privacySections.map((s, i) => (
                                    <li key={i} style={{ fontSize: 13, color: "#6B5E57", display: "flex", alignItems: "baseline", gap: 8 }}>
                                        <span style={{ fontSize: 10, color: "#C65A3A", fontWeight: 500, minWidth: 16 }}>
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {s.title}
                                    </li>
                                ))}
                            </ol>
                        </motion.div>

                        {/* Sections */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "2.75rem" }}>
                            {privacySections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    className="pp-section"
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
                                >
                                    <div className="pp-section-bar" />
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
                                    If you have any questions regarding this policy, please contact the school
                                    administration directly at our Rampura campus or through our official school channels.
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