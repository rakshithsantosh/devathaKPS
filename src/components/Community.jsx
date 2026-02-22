import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Heart } from 'lucide-react';

const Community = () => {
    return (
        <section id="community" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-warm-sand/20 rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
                >
                    {/* Subtle Texture/Pattern */}
                    <div className="absolute inset-0 opacity-5 mix-blend-multiply"
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20L0 20z" fill="%234A2C2A" fill-rule="evenodd"/%3E%3C/svg%3E")' }}
                    />

                    <div className="relative z-10">
                        <span className="text-terracotta font-bold tracking-[0.2em] uppercase text-xs">Our Home</span>
                        <h2 className="text-4xl md:text-5xl font-heading text-deep-brown mt-4 mb-8">Rooted in <span className="italic">Rampura</span></h2>

                        <p className="text-stone-grey text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                            Devatha KPS is more than an institution; it's a heartbeat of the Rampura community. Serving Srirangapatna Taluk, we are driven by a vision to provide local children with global opportunities within a familiar village setting.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-soft flex items-center justify-center text-terracotta mb-4">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h4 className="font-heading text-lg text-deep-brown">Village-Based</h4>
                                <p className="text-xs text-stone-grey uppercase tracking-widest mt-1">Convenient Access</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-soft flex items-center justify-center text-terracotta mb-4">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <h4 className="font-heading text-lg text-deep-brown">Community Driven</h4>
                                <p className="text-xs text-stone-grey uppercase tracking-widest mt-1">Srirangapatna Taluk</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-soft flex items-center justify-center text-terracotta mb-4">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h4 className="font-heading text-lg text-deep-brown">Intimate Learning</h4>
                                <p className="text-xs text-stone-grey uppercase tracking-widest mt-1">30 Students / Class</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Community;
