"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const termsSections = [
    {
        title: "Introduction",
        content: "Devatha KPS Government Primary School (\"the School\") provides this website for informational purposes only. By accessing or using this website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of this site."
    },
    {
        title: "Use of Website",
        content: "This website and its content are provided for students, parents, and community members as a window into the School's architecture and mission. You agree to use the site responsibly and not for any harmful or illegal purposes, such as spreading malware or attempting to breach the technical security of the platform."
    },
    {
        title: "Content Accuracy",
        content: "While we strive to maintain the most accurate and up-to-date information, the School does not guarantee that all content, including architectural details, and descriptions, are completely error-free. We reserve the right to update or modify information on this site at any time without notice."
    },
    {
        title: "Intellectual Property",
        content: "Traditional and digital elements, including photography, architectural designs, and the school logo, are the intellectual property of the School or its family of donors and are protected by applicable laws. Users may view and print content for personal, non-commercial use only."
    },
    {
        title: "Third-Party Links",
        content: "Our website may contain links to external sites or third-party platforms. The School is not responsible for the content, privacy practices, or availability of those outside resources."
    },
    {
        title: "Limitation of Liability",
        content: "The School is not liable for any direct or indirect decisions made based on the content of this informational website. We encourage users to verify important academic or institutional details directly with our administration office."
    },
    {
        title: "Governing Law",
        content: "These Terms & Conditions are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts located in the respective state of the School's primary campus."
    },
    {
        title: "Changes to terms",
        content: "We may update these Terms & Conditions occasionally to reflect changes in our website's functionality or our institutional policies. Any updates will be reflected on this page."
    }
];

export default function TermsPage() {
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
                            Terms & Conditions
                        </h1>
                        <p className="text-lg text-[var(--color-deep-brown)] opacity-60 max-w-2xl font-normal leading-relaxed">
                            Agreement explaining the responsible use of our informational platform. 
                            Last updated: March 2024
                        </p>
                    </motion.div>

                    {/* Content Sections */}
                    <div className="space-y-12">
                        {termsSections.map((section, index) => (
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
                            If you have any questions regarding these terms, please contact the school administration office directly at our Rampura campus.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
