"use client";

import { m } from "framer-motion";

interface HeroAnimatorProps {
    textContent: React.ReactNode;
    visualContent: React.ReactNode;
}

/**
 * Client-side wrapper for animating the Hero section.
 * This component handles the entrance animations for the text and visual content.
 * It uses `framer-motion` (via the `m` component from `LazyMotion` in `Providers`)
 * to efficiently animate elements without bloating the initial bundle.
 *
 * @param textContent - The server-rendered text content (heading, description, CTA).
 * @param visualContent - The server-rendered visual content (e.g., images, cards).
 */
export function HeroAnimator({ textContent, visualContent }: HeroAnimatorProps) {
    return (
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content Animation */}
            <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center lg:text-left"
            >
                {textContent}
            </m.div>

            {/* Visual Content Animation */}
            <m.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative perspective-1000"
            >
                {visualContent}
            </m.div>
        </div>
    );
}
