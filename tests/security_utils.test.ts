import { describe, it, expect } from 'vitest';
import { isSafeUrl, safeJsonLd } from '../lib/security';

describe('lib/security', () => {
  describe('isSafeUrl', () => {
    it('should return true for valid http/https URLs', () => {
      expect(isSafeUrl('https://example.com')).toBe(true);
      expect(isSafeUrl('http://example.com')).toBe(true);
    });

    it('should return true for valid mailto URLs', () => {
      expect(isSafeUrl('mailto:test@example.com')).toBe(true);
    });

    it('should return false for javascript: URLs', () => {
      expect(isSafeUrl('javascript:alert(1)')).toBe(false);
      expect(isSafeUrl('javascript:void(0)')).toBe(false);
    });

    it('should return false for vbscript: URLs', () => {
      expect(isSafeUrl('vbscript:msgbox "hello"')).toBe(false);
    });

    it('should return false for data: URLs', () => {
      expect(isSafeUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
    });

    it('should handle whitespace', () => {
      expect(isSafeUrl('  javascript:alert(1)  ')).toBe(false);
      expect(isSafeUrl('  https://example.com  ')).toBe(true);
    });

    it('should return false for empty URLs', () => {
        expect(isSafeUrl('')).toBe(false);
    });
  });

  describe('safeJsonLd', () => {
    it('should escape HTML characters', () => {
      const input = {
        name: '<script>alert("XSS")</script>',
        description: 'Benign content'
      };
      const output = safeJsonLd(input);
      expect(output).not.toContain('<script>');
      expect(output).toContain('\\u003cscript\\u003e');
    });

    it('should serialize valid JSON correctly', () => {
      const input = { key: 'value', num: 123 };
      const output = safeJsonLd(input);
      expect(JSON.parse(output)).toEqual(input);
    });
  });
});
