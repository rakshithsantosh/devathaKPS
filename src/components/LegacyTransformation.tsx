"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const fadeUpDelay: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
    },
};

export default function LegacyTransformation() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .lt-grid {
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          align-items: start;
          max-width: 860px;
          margin: 0 auto;
        }
        .lt-vsep {
          background: linear-gradient(to bottom, transparent, #D9C8BF 15%, #D9C8BF 85%, transparent);
        }
        .lt-hsep {
          display: none;
        }
        .lt-col {
          padding: 0 2.25rem;
        }
        .lt-col:first-child {
          padding-left: 0;
        }
        .lt-col:last-child {
          padding-right: 0;
        }
        .lt-meta {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 1.1rem;
        }
        .lt-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 500;
          padding: 3px 11px;
          border-radius: 20px;
          border: 1px solid #D9C8BF;
          color: #7B5C52;
          margin-top: 1.1rem;
          letter-spacing: 0.04em;
        }

        @media (max-width: 640px) {
          .lt-grid {
            grid-template-columns: 1fr;
          }
          .lt-vsep {
            display: none;
          }
          .lt-hsep {
            display: block;
            width: 40px;
            height: 1px;
            background: linear-gradient(to right, transparent, #D9C8BF 20%, #D9C8BF 80%, transparent);
            margin: 2rem auto;
          }
          .lt-col {
            padding: 0;
            text-align: center;
          }
          .lt-meta {
            justify-content: center;
          }
        }
      `}</style>

            <section
                style={{
                    backgroundColor: "#FAFAF8",
                    fontFamily: "'DM Sans', sans-serif",
                    padding: "3.5rem 1.5rem",
                }}
            >
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{ textAlign: "center", marginBottom: "3rem" }}
                >
                    <p
                        style={{
                            fontSize: 10,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "#C65A3A",
                            fontWeight: 600,
                            margin: "0 0 0.75rem",
                        }}
                    >
                        Our Journey
                    </p>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                            color: "#3E2A23",
                            fontWeight: 600,
                            lineHeight: 1.15,
                            margin: 0,
                        }}
                    >
                        From Legacy to Transformation
                    </h2>
                    <div
                        style={{
                            width: 36,
                            height: 2,
                            background: "#C65A3A",
                            opacity: 0.55,
                            borderRadius: 2,
                            margin: "1.1rem auto 0",
                        }}
                    />
                </motion.div>

                {/* Grid */}
                <div className="lt-grid">

                    {/* Chapter 1 */}
                    <motion.div
                        className="lt-col"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeUp}
                    >
                        <div className="lt-meta">
                            <span style={{ fontSize: 11, fontWeight: 500, color: "#C65A3A" }}>01</span>
                            <div style={{ width: 18, height: 1, background: "#D9C8BF" }} />
                            <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.16em", color: "#9E8E85", fontWeight: 500 }}>
                                Foundation
                            </span>
                        </div>

                        <h3
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                                color: "#3E2A23",
                                fontWeight: 600,
                                lineHeight: 1.2,
                                margin: "0 0 0.9rem",
                            }}
                        >
                            A Humble Beginning
                        </h3>

                        <p style={{ fontSize: 14, lineHeight: 1.85, color: "#6B5E57", fontWeight: 300, margin: 0 }}>
                            What once stood as a humble government school has been reimagined
                            through the vision of the Devatha Krishna Prasad family - rooted
                            deeply in the values of giving back to society.
                        </p>

                        <span className="lt-tag">Est. Legacy</span>
                    </motion.div>

                    {/* Vertical separator (desktop) */}
                    <div className="lt-vsep" />

                    {/* Chapter 2 */}
                    <motion.div
                        className="lt-col"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeUpDelay}
                    >
                        {/* Horizontal separator (mobile only) — inside col so it stacks correctly */}
                        <div className="lt-hsep" />

                        <div className="lt-meta">
                            <span style={{ fontSize: 11, fontWeight: 500, color: "#9E8E85" }}>02</span>
                            <div style={{ width: 18, height: 1, background: "#D9C8BF" }} />
                            <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.16em", color: "#9E8E85", fontWeight: 500 }}>
                                Evolution
                            </span>
                        </div>

                        <h3
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                                color: "#3E2A23",
                                fontWeight: 600,
                                lineHeight: 1.2,
                                margin: "0 0 0.9rem",
                            }}
                        >
                            The New Chapter
                        </h3>

                        <p style={{ fontSize: 14, lineHeight: 1.85, color: "#6B5E57", fontWeight: 300, margin: "0 0 0.8rem" }}>
                            Today, it stands renewed with modern{" "}
                            <span style={{ color: "#3E2A23", fontWeight: 500 }}>infrastructure</span>,
                            rooted thinking in values, and updated mediums of instruction.
                            Equipped with contemporary tools and dedicated faculty, the
                            institution is committed to delivering quality education.
                        </p>

                        <p style={{ fontSize: 14, lineHeight: 1.85, color: "#6B5E57", fontWeight: 300, margin: 0 }}>
                            This{" "}
                            <span style={{ color: "#C65A3A", fontWeight: 500 }}>transformation</span>{" "}
                            is built to serve deserving students in and around Rampura Village —
                            creating{" "}
                            <span style={{ color: "#3E2A23", fontWeight: 500 }}>opportunities</span>,
                            not just classrooms.
                        </p>

                        <span className="lt-tag">Present Day</span>
                    </motion.div>

                </div>
            </section>
        </>
    );
}