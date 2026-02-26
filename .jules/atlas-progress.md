# Atlas Progress Tracker

## Completed
[2026-01-20] [FIX] Refactor `middleware.ts` to remove duplicate variable declarations and logic.
[2026-01-20] [UX] Improve accessibility in `ServiceDescription.tsx` with dynamic ID generation.
[2026-01-20] [UX] Improve accessibility in `FAQ.tsx` with optional ID props.
[2026-01-20] [UX] Enhance focus styles in `Footer.tsx` with high-contrast rings.
[2026-01-20] [FIX] Refactor `Navbar.tsx` to correctly import and use memoized sub-components.
[2026-01-20] [PERF] Optimized user-agent blocking in `middleware.ts` using regex.
[2026-01-20] [UX] Implemented focus trap in mobile menu for better accessibility.
[2026-01-20] [UX] Added 'Go to Home' button to global error boundary.
[2026-01-20] [UX] Added `aria-current="page"` to navbar logo when active.
[2026-01-23] [UX] Enhanced `FAQAccordion` and `FAQItem` to support rich content.
[2026-01-23] [UX] Refactored `app/support/page.tsx` to use `FAQAccordion` for better consistency.
[2026-01-23] [UX] Added `role="status"` and `aria-label` to `Skeleton` component for better accessibility.
[2026-01-26] [SEC] Enhanced `isSafeUrl` to correctly validate relative URLs and prevent bypasses.
[2026-01-26] [SEC] Added `X-Download-Options: noopen` to `next.config.ts`.
[2026-01-26] [PERF] Optimized `AnimatedSection` by memoizing `variants`.
[2026-01-26] [QUALITY] Extracted reusable `useFocusTrap` hook and refactored `MobileMenu`.
[2026-01-27] [SEC] Refined User-Agent blocking regex to use word boundaries and prevent false positives.
[2026-01-27] [SEC] Upgraded Next.js to 16.1.6 to fix high severity vulnerabilities.
[2026-02-21] [PERF] Memoized `Skeleton` component to prevent unnecessary re-renders.
[2026-02-21] [PERF] Memoized `CopyButton` component.
[2026-02-21] [PERF] Memoized `ObfuscatedMailto` component.
[2026-02-21] [SEC] Hardened `isSafeUrl` to trim whitespace and prevent open redirect bypasses.
[2026-02-21] [UX] Improved `SkipLink` to handle hash links efficiently without URL parsing.
[2026-03-01] [QUALITY] Added `use client` to `ExternalLink` to fix Server Component hook usage.
[2026-03-01] [PERF] Memoized `SkeletonList` and improved accessibility to reduce screen reader noise.
[2026-03-01] [QUALITY] Refactored `Features` and `Pricing` sections to use consistent `AnimatedSection`.
[2026-03-01] [UX] Added `aria-label` to "View Features" link in `Hero` section.
[2026-03-05] [PERF] Refactored `RateLimiter` logic for better safety and clarity.
[2026-03-05] [UX] Optimized `BackToTop` animation performance with `.will-animate`.
[2026-03-05] [PERF] Added `.will-animate` to `FeatureCard` and `PricingCard` hover effects.
[2026-03-05] [SEC] Hardened `isSafeUrl` to reject control characters and added comprehensive tests.
[2026-03-05] [SEC] Migrated `middleware.ts` to `proxy.ts` (Next.js 16 convention).
[2026-03-05] [UX] Added visual feedback ("Copied!") to `CopyButton` component.
[2026-03-05] [UX] Improved accessibility in `HostingHero` with proper ARIA labeling for rating.

## In Progress

## Backlog
[PERF][MEDIUM] Implement `useId` in Client Components for better accessibility stability.

## Won't Fix
<!-- With reason -->
