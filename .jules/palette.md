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

## 2025-05-18 - [Nested Dark Theme Focus Rings]
**Learning:** Semantic tokens like `ring-offset-background` often resolve to the global body color (e.g., `slate-900`), which fails to create a visible "gap" when used on components with darker backgrounds (e.g., `slate-950`). This makes the focus ring look like a double border instead of a separated ring.
**Action:** When working with nested dark sections, explicitly match the `ring-offset-{color}` utility to the section's background color (e.g., `ring-offset-slate-950`) instead of relying on the global semantic variable.

## 2025-05-23 - [Star Rating Accessibility Patterns]
**Learning:** Visual star ratings implemented as a sequence of icons are often treated by screen readers as individual images ("Star, Star, Star..."). This fails to convey the *aggregate* value (e.g., "Rated 5 out of 5 stars").
**Action:** Wrap star rating collections in a container with `role="img"` and a descriptive `aria-label` summarizing the score, while hiding individual star icons from assistive technology.

## 2025-05-24 - [Semantic Lists for Feature Grids]
**Learning:** Rendering lists of features (e.g., in pricing cards) as a series of `div`s prevents screen readers from announcing them as a list (e.g., "List of 8 items"). This forces users to navigate item by item without knowing the scope.
**Action:** Always use `<ul>` and `<li>` for feature lists, even if the visual design doesn't look like a traditional bulleted list.

## 2025-05-24 - [Component Coupling in Semantic Lists]
**Learning:** Modifying a reusable component (like `FeatureCard`) to return an `<li>` couples it tightly to list contexts, making it invalid HTML if used elsewhere.
**Action:** Keep reusable display components as `<div>`s and wrap them in `<li>` elements within the parent list loop. Move list-specific animations and positioning styles to the wrapper `<li>`.

## 2025-05-24 - [Decorative Layout Elements]
**Learning:** Large floating UI elements used for background decoration (like code snippets or abstract shapes) can be picked up by screen readers as fragmented content if not explicitly hidden, causing confusion.
**Action:** Apply `aria-hidden="true"` to entire container `div`s that serve only as visual decoration, ensuring assistive technology ignores the complex but meaningless structure within.
