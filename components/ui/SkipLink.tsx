import { cn } from "@/lib/utils";
import { isSafeUrl } from "@/lib/security";

interface SkipLinkProps {
  href?: string;
  className?: string;
}

export function SkipLink({ href = "#main-content", className }: SkipLinkProps) {
  // Optimization: Allow hash links directly without parsing
  const isAnchor = href.startsWith("#");
  const safe = isAnchor || isSafeUrl(href);
  const safeHref = safe ? href : "#main-content";

  return (
    <a
      href={safeHref}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950 transition-transform",
        className
      )}
    >
      Skip to content
    </a>
  );
}
