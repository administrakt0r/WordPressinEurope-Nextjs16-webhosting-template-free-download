"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

interface AnimatedSectionProps {
    children: React.ReactNode;
    direction?: "left" | "right" | "up" | "down";
    delay?: number;
    className?: string;
}

export function AnimatedSection({ children, direction = "up", delay = 0, className = "" }: AnimatedSectionProps) {
    const offset = 15; // Reduced from 20 for smoother feel

    const variants = {
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
    };

    return (
        <LazyMotion features={domAnimation} strict>
            <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={variants}
                className={className}
            >
                {children}
            </m.div>
        </LazyMotion>
    );
}
