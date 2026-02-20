"use client";

import { m } from "framer-motion";
import { memo, useMemo } from "react";

interface AnimatedSectionProps {
    children: React.ReactNode;
    direction?: "left" | "right" | "up" | "down";
    delay?: number;
    className?: string;
}

/**
 * AnimatedSection
 *
 * Renders a motion div with entry animations.
 * ⚡ Performance: Expects a parent <LazyMotion> provider to be present in the tree.
 * Do not use this component without wrapping it (or a parent) in LazyMotion.
 */
export const AnimatedSection = memo(function AnimatedSection({ children, direction = "up", delay = 0, className = "" }: AnimatedSectionProps) {
    const offset = 15; // Reduced from 20 for smoother feel

    const variants = useMemo(() => ({
        hidden: {
            opacity: 0,
            x: direction === "left" ? -offset : direction === "right" ? offset : 0,
            y: direction === "up" ? offset : direction === "down" ? -offset : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.4,
                delay: delay,
                ease: "easeOut" as const,
            },
        },
    }), [direction, delay]);

    return (
        <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            // ⚡ Performance: will-animate hints browser to optimize compositing layer
            className={`${className} will-animate`}
        >
            {children}
        </m.div>
    );
});
