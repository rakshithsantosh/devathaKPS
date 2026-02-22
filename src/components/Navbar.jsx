import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Our Story', href: '#story' },
        { name: 'Sustainability', href: '#sustainability' },
        { name: 'Academics', href: '#academics' },
        { name: 'Community', href: '#community' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <div className="bg-terracotta p-1.5 rounded-lg shadow-soft">
                        <GraduationCap className="text-warm-sand w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-heading font-bold text-lg leading-none ${isScrolled ? 'text-deep-brown' : 'text-deep-brown'}`}>DEVATHA KPS</span>
                        <span className={`text-[10px] uppercase tracking-widest font-semibold ${isScrolled ? 'text-stone-grey' : 'text-stone-grey'}`}>Rampura</span>
                    </div>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-stone-grey hover:text-terracotta text-sm font-medium tracking-wide transition-colors"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-terracotta text-warm-sand px-6 py-2.5 rounded-full text-sm font-semibold shadow-soft hover:shadow-medium hover:bg-deep-brown"
                    >
                        Admissions Open
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-deep-brown"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-warm-sand overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-stone-grey text-lg font-medium py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-terracotta text-warm-sand px-6 py-3 rounded-xl text-center font-bold">
                                Admissions Open
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
