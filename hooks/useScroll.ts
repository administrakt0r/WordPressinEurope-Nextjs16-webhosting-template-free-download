import { useState, useEffect } from 'react';

/**
 * Hook to detect if the user has scrolled past a certain threshold.
 * Uses requestAnimationFrame for performance optimization.
 *
 * @param threshold The scroll threshold in pixels (default: 20).
 * @returns boolean indicating if the page is scrolled past the threshold.
 */
export function useScroll(threshold: number = 20): boolean {
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

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
