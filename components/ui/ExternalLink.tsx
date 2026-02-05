import { memo, useMemo } from "react";
import Link from "next/link";
import { memo } from "react";
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
  // Optimization: specific check for security only when href changes
  const safeHref = useMemo(() => isSafeUrl(href) ? href : "#", [href]);

  return (
    <Link
      href={safeHref}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
      <span className="sr-only">(opens in a new tab)</span>
    </Link>
  );
});
