
import { describe, it, expect } from 'vitest';
import { isSafeUrl } from '@/lib/security';

describe('isSafeUrl', () => {
    it('should allow http and https URLs', () => {
        expect(isSafeUrl('https://example.com')).toBe(true);
        expect(isSafeUrl('http://example.com')).toBe(true);
    });

    it('should allow mailto and tel links', () => {
        expect(isSafeUrl('mailto:user@example.com')).toBe(true);
        expect(isSafeUrl('tel:+1234567890')).toBe(true);
    });

    it('should allow relative URLs', () => {
        expect(isSafeUrl('/about')).toBe(true);
        expect(isSafeUrl('/path/to/resource')).toBe(true);
        expect(isSafeUrl('about')).toBe(true); // Relative path
        expect(isSafeUrl('#section')).toBe(true);
        expect(isSafeUrl('?query=1')).toBe(true);
    });

    it('should block javascript: protocol', () => {
        expect(isSafeUrl('javascript:alert(1)')).toBe(false);
        expect(isSafeUrl('JAVASCRIPT:alert(1)')).toBe(false);
        expect(isSafeUrl('javascript:void(0)')).toBe(false);
    });

    it('should block data: protocol', () => {
        expect(isSafeUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
    });

    it('should block vbscript: protocol', () => {
        expect(isSafeUrl('vbscript:alert(1)')).toBe(false);
    });

    it('should handle weird capitalization', () => {
        expect(isSafeUrl('JaVaScRiPt:alert(1)')).toBe(false);
    });

    it('should handle whitespace', () => {
       // Browsers might ignore leading whitespace
       // But our regex should handle it or the startsWith checks
       // URL constructor usually trims.
       // " javascript:..." is dangerous.
       // Let's ensure our function handles it if possible.
       // URL constructor handles trimming.

       expect(isSafeUrl(' javascript:alert(1)')).toBe(false);
    });
});
