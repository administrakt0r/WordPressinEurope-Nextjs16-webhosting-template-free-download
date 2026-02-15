import { memo, useMemo } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { isSafeUrl } from "@/lib/security";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

/**
 * A reusable component for external links that handles security and accessibility best practices.
 * Automatically adds target="_blank", rel="noopener noreferrer", and screen-reader only text.
 * Wrapped in React.memo to prevent unnecessary re-renders.
 */
export const ExternalLink = memo(function ExternalLink({ href, children, className, ariaLabel, onClick }: ExternalLinkProps) {
  // Optimization: Memoize safeHref calculation to avoid URL parsing on every render
  const safeHref = useMemo(() => isSafeUrl(href) ? href : "#", [href]);

  return (
    <a
      href={safeHref}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
});
