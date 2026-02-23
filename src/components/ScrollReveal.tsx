"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: ReactNode;
    /** Vertical offset in px (default 30) */
    y?: number;
    /** Delay in seconds (default 0) */
    delay?: number;
    /** Duration in seconds (default 0.8) */
    duration?: number;
    /** Stagger children (default 0) */
    stagger?: number;
    /** Additional className */
    className?: string;
    /** HTML tag to render (default "div") */
    as?: React.ElementType;
}

export default function ScrollReveal({
    children,
    y = 30,
    delay = 0,
    duration = 0.8,
    stagger = 0,
    className = "",
    as: Tag = "div",
}: ScrollRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // Respect prefers-reduced-motion
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        const targets = stagger > 0 ? el.children : el;

        const ctx = gsap.context(() => {
            gsap.from(targets, {
                opacity: 0,
                y,
                duration,
                delay,
                stagger: stagger > 0 ? stagger : undefined,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 88%",
                    toggleActions: "play none none none",
                },
            });
        }, el);

        return () => ctx.revert();
    }, [y, delay, duration, stagger]);

    return <Tag ref={containerRef} className={className}>{children}</Tag>;
}
