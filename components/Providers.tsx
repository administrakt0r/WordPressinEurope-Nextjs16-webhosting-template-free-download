"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { prefetchDNS } from "react-dom";

export function Providers({ children }: { children: React.ReactNode }) {
  // ⚡ Performance: DNS prefetch for external image domains
  prefetchDNS("https://images.unsplash.com");

  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
