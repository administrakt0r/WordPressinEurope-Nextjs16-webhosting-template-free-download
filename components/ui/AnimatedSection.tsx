"use client";

import { motion } from "framer-motion";

interface AnimatedSectionProps {
    children: React.ReactNode;
    direction?: "left" | "right" | "up" | "down";
    delay?: number;
    className?: string;
}

export function AnimatedSection({ children, direction = "up", delay = 0, className = "" }: AnimatedSectionProps) {
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
