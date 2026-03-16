# Atlas Progress Tracker

## Completed
[2026-03-14] [UX] Added empty state to `Support` section resources list.
[2026-03-14] [PERF] Memoized `HeroAnimator` component to prevent unnecessary re-renders.
[2026-03-14] [QUALITY] Added `title` metadata to `app/not-found.tsx` for better SEO and UX.
[2026-04-10] [PERF] Wrapped `FAQAccordion` in `React.memo` and handled empty state gracefully.
[2026-04-10] [UX] Added `aria-label`s to "Try Again" and "Return Home" buttons in `app/error.tsx`.
[2026-04-10] [PERF] Dynamically imported `AdvantageSection` in `components/sections/Features.tsx` to reduce bundle size.
[2026-11-06] [UX] Added explicit focus states to `View Features` link in `HostingHero` component.
[2026-11-06] [UX] Added `aria-label`s to "Try Again" and "Reload Page" buttons in `global-error.tsx`.
[2026-10-25] [UX] Add `role="alert"` and `aria-live="polite"` to `app/not-found.tsx` to ensure screen readers announce the 404 error state properly.
[2026-10-25] [PERF] Dynamically import `FAQAccordion` in `app/support/page.tsx` to reduce initial bundle size.
[2026-10-25] [UX] Add `aria-hidden="true"` to decorative icons in `app/support/page.tsx` for better screen reader experience.
[2026-03-05] [QUALITY] Refactored `About`, `FAQ`, `Support`, and `ServiceDescription` sections to use consistent `Section` component.
[2026-03-05] [PERF] Wrapped `ServiceDescription` in `React.memo` to optimize rendering.
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
[2026-03-08] [PERF] Replaced expensive `blur-3xl` filter with `radial-gradient` in `About` section.
[2026-03-08] [UX] Implemented `useId` in `Navbar` for accessible and stable Mobile Menu IDs.
[2026-03-08] [QUALITY] Enabled `reactStrictMode` in `next.config.ts`.
[2026-03-12] [PERF] Refactored `Footer.tsx` to use memoized `FooterColumn` component.
[2026-03-12] [UX] Improved `ExternalLink.tsx` accessibility with `aria-describedby` for "new tab" announcement.
[2026-03-12] [QUALITY] Fixed `AnimatedSection.tsx` class merging with `cn`.
[2026-03-12] [QUALITY] Improved `CopyButton.tsx` robustness with `useRef` for mounted state.
[2026-03-15] [PERF] Dynamically imported `Footer` and `MobileMenu` to reduce initial bundle size.
[2026-03-15] [QUALITY] Created reusable `Section` component with performance optimizations and accessibility features.
[2026-03-15] [QUALITY] Refactored `Features` and `Pricing` to use the new `Section` component.
[2026-03-24] [UX] Add hard page reload Go to Home button to `app/global-error.tsx`.
[2026-03-24] [UX] Use `disabled` attribute to manage `BackToTop` focusability.
[2026-03-24] [PERF] Add `React.memo` to `Breadcrumbs` component to prevent unnecessary re-renders.
[2026-04-02] [QUALITY] Fixed state update warnings in `tests/copy_button.test.tsx` using `act()` and `waitFor()`.
[2026-04-02] [UX] Replaced empty fallbacks with `Skeleton` and `SkeletonList` in `HostingLanding.tsx`.
[2026-04-02] [UX] Added active link styling and `aria-current="page"` to `FooterColumn.tsx`.
[2026-05-18] [UX] Improved A11y of `app/not-found.tsx` 404 header and updated metadata to prevent indexing.
[2026-05-18] [PERF] Added `gpu-accelerated` to `error` and `not-found` variants in `BackgroundEffects`.
[2026-05-18] [PERF] Set `prefetch={false}` on below-fold and error links in `app/not-found.tsx`.
[2026-05-18] [PERF] Extracted inline breadcrumbs arrays to constants in `app/support/page.tsx` and all service pages to prevent breaking `React.memo`.

## In Progress

## Backlog
[PERF][MEDIUM] Implement pagination or infinite scrolling for long lists if any are added in the future.
[UX][LOW] Add specific required field indicators if contact forms are implemented.

## Won't Fix
[2026-03-24] [SEC] Migrate `middleware.ts` to `proxy.ts` - Rejected. Next.js still uses `middleware.ts`. Renaming it drops all security logic.
