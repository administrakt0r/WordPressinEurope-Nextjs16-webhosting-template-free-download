## 2026-01-04 - Next.js Build Failure on revalidate export
**Learning:** `export const revalidate` in `robots.ts` and `sitemap.ts` caused "Invalid segment configuration export detected" in this Next.js 16 environment.
**Action:** When encountering this error, check for route segment config exports in special file conventions like robots/sitemap and remove/comment them if invalid.

## 2026-02-23 - SVG Image Optimization
**Learning:** `next/image` requires `width` and `height` for all images, even SVGs. Using `viewBox` dimensions or reasonable defaults helps maintain aspect ratio while CSS controls display size.
**Action:** When migrating `<img>` to `<Image />` for SVGs, extract dimensions from `viewBox` or file metadata to pass as props.

## 2026-02-23 - Heavy CSS Effects Performance
**Learning:** Large blurred elements (`blur-[120px]`) and SVG noise filters can cause significant repaint costs on scroll. Promoting them to their own compositing layer using `translateZ(0)` (or `.gpu-accelerated`) is a simple but effective fix.
**Action:** Always apply GPU acceleration hints to fixed or absolute positioned background elements that use heavy CSS filters.

## 2026-05-23 - Content Visibility Layout Stability
**Learning:** Using `containIntrinsicSize: "1px 800px"` for `content-visibility: auto` sections caused potential layout shifts because the browser reserves only 1px width.
**Action:** Use `containIntrinsicSize: "auto 800px"` (or just "auto") to allow the browser to use the element's natural width or last rendered size, preserving layout stability while still getting rendering performance benefits.

## 2026-06-15 - CSS Blur vs Radial Gradients
**Learning:** Large CSS filters like `blur-[120px]` on large areas are expensive for the compositor. Replacing them with `radial-gradient` achieves a similar visual result with significantly lower paint cost.
**Action:** Prefer `radial-gradient` with alpha transitions over solid colors + heavy `blur()` for background glow effects.

## 2026-06-15 - Unused Icon Bundling in Shared Components
**Learning:** Passing icon names as strings and mapping them in a shared component (`ServiceDescription`) forces bundling of all possible icons, defeating tree-shaking.
**Action:** Pass icon components (React elements) directly as props. This allows the consumer to import only what is needed, enabling effective tree-shaking.
