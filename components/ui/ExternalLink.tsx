import Link from "next/link";
import { cn } from "@/lib/utils";

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
 */
export function ExternalLink({ href, children, className, ariaLabel, onClick }: ExternalLinkProps) {
  return (
    <Link
      href={href}
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
}
