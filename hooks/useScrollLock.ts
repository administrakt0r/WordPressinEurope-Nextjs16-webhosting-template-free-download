import { useEffect } from "react";

/**
 * Locks the body scroll when the lock condition is true.
 * @param lock - Boolean to determine if the scroll should be locked.
 */
export function useScrollLock(lock: boolean) {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lock]);
}
