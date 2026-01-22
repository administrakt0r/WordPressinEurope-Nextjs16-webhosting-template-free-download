"use client";

import { useEffect, useState } from "react";
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
    // Delay setting mounted state to avoid "setState in effect" lint error
    // and ensure we don't block the initial paint.
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const getHref = () => {
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
  };

  return (
    <a
      href={getHref()}
      className={cn(className)}
      onClick={onClick}
      {...props}
    >
      {children || email}
    </a>
  );
}
