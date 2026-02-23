"use client";

import { useState, useEffect, useRef, memo } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Optimization: Memoized to prevent re-renders when parent updates (e.g. Providers)
export const BackToTop = memo(function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const height = document.documentElement.scrollHeight - window.innerHeight;
          const progress = height > 0 ? (currentScroll / height) * 100 : 0;

          // Optimization: Direct DOM manipulation to avoid re-renders on every scroll frame
          if (pathRef.current) {
            pathRef.current.style.strokeDasharray = `${progress}, 100`;
          }

          // Only trigger state update if visibility changes
          const shouldBeVisible = currentScroll > 300;
          setIsVisible((prev) => {
            if (prev !== shouldBeVisible) {
              return shouldBeVisible;
            }
            return prev;
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Move focus to main content for keyboard users
    // Small timeout to allow smooth scroll to start
    setTimeout(() => {
      const main = document.getElementById("main-content");
      if (main) {
        main.focus({ preventScroll: true });
      }
    }, 100);
  };

  // Circumference of the circle (r=18) -> 2 * PI * 18 ≈ 113.1
  // We use a normalized stroke-dasharray approach with pathLength

  return (
    <button
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      title="Back to top"
      className={cn(
        "fixed bottom-8 right-8 z-50 p-2 bg-slate-950 text-white rounded-full shadow-lg hover:bg-slate-900 hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-slate-950 group flex items-center justify-center will-animate",
        isVisible ? "opacity-100 translate-y-0 cursor-pointer" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      {/* Progress Circle */}
      <div className="absolute inset-0 rounded-full border border-slate-800" />
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
        viewBox="0 0 36 36"
        aria-hidden="true"
      >
        {/* Background track - optional if we want a full ring */}
        <path
          className="text-slate-800"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        {/* Progress indicator */}
        <path
          ref={pathRef}
          className="text-primary transition-all duration-100 ease-out"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="0, 100"
        />
      </svg>

      {/* Icon */}
      <div className="relative z-10 p-1">
        <ArrowUp size={20} aria-hidden="true" className="text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
      </div>
    </button>
  );
});
