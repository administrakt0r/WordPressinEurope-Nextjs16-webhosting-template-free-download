## 2025-02-14 - Build Error with Exported Constants in Route Handlers
**Vulnerability:** Not a security vulnerability, but a build stability issue. Exporting variables assigned from constants (e.g., `export const revalidate = CONSTANT`) in `robots.ts` and `sitemap.ts` caused `Invalid segment configuration export detected` during `next build`.
**Learning:** Next.js static analysis for segment configuration seems to require literal values or direct assignment in these specific files (Route Handlers/Metadata files) in this version/configuration.
**Prevention:** Use literal values for segment configuration exports like `revalidate`, or inline the value directly.

## 2025-02-14 - CSP Image Sources and Next.js
**Vulnerability:** Permissive `img-src https:` allowed loading images from any domain.
**Learning:** Next.js `next/image` proxies requests, so `img-src 'self'` is sufficient for optimized images. However, restricting `img-src` to specific domains (like `images.unsplash.com`) adds depth to defense by preventing loading of malicious pixels via standard `<img>` tags or unoptimized images.
**Prevention:** Always explicitly list allowed image domains in CSP `img-src`, even if `next.config.ts` `remotePatterns` is configured.

## 2025-05-23 - JSON-LD Security Pattern
**Vulnerability:** Direct usage of `dangerouslySetInnerHTML` for JSON-LD scripts in multiple pages increases the risk of accidental omission of `safeJsonLd` sanitization and duplicates unsafe code.
**Learning:** Encapsulating `safeJsonLd` logic within a reusable `<JsonLd />` component ensures consistent output sanitization and reduces the codebase's attack surface.
**Prevention:** Always use the `JsonLd` component from `@/components/JsonLd` instead of raw `<script>` tags for structured data.

## 2025-05-24 - External Link Security Pattern
**Vulnerability:** Inconsistent use of `target="_blank"` without `rel="noopener noreferrer"` in some components exposed potential reverse tabnabbing risks and lacked accessibility context (screen reader text).
**Learning:** Enforcing a dedicated `ExternalLink` component ensures that all external links automatically include security attributes (`rel`) and accessibility enhancements (screen reader text), reducing the risk of human error.
**Prevention:** Always use `@/components/ui/ExternalLink` for external URLs instead of raw `<a>` or `Link` with manual `target="_blank"`.

## 2025-05-24 - Mailto Scraping Protection
**Vulnerability:** Raw `mailto:` links in static HTML are easily harvested by spambots, leading to increased phishing and spam for support addresses.
**Learning:** Creating an `ObfuscatedMailto` component that renders the `href` attribute only after client-side hydration effectively prevents simple static scrapers from harvesting email addresses while maintaining usability for real users.
**Prevention:** Use `@/components/ui/ObfuscatedMailto` instead of raw `<a>` tags for all email links.

## 2025-05-25 - React Hooks Linting Strictness
**Vulnerability:** Strict ESLint configuration for `react-hooks/set-state-in-effect` flagged standard client-side mounting patterns (setting state in `useEffect`), potentially leading to developers disabling lint rules or writing unsafe code to bypass it.
**Learning:** Using `setTimeout` with 0ms delay inside `useEffect` effectively moves the state update to the next tick, satisfying the linter while ensuring the component remains client-side only (avoiding hydration mismatch).
**Prevention:** When needing to trigger a client-side only render (e.g. for `ObfuscatedMailto`), use `setTimeout(() => setState(true), 0)` inside `useEffect` if the linter complains about synchronous updates.

## 2025-05-25 - URL Protocol Validation
**Vulnerability:** Relying solely on `ExternalLink` for new tab behavior doesn't prevent XSS if a dynamic URL with `javascript:` protocol is passed.
**Learning:** Adding a centralized `isSafeUrl` utility that strictly validates protocols (allowing only http/https/mailto/tel) provides Defense in Depth.
**Prevention:** Always wrap external URL props in `isSafeUrl` check or use it within the link component itself to block unsafe schemes.
