import { useState, useEffect } from "react";

/**
 * Hook to track scroll position and determine if the user has scrolled past a threshold.
 * Uses requestAnimationFrame for performance optimization.
 *
 * @param threshold - The scroll threshold in pixels (default: 20)
 * @returns boolean - True if scrolled past threshold
 */
export function useScroll(threshold = 20) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > threshold);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Check initial scroll position
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return isScrolled;
}
