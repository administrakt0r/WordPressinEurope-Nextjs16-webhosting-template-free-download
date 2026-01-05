# Palette's Journal

## 2024-05-22 - [Initial Setup]
**Learning:** Palette journal initialized.
**Action:** Log critical UX learnings here.

## 2026-01-05 - [Broken CTAs in Production Code]
**Learning:** The primary "Get Started" call-to-action on the landing page was a placeholder (`#`), not a real link. This suggests that critical conversion paths might be mocked up but not connected during development.
**Action:** Always verify `href` attributes on primary buttons/links, especially in "Pricing" or "Hero" sections, as they often get left as placeholders.
