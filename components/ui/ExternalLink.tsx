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
 */
export function ExternalLink({ href, children, className, ariaLabel, onClick }: ExternalLinkProps) {
  const safeHref = isSafeUrl(href) ? href : '#';

  if (process.env.NODE_ENV === 'development' && !isSafeUrl(href)) {
    console.warn(`Blocked unsafe URL in ExternalLink: ${href}`);
  }

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
}
