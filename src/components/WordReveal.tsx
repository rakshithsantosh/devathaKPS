"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WordRevealProps {
    text: string;
    /** CSS class applied to each word span */
    className?: string;
    /** Stagger per word in seconds (default 0.04) */
    stagger?: number;
    /** Duration per word in seconds (default 0.5) */
    duration?: number;
    /** Container style overrides */
    style?: React.CSSProperties;
}

export default function WordReveal({
    text,
    className = "",
    stagger = 0.04,
    duration = 0.5,
    style,
}: WordRevealProps) {
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        const words = el.querySelectorAll(".word-reveal-item");

        const ctx = gsap.context(() => {
            gsap.from(words, {
                opacity: 0,
                duration,
                stagger,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        }, el);

        return () => ctx.revert();
    }, [text, stagger, duration]);

    const words = text.split(" ");

    return (
        <span ref={containerRef} className={className} style={style}>
            {words.map((word, i) => (
                <span
                    key={`${word}-${i}`}
                    className="word-reveal-item"
                    style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                    {word}
                </span>
            ))}
        </span>
    );
}
