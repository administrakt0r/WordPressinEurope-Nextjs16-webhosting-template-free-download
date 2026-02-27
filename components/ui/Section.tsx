import { type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { getOffscreenOptimizations } from "@/lib/styles";

interface SectionProps {
    id: string;
    headingId?: string;
    children: ReactNode;
    className?: string;
    /**
     * Estimated height of the section for content-visibility optimization.
     * Defaults to "800px".
     */
    estimatedHeight?: string;
    /**
     * Additional styles to merge with offscreen optimizations.
     */
    style?: CSSProperties;
    /**
     * Accessibility label if no visible heading is available to link via aria-labelledby.
     */
    ariaLabel?: string;
}

/**
 * A standardized Section component that enforces performance and accessibility best practices.
 * Automatically applies `content-visibility: auto` and `contain-intrinsic-size` via `getOffscreenOptimizations`.
 */
export function Section({
    id,
    headingId,
    children,
    className,
    estimatedHeight = "800px",
    style,
    ariaLabel,
}: SectionProps) {
    const optimizations = getOffscreenOptimizations(estimatedHeight);

    return (
        <section
            id={id}
            aria-labelledby={headingId}
            aria-label={ariaLabel}
            className={cn("py-20", className)}
            style={{ ...optimizations, ...style }}
        >
            {children}
        </section>
    );
}
