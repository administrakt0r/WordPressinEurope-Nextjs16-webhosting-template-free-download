"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import ReactDOM from "react-dom";
import { EXTERNAL_LINKS } from "@/lib/links";

const BackToTop = dynamic(
  () => import("@/components/ui/BackToTop").then((mod) => mod.BackToTop),
  {
    ssr: false,
  }
);

export function Providers({ children }: { children: React.ReactNode }) {
  // Resource hints for critical external domains
  // prefetchDNS is for domains we might visit (uptime)
  ReactDOM.prefetchDNS(EXTERNAL_LINKS.UPTIME);
  // ⚡ Performance: prefetch DNS for image CDN to speed up image loading
  ReactDOM.prefetchDNS(EXTERNAL_LINKS.UNSPLASH_CDN);
  // ⚡ Performance: prefetch DNS for internal subdomains to speed up navigation
  ReactDOM.prefetchDNS(EXTERNAL_LINKS.BLOG);
  ReactDOM.prefetchDNS(EXTERNAL_LINKS.CLIENT_PORTAL);


  // preconnect is for domains we definitely fetch from soon (images, client portal linked in nav)
  ReactDOM.preconnect(EXTERNAL_LINKS.CLIENT_PORTAL);
  ReactDOM.preconnect(EXTERNAL_LINKS.BLOG);
  ReactDOM.preconnect(EXTERNAL_LINKS.UNSPLASH_CDN);

  return (
    <LazyMotion features={domAnimation} strict>
      {children}
      <BackToTop />
    </LazyMotion>
  );
}
