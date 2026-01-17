"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

          setIsVisible(scrollTop > 300);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circle configuration
  const size = 48;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      tabIndex={isVisible ? undefined : -1}
      aria-hidden={!isVisible}
      className={cn(
        "fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-slate-950 hover:-translate-y-1",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Back to top"
    >
        {/* Background & Shadow */}
        <div className="absolute inset-0 bg-slate-900 rounded-full shadow-lg border border-slate-800" />

        {/* Progress Circle */}
        <svg
            className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
        >
            {/* Track */}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                className="text-slate-800"
            />
            {/* Progress */}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                className="text-primary transition-all duration-100 ease-out"
                style={{
                    strokeDasharray: circumference,
                    strokeDashoffset,
                }}
            />
        </svg>

        {/* Icon */}
        <ArrowUp
            size={20}
            className="relative z-10 text-primary"
            aria-hidden="true"
        />
    </button>
  );
}
