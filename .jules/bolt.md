## 2026-01-04 - Next.js Build Failure on revalidate export
**Learning:** `export const revalidate` in `robots.ts` and `sitemap.ts` caused "Invalid segment configuration export detected" in this Next.js 16 environment.
**Action:** When encountering this error, check for route segment config exports in special file conventions like robots/sitemap and remove/comment them if invalid.
