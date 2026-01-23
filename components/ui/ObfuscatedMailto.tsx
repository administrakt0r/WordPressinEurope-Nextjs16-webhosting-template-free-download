"use client";

import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface ObfuscatedMailtoProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  email: string;
  headers?: {
    subject?: string;
    body?: string;
    cc?: string;
    bcc?: string;
  };
}

const emptySubscribe = () => () => {};

/**
 * A component that obfuscates the mailto link to prevent email scraping.
 * The href is only set after hydration, protecting the address from simple bots.
 */
export function ObfuscatedMailto({
  email,
  headers,
  className,
  children,
  onClick,
  ...props
}: ObfuscatedMailtoProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This is a standard pattern to handle client-side only rendering to avoid hydration mismatches.
    // We intentionally trigger a re-render to reveal the protected content.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  // Construct href only on client
  const href = useMemo(() => {
    if (!isMounted) return undefined;

    let link = `mailto:${email}`;
    if (headers) {
      const params = new URLSearchParams();
      Object.entries(headers).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });
      const queryString = params.toString();
      if (queryString) link += `?${queryString}`;
    }
    return link;
  }, [isMounted, email, headers]);

  return (
    <a
      href={href}
      className={cn(className)}
      onClick={onClick}
      {...props}
    >
      {children || email}
    </a>
  );
}
