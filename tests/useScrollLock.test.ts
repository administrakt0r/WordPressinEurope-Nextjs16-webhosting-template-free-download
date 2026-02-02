import { renderHook } from '@testing-library/react';
import { useScrollLock } from '@/hooks/useScrollLock';
import { describe, it, expect, beforeEach } from 'vitest';

describe('useScrollLock', () => {
    beforeEach(() => {
        // Reset body style
        document.body.style.overflow = 'unset';
    });

    it('should lock scroll when isLocked is true', () => {
        renderHook(() => useScrollLock(true));
        expect(document.body.style.overflow).toBe('hidden');
    });

    it('should unlock scroll when isLocked is false', () => {
        renderHook(() => useScrollLock(false));
        expect(document.body.style.overflow).toBe('unset');
    });

    it('should unlock scroll on unmount', () => {
        const { unmount } = renderHook(() => useScrollLock(true));
        expect(document.body.style.overflow).toBe('hidden');
        unmount();
        expect(document.body.style.overflow).toBe('unset');
    });
});
