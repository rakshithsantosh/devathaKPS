import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Send } from 'lucide-react';

const Admissions = () => {
    return (
        <section id="admissions" className="py-24 bg-bg-offwhite">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-heading text-deep-brown mb-6">Start Your <span className="italic">Journey</span> With Us</h2>
                    <div className="mb-12">
                        <p className="text-stone-grey text-lg italic">Admissions Open – Classes 1 to 5</p>
                        <p className="text-sm text-terracotta font-medium mt-2">Extension to 10th Standard in Progress</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <button className="bg-terracotta text-warm-sand px-10 py-5 rounded-full text-lg font-semibold shadow-soft hover:shadow-medium hover:bg-deep-brown transition-all inline-flex items-center gap-2 group">
                            Apply Now
                            <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="bg-white border-2 border-warm-sand/50 text-deep-brown px-10 py-5 rounded-full text-lg font-semibold hover:border-terracotta hover:text-terracotta transition-all inline-flex items-center gap-2 group">
                            Schedule a Visit
                            <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>

                    <p className="mt-10 text-stone-grey text-sm">
                        Interested in visiting our campus? We offer guided tours for parents to explore our sustainable architecture and witness our classes in action.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Admissions;
