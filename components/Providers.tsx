"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";

const BackToTop = dynamic(
  () => import("@/components/ui/BackToTop").then((mod) => mod.BackToTop),
  {
    ssr: false,
  }
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
      <BackToTop />
    </LazyMotion>
  );
}
