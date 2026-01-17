## 2025-02-14 - Build Error with Exported Constants in Route Handlers
**Vulnerability:** Not a security vulnerability, but a build stability issue. Exporting variables assigned from constants (e.g., `export const revalidate = CONSTANT`) in `robots.ts` and `sitemap.ts` caused `Invalid segment configuration export detected` during `next build`.
**Learning:** Next.js static analysis for segment configuration seems to require literal values or direct assignment in these specific files (Route Handlers/Metadata files) in this version/configuration.
**Prevention:** Use literal values for segment configuration exports like `revalidate`, or inline the value directly.

## 2025-02-14 - CSP Image Sources and Next.js
**Vulnerability:** Permissive `img-src https:` allowed loading images from any domain.
**Learning:** Next.js `next/image` proxies requests, so `img-src 'self'` is sufficient for optimized images. However, restricting `img-src` to specific domains (like `images.unsplash.com`) adds depth to defense by preventing loading of malicious pixels via standard `<img>` tags or unoptimized images.
**Prevention:** Always explicitly list allowed image domains in CSP `img-src`, even if `next.config.ts` `remotePatterns` is configured.
