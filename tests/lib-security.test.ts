import { describe, it, expect } from 'vitest';
import { isSafeUrl, safeJsonLd, BLOCKED_UA_REGEX } from '@/lib/security';

describe('Security Utilities', () => {
  describe('isSafeUrl', () => {
    it('should return false for extremely long URLs (DoS prevention)', () => {
      const longUrl = 'https://example.com/' + 'a'.repeat(5000);
      expect(isSafeUrl(longUrl)).toBe(false);
    });

    it('should handle normal URLs correctly', () => {
      expect(isSafeUrl('https://google.com')).toBe(true);
      expect(isSafeUrl('javascript:alert(1)')).toBe(false);
    });
  });

  describe('safeJsonLd', () => {
    it('should handle circular references gracefully', () => {
      const circular: Record<string, unknown> = { a: 1 };
      circular.self = circular;

      // Should handle error and return empty object string
      const result = safeJsonLd(circular);
      expect(result).toBe('{}');
    });

    it('should escape HTML entities', () => {
      const data = { x: '<script>alert(1)</script>' };
      const result = safeJsonLd(data);
      expect(result).not.toContain('<script');
      expect(result).toContain('\\u003cscript');
    });
  });

  describe('BLOCKED_UA_REGEX', () => {
    it('should match known attack tools', () => {
      expect(BLOCKED_UA_REGEX.test('sqlmap/1.0')).toBe(true);
      expect(BLOCKED_UA_REGEX.test('Mozilla/5.0 (compatible; Burp Suite)')).toBe(true);
      expect(BLOCKED_UA_REGEX.test('Metasploit')).toBe(true);
    });

    it('should not match normal browsers', () => {
      expect(BLOCKED_UA_REGEX.test('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36')).toBe(false);
    });
  });
});
