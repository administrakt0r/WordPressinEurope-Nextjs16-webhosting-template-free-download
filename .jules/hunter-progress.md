# Hunter Progress Tracker

## Fixed
[2026-01-14] [app/layout.tsx] Removed duplicate import of BackToTop
[2026-01-14] [components/sections/PricingCard.tsx] Fixed syntax error (extra closing div)
[2026-01-15] [components/sections/PricingCard.tsx] Fixed syntax error (extra closing div) - Re-fix: build was failing
[2026-01-15] [components/sections/ServiceDescription.tsx] Fixed redundant styles and list keys
[2026-01-15] [components/sections/Features.tsx] Fixed inline styles to use Tailwind classes
[2026-01-22] [app/layout.tsx] Removed duplicate rendering of BackToTop component
[2026-01-22] [components/templates/HostingLanding.tsx] Removed unused props (title, description) and updated 7 usages
[2026-01-16] [app/layout.tsx] Restored BackToTop component usage (unused import fixed)
[2026-01-16] [components/sections/ServiceDescription.tsx] Refactored duplicate code to use ServiceFeatureCard (unused variable fixed)
[2026-02-23] [app/error.tsx] Removed dead code (commented out console.log)
[2026-02-23] [app/layout.tsx] Fixed import order (imports after export)
[2026-02-23] [components/sections/Features.tsx] Fixed type safety for non-standard CSS properties
[2026-02-24] [app/layout.tsx] Removed duplicate JsonLd import and used component instead of raw script
[2026-02-24] [app/page.tsx] Removed duplicate JsonLd import
[2026-02-24] [components/JsonLd.tsx] Added eslint-disable for dangerouslySetInnerHTML
[2026-02-25] [app/support/page.tsx] Fixed insecure external links and naming collision
[2026-02-25] [components/sections/About.tsx] Fixed insecure external link
[2026-01-19] [app/error.tsx] Added missing console.error logging for errors
[2026-01-19] [app/globals.css] Added missing --color-muted and --color-muted-foreground CSS variables
[2026-02-25] [components/sections/PricingCard.tsx] Added missing ExternalLink import (fixed build error)
[2026-02-25] [components/sections/Hero.tsx] Replaced Link with ExternalLink for external URLs
[2026-03-04] [components/ui/ObfuscatedMailto.tsx] Refactored to use useSyncExternalStore to fix "setState in useEffect" lint error
[2026-03-04] [tests/obfuscated_mailto.test.tsx] Removed unused imports (fireEvent, waitFor)
[2026-03-05] [lib/constants.ts] Added central pricing constants to fix duplicate code
[2026-03-05] [components/sections/Hero.tsx] Updated to use pricing constants
[2026-03-05] [components/sections/PricingCard.tsx] Updated to use pricing constants
[2026-03-05] [app/free-*-hosting/page.tsx] Updated 6 pages to use pricing constants in JSON-LD
[2026-03-05] [components/sections/FAQ.tsx] Replaced Link with ExternalLink for learning portal and refactored style
[2026-03-05] [components/sections/PricingCard.tsx] Removed memo from server component child
[2026-03-05] [components/sections/FeatureCard.tsx] Removed memo from server component child
[2026-03-05] [components/sections/SupportCard.tsx] Removed memo from server component child
[2026-03-05] [components/ui/TechnologyLogo.tsx] Removed memo from server component child
[2026-03-06] [components/sections/FAQ.tsx] Removed duplicate import of getOffscreenOptimizations
[2026-03-06] [lib/security.ts] Removed duplicate isSafeUrl function
[2026-03-06] [components/layout/Navbar.tsx] Fixed property access mismatch (link.label -> link.name)
[2026-03-06] [components/ui/ExternalLink.tsx] Defined missing safeHref variable using isSafeUrl
[2026-03-06] [components/sections/ServiceDescription.tsx] Removed duplicate unoptimized JSX prop
[2026-03-06] [components/ui/TechnologyLogo.tsx] Removed duplicate unoptimized JSX prop
[2026-03-07] [lib/constants.ts] Added technology logo constants to centralize duplicate definitions
[2026-03-07] [app/free-*-hosting/page.tsx] Refactored 6 pages to use central logo constants
[2026-03-07] [components/sections/Features.tsx] Refactored to use central logo constants
[2026-03-07] [lib/links.ts] Added SUPPORT_EMAIL to EXTERNAL_LINKS
[2026-03-07] [app/support/page.tsx] Updated to use SUPPORT_EMAIL from links constant
[2026-03-07] [components/ui/SkipLink.tsx] Removed unnecessary memo from Server Component
[2026-03-07] [lib/json-ld.ts] Added getServiceJsonLd helper to avoid duplication
[2026-03-07] [app/free-*-hosting/page.tsx] Refactored 6 pages to use getServiceJsonLd (duplicate code fix)
[2026-03-08] [app/layout.tsx] Removed redundant CSS classes
[2026-03-08] [components/sections/ServiceDescription.tsx] Added dynamic column support (refactor)
[2026-03-08] [app/free-europe-hosting/page.tsx] Refactored to use ServiceDescription component (deduplication)
[2026-01-29] [app/layout.tsx] Refactored CSS: moved focus rules to globals.css and deleted accessibility.css
[2026-01-29] [lib/fonts.ts] Created shared font definitions to deduplicate code
[2026-01-29] [app/layout.tsx] Updated to use shared fonts
[2026-01-29] [app/global-error.tsx] Updated to use shared fonts
[2026-03-08] [components/sections/ServiceDescription.tsx] Removed duplicate and unused imports (memo, ElementType)
[2026-03-08] [middleware.ts] Fixed unsafe 'any' type cast by defining RequestWithIp interface
[2026-03-08] [lib/content.tsx] Centralized PRICING_FEATURES
[2026-03-08] [components/sections/PricingCard.tsx] Refactored to use centralized PRICING_FEATURES

## Known Issues
<!-- Issues found but not yet fixed -->
[2026-03-03] Missing `app/manifest.ts` (PWA feature) - Requires Feature task, not Bug Fix.
[2026-03-03] Missing JSDoc in `lib/utils.ts` and `lib/links.ts` - Requires Improvement task.

## False Positives
<!-- Things that look like errors but aren't -->
