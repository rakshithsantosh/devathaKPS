import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-deep-brown text-warm-sand pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="bg-terracotta p-1.5 rounded-lg">
                                <GraduationCap className="text-warm-sand w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-bold text-lg leading-none">DEVATHA KPS</span>
                                <span className="text-[10px] uppercase tracking-widest font-semibold opacity-70">Rampura</span>
                            </div>
                        </div>
                        <p className="text-sm opacity-70 leading-relaxed mb-8">
                            A government-supported rural school built with sustainable architecture, providing quality English medium education rooted in community values.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 rounded-full border border-warm-sand/20 flex items-center justify-center hover:bg-terracotta hover:border-terracotta transition-all text-warm-sand">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full border border-warm-sand/20 flex items-center justify-center hover:bg-terracotta hover:border-terracotta transition-all text-warm-sand">
                                <Facebook size={16} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading text-lg mb-8 italic border-b border-warm-sand/10 pb-4 inline-block pr-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm opacity-80">
                            <li><a href="#story" className="hover:text-terracotta transition-colors">Our Story</a></li>
                            <li><a href="#sustainability" className="hover:text-terracotta transition-colors">Architecture</a></li>
                            <li><a href="#academics" className="hover:text-terracotta transition-colors">Academic Programs</a></li>
                            <li><a href="#community" className="hover:text-terracotta transition-colors">Community Presence</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading text-lg mb-8 italic border-b border-warm-sand/10 pb-4 inline-block pr-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm opacity-80">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-terracotta w-4 h-4 shrink-0 mt-0.5" />
                                <span>Devatha KPS, <br />Rampura Village, <br />Srirangapatna Taluk, Karnataka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-terracotta w-4 h-4" />
                                <span>+91 91234 56789</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-terracotta w-4 h-4" />
                                <span>contact@devathakps.edu.in</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading text-lg mb-8 italic border-b border-warm-sand/10 pb-4 inline-block pr-6">Affiliation</h4>
                        <div className="p-4 bg-terracotta/10 rounded-xl border border-terracotta/20">
                            <p className="text-xs italic leading-relaxed opacity-90">
                                Government of Karnataka Supported Institution. English Medium Higher Primary Education (Grades 1-5).
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-warm-sand/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs opacity-50 uppercase tracking-widest">
                        © 2026 Devatha KPS. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-widest font-semibold opacity-50">
                        <a href="#" className="hover:text-terracotta transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-terracotta transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
