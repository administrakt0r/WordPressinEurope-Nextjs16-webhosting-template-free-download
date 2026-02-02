import { useEffect } from 'react';

/**
 * A hook that prevents the body from scrolling when the condition is true.
 * @param isLocked - Boolean to toggle scroll locking.
 */
export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLocked]);
}
