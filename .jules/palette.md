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
