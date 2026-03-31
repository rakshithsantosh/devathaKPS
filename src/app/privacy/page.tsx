"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const privacySections = [
    {
        title: "Introduction",
        content: "Devatha KPS Government Primary School (\"the School\") is committed to protecting the privacy of our visitors. This website is primarily informational, designed to share the story, values, and updates of our institution. We respect your privacy and aim to be transparent about the minimal data interactions that happen on this site."
    },
    {
        title: "No Active Data Collection",
        content: "We believe in a \"privacy-first\" approach. Our website does not feature any contact forms, user accounts, or login systems. We do not intentionally collect, store, or process any personal identifiable information (PII) such as your name, email address, or phone number through this platform."
    },
    {
        title: "Technical Data & Security",
        content: "Like most websites, our hosting sub-processors may automatically collect limited technical data for security and performance purposes. This may include your IP address, browser type, and time of access. This information is used solely to maintain the stability and security of the website and is not used to identify individuals."
    },
    {
        title: "Cookies & Tracking",
        content: "This website does not use tracking cookies or third-party analytics tools to monitor your behavior. No active tracking cookies are used to build user profiles or for advertising purposes."
    },
    {
        title: "Data Security",
        content: "We take reasonable administrative and technical steps to maintain a secure website environment and protect against unauthorized access or misuse of technical data."
    },
    {
        title: "Changes to this Policy",
        content: "We may update this Privacy Policy if our website's functionality changes in the future. Any updates will be reflected on this page with an updated \"Last Revised\" date."
    }
];

export default function PrivacyPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[var(--color-offwhite)]">
            <Navbar />
            
            <section className="pt-40 pb-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Page Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-16 border-b border-gray-200 pb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-deep-brown)] mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-[var(--color-deep-brown)] opacity-60 max-w-2xl font-normal leading-relaxed">
                            How we handle privacy on our purely informational school website. 
                            Last updated: March 2024
                        </p>
                    </motion.div>

                    {/* Content Sections */}
                    <div className="space-y-12">
                        {privacySections.map((section, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <h2 className="text-2xl font-bold text-[var(--color-deep-brown)] mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-[var(--color-deep-brown)] opacity-80 leading-relaxed font-normal">
                                    {section.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 pt-12 border-t border-gray-200"
                    >
                        <h2 className="text-2xl font-bold text-[var(--color-deep-brown)] mb-4">
                            Contact Us
                        </h2>
                        <p className="text-[var(--color-deep-brown)] opacity-80 leading-relaxed font-normal">
                            If you have any questions regarding this policy, please contact the school administration directly at our Rampura campus or through our official school channels.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
