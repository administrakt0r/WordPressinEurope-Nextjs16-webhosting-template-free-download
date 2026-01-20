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
