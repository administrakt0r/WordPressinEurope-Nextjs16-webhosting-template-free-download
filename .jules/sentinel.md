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

## 2025-05-24 - Unsanitized Link Components
**Vulnerability:** Reusable link components (`ExternalLink`, `SkipLink`) accepted arbitrary `href` values, allowing XSS via `javascript:` scheme if passed malicious input.
**Learning:** Even "secure" components that handle `rel` and `target` attributes must also validate the `href` protocol to be truly secure.
**Prevention:** Use `isSafeUrl` to validate all `href` props in link components before rendering.

## 2025-05-24 - Defense in Depth with Middleware Headers
**Vulnerability:** While `next.config.ts` configured security headers, they rely on specific path matching. The application lacked a "defense in depth" layer to enforce these headers globally at the edge (middleware), potentially leaving gaps for excluded paths or static assets if configuration drifts.
**Learning:** Next.js `middleware.ts` (or `proxy.ts`) allows intercepting requests before they hit the filesystem or page logic, making it the ideal place to enforce non-negotiable security headers like HSTS and X-Frame-Options.
**Prevention:** Explicitly set critical security headers in Middleware in addition to `next.config.ts` to ensure redundancy and broader coverage.

## 2025-05-24 - Cross-Domain Policy Header
**Vulnerability:** Missing `X-Permitted-Cross-Domain-Policies` header allowed Adobe Flash and PDF documents to potentially load data from the domain.
**Learning:** Even though Flash is deprecated, other clients (like PDF readers) may verify this policy. Explicitly setting it to `none` is a defense-in-depth measure.
**Prevention:** Enforce `X-Permitted-Cross-Domain-Policies: none` in middleware to prevent cross-domain data loading.

## 2025-05-24 - Hardware API Fingerprinting
**Vulnerability:** Modern browser APIs like Web Bluetooth, Serial, HID, and Battery Status can be used for fingerprinting or accessing local hardware if exploited via XSS.
**Learning:** Explicitly disabling unused hardware APIs via `Permissions-Policy` reduces the attack surface and prevents unauthorized access to user devices, even if an attacker achieves script execution.
**Prevention:** Maintain a strict `Permissions-Policy` in `middleware.ts` that explicitly denies `bluetooth`, `serial`, `hid`, and `battery` unless absolutely necessary.
