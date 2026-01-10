# Palette's Journal

## 2024-05-22 - [Initial Setup]
**Learning:** Palette journal initialized.
**Action:** Log critical UX learnings here.

## 2026-01-05 - [Broken CTAs in Production Code]
**Learning:** The primary "Get Started" call-to-action on the landing page was a placeholder (`#`), not a real link. This suggests that critical conversion paths might be mocked up but not connected during development.
**Action:** Always verify `href` attributes on primary buttons/links, especially in "Pricing" or "Hero" sections, as they often get left as placeholders.

## 2026-01-05 - [Decorative Icons & Screen Reader Noise]
**Learning:** The design makes heavy use of Lucide icons for visual polish (stars, feature icons, button arrows). Without `aria-hidden="true"`, screen readers announce each icon filename or name (e.g., "Star Star Star Star Star"), creating significant auditory clutter.
**Action:** Always add `aria-hidden="true"` to icons that are purely decorative or where the meaning is already conveyed by adjacent text.

## 2026-02-09 - [Icon-Replaced Text Patterns]
**Learning:** Using an icon (like a Heart) to replace a word in a sentence (e.g., "Made with [Heart] in...") creates a semantic gap for screen readers, who hear "Made with in...".
**Action:** When an icon replaces a word, always include the word in a `.sr-only` span and hide the icon with `aria-hidden="true"`, rather than relying on the icon's visual meaning.

## 2026-02-18 - [Semantic Focus Ring Offsets]
**Learning:** Hardcoding focus ring offsets (e.g., `ring-offset-slate-900`) creates visual artifacts when the background changes (e.g., light mode or transparent headers). The design system's theme capabilities are underutilized here.
**Action:** Use semantic tokens like `focus-visible:ring-offset-background` instead of fixed colors to ensure focus indicators remain visible and aesthetically consistent across different themes and background contexts.
