import { useEffect, type RefObject } from "react";

/**
 * useFocusTrap
 *
 * Traps focus within the specified container when active.
 * Handles Tab and Shift+Tab navigation, and focuses the first element on mount.
 *
 * @param containerRef Reference to the container element
 * @param isActive Whether the focus trap is active
 * @param onClose Optional callback to close the trap (e.g. on Escape)
 */
export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  isActive: boolean,
  onClose?: () => void
) {
  useEffect(() => {
    if (!isActive) return;

    const container = containerRef.current;
    if (!container) return;

    // Helper to get focusable elements
    const getFocusableElements = () =>
      container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), details, [tabindex]:not([tabindex="-1"])'
      );

    // Focus the first element when opened
    // Small timeout ensures the DOM is ready and prevents conflict with the trigger click
    const timer = setTimeout(() => {
      const elements = getFocusableElements();
      if (elements.length > 0) {
        elements[0].focus();
      }
    }, 10);

    const handleKeyDown = (e: KeyboardEvent) => {
      // Close on Escape
      if (e.key === "Escape" && onClose) {
        onClose();
        return;
      }

      // Trap Tab
      if (e.key === "Tab") {
        const elements = getFocusableElements();
        if (elements.length === 0) return;

        const firstElement = elements[0];
        const lastElement = elements[elements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isActive, onClose, containerRef]);
}
