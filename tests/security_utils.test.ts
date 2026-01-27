import { describe, it, expect } from 'vitest';
import { safeJsonLd, isSafeUrl } from '@/lib/security';

describe('safeJsonLd', () => {
    it('should serialize a simple object', () => {
        const data = { name: 'Test' };
        expect(safeJsonLd(data)).toBe('{"name":"Test"}');
    });

    it('should escape HTML entities', () => {
        const data = {
            evil: '<script>alert(1)</script>',
            amp: 'Fish & Chips',
            quote: "O'Reilly"
        };
        const result = safeJsonLd(data);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result).not.toContain('&');

        expect(result).toContain('\\u003c'); // <
        expect(result).toContain('\\u003e'); // >
        expect(result).toContain('\\u0026'); // &
        expect(result).toContain('\\u0027'); // '
    });
});

describe('isSafeUrl', () => {
    it('should allow safe protocols', () => {
        expect(isSafeUrl('https://example.com')).toBe(true);
        expect(isSafeUrl('http://example.com')).toBe(true);
        expect(isSafeUrl('mailto:user@example.com')).toBe(true);
        expect(isSafeUrl('tel:+1234567890')).toBe(true);
    });

    it('should allow relative URLs', () => {
        expect(isSafeUrl('/path/to/page')).toBe(true);
        expect(isSafeUrl('#section')).toBe(true);
        expect(isSafeUrl('relative/page')).toBe(true);
    });

    it('should block dangerous protocols', () => {
        expect(isSafeUrl('javascript:alert(1)')).toBe(false);
        expect(isSafeUrl('vbscript:alert(1)')).toBe(false);
        expect(isSafeUrl('data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==')).toBe(false);
    });

    it('should handle malformed URLs', () => {
        // If it parses as relative but has a colon, it's suspicious if it's not a known protocol
        expect(isSafeUrl('unknown:scheme')).toBe(false);
        expect(isSafeUrl('')).toBe(false);
    });
});
