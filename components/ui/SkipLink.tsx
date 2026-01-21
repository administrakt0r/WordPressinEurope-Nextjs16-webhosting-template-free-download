import { memo } from "react";
import { cn } from "@/lib/utils";

interface SkipLinkProps {
  href?: string;
  className?: string;
}

export const SkipLink = memo(function SkipLink({ href = "#main-content", className }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950 transition-transform",
        className
      )}
    >
      Skip to content
    </a>
  );
});
