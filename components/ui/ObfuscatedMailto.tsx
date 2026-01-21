"use client";

import { useState, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ObfuscatedMailtoProps {
  email: string;
  children?: ReactNode;
  className?: string;
  subject?: string;
  body?: string;
  headers?: Record<string, string>;
}

export function ObfuscatedMailto({
  email,
  children,
  className,
  subject,
  body,
  headers,
}: ObfuscatedMailtoProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const params = new URLSearchParams();
  if (subject) params.append("subject", subject);
  if (body) params.append("body", body);
  if (headers) {
      Object.entries(headers).forEach(([key, value]) => {
          params.append(key, value);
      });
  }

  const queryString = params.toString();
  const href = isMounted ? `mailto:${email}${queryString ? `?${queryString}` : ""}` : "#";

  // If no children provided, display the email
  const content = children || email;

  return (
    <a
      href={href}
      className={cn("cursor-pointer", className)}
      rel="nofollow noopener noreferrer"
    >
      {content}
    </a>
  );
}
