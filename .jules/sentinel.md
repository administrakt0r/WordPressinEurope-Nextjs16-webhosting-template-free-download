## 2025-02-14 - Build Error with Exported Constants in Route Handlers
**Vulnerability:** Not a security vulnerability, but a build stability issue. Exporting variables assigned from constants (e.g., `export const revalidate = CONSTANT`) in `robots.ts` and `sitemap.ts` caused `Invalid segment configuration export detected` during `next build`.
**Learning:** Next.js static analysis for segment configuration seems to require literal values or direct assignment in these specific files (Route Handlers/Metadata files) in this version/configuration.
**Prevention:** Use literal values for segment configuration exports like `revalidate`, or inline the value directly.

## 2025-02-14 - CSP Tightening for Static Site
**Vulnerability:** Loose Content Security Policy (CSP) allowing any `https:` images and missing `connect-src`.
**Learning:** Since the site is purely static (no API routes) and only uses Unsplash for external images (configured in `next.config.ts`), we can enforce a much stricter CSP. We restricted `img-src` to `self` `data:` and `https://images.unsplash.com`.
**Prevention:** Regularly review external asset usage and tighten CSP to the minimum required.
