"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import ReactDOM from "react-dom";

const BackToTop = dynamic(
  () => import("@/components/ui/BackToTop").then((mod) => mod.BackToTop),
  {
    ssr: false,
  }
);

export function Providers({ children }: { children: React.ReactNode }) {
  // Resource hints for critical external domains
  // prefetchDNS is for domains we might visit (uptime)
  ReactDOM.prefetchDNS("https://uptime.wpineu.com");

  // preconnect is for domains we definitely fetch from soon (images, client portal linked in nav)
  ReactDOM.preconnect("https://clients.wpineu.com");
  ReactDOM.preconnect("https://wp.wpineu.com");
  ReactDOM.preconnect("https://images.unsplash.com");

  return (
    <LazyMotion features={domAnimation} strict>
      {children}
      <BackToTop />
    </LazyMotion>
  );
}
