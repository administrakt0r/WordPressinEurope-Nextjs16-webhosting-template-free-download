import { useEffect, useRef } from 'react';

export function useFocusTrap(isActive: boolean) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const element = ref.current;
    if (!element) return;

    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

    // Save previously focused element to restore later
    const previousActiveElement = document.activeElement as HTMLElement;

    // Focus the first element immediately
    const focusableElements = Array.from(
      element.querySelectorAll(focusableElementsString)
    ) as HTMLElement[];
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const currentFocusableElements = Array.from(
          element.querySelectorAll(focusableElementsString)
        ) as HTMLElement[];
        const firstElement = currentFocusableElements[0];
        const lastElement = currentFocusableElements[currentFocusableElements.length - 1];

        if (e.shiftKey) {
          // If shift + tab and on first element, move to last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // If tab and on last element, move to first
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
      // Restore focus
      if (previousActiveElement && previousActiveElement.focus) {
        previousActiveElement.focus();
      }
    };
  }, [isActive]);

  return ref;
}
