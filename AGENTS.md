# AGENTS.md

## Project Overview
This is a high-performance, secure Next.js 16 application for WPinEU.com.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 (Zero Config)
- **Icons:** Lucide React
- **Animation:** Framer Motion (LazyMotion)
- **Testing:** Vitest
- **Package Manager:** pnpm

## Coding Conventions

### Components
- Use Functional Components.
- Use `React.memo` for list items or expensive render components.
- Use `export function ComponentName` (named exports).
- Place components in `components/` categorized by type (`layout`, `sections`, `ui`, `templates`).

### TypeScript
- Avoid `any`. Use proper interfaces/types.
- Use `interface` for props definitions.
- Use `as const` for fixed data arrays/objects.

### Styling
- Use Tailwind utility classes.
- Use `cn()` utility for class merging.
- Use CSS variables for colors (e.g., `bg-background`, `text-foreground`) to support themes.

### Performance
- Use `next/image` for all images.
- Use `next/dynamic` for below-the-fold heavy components.
- Use `getOffscreenOptimizations` for long sections.

### Security
- Use `isSafeUrl` for any user-provided or external link.
- Obfuscate emails using `ObfuscatedMailto`.
- Do not commit secrets.

## Testing
- Run tests with `pnpm test`.
- Write unit tests for all utility functions in `lib/`.

## Workflow
1. Check `.jules/atlas-progress.md`.
2. Scan for improvements.
3. Implement small, focused changes.
4. Verify with build and test.
5. Update progress.
