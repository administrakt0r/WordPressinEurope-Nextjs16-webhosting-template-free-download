import type { CSSProperties } from "react";

/**
 * Extended CSSProperties to support modern CSS features like content-visibility
 * which might not be fully typed in the current React definition.
 */
export interface PerformanceStyle extends CSSProperties {
  contentVisibility?: "visible" | "auto" | "hidden";
  containIntrinsicSize?: string;
}

/**
 * Helper to create performance-optimized styles for heavy sections.
 *
 * @param height - The estimated height of the section (e.g., "800px") to prevent scroll jumping.
 * @returns A style object with content-visibility and contain-intrinsic-size.
 */
export const getOffscreenOptimizations = (height: string): PerformanceStyle => ({
  contentVisibility: "auto",
  containIntrinsicSize: `1px ${height}`,
});
