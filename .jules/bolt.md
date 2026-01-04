## 2026-01-04 - Next.js Build Failure on revalidate export
**Learning:** `export const revalidate` in `robots.ts` and `sitemap.ts` caused "Invalid segment configuration export detected" in this Next.js 16 environment.
**Action:** When encountering this error, check for route segment config exports in special file conventions like robots/sitemap and remove/comment them if invalid.

## 2026-02-23 - SVG Image Optimization
**Learning:** `next/image` requires `width` and `height` for all images, even SVGs. Using `viewBox` dimensions or reasonable defaults helps maintain aspect ratio while CSS controls display size.
**Action:** When migrating `<img>` to `<Image />` for SVGs, extract dimensions from `viewBox` or file metadata to pass as props.
