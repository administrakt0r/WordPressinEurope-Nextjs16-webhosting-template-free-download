import { describe, it, expect } from 'vitest';
import { isSafeUrl, safeJsonLd, generateCSP, BLOCKED_USER_AGENTS } from '../lib/security';

describe('lib/security', () => {
  describe('isSafeUrl', () => {
    it('should return true for valid http/https URLs', () => {
      expect(isSafeUrl('https://example.com')).toBe(true);
      expect(isSafeUrl('http://example.com')).toBe(true);
      expect(isSafeUrl('https://sub.example.com/path?query=1')).toBe(true);
    });

    it('should return true for mailto and tel links', () => {
      expect(isSafeUrl('mailto:test@example.com')).toBe(true);
      expect(isSafeUrl('tel:+1234567890')).toBe(true);
    });

    it('should return true for relative URLs', () => {
      expect(isSafeUrl('/')).toBe(true);
      expect(isSafeUrl('/about')).toBe(true);
      expect(isSafeUrl('#main-content')).toBe(true);
      expect(isSafeUrl('page.html')).toBe(true);
    });

    it('should return false for dangerous schemes', () => {
      expect(isSafeUrl('javascript:alert(1)')).toBe(false);
      expect(isSafeUrl('javascript:void(0)')).toBe(false);
      expect(isSafeUrl('vbscript:msgbox "hello"')).toBe(false);
      expect(isSafeUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
    });

    it('should return false for malformed URLs with potential schemes', () => {
      expect(isSafeUrl('foo:bar')).toBe(false); // Unknown scheme
    });

    it('should handle whitespace', () => {
      expect(isSafeUrl('  javascript:alert(1)  ')).toBe(false);
      expect(isSafeUrl('  https://example.com  ')).toBe(true);
    });

    it('should return false for empty or invalid inputs', () => {
        expect(isSafeUrl('')).toBe(false);
        // @ts-expect-error Testing invalid input
        expect(isSafeUrl(null)).toBe(false);
        // @ts-expect-error Testing invalid input
        expect(isSafeUrl(undefined)).toBe(false);
    });

    it('should return false for protocol-relative URLs', () => {
      expect(isSafeUrl('//evil.com')).toBe(false);
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

    it('should escape HTML entities like &', () => {
      const malicious = {
        description: 'Something & something else'
      };
      const serialized = safeJsonLd(malicious);
      expect(serialized).toContain('\\u0026');
    });

    it('should escape line separators and single quotes', () => {
      const malicious = {
        note: "It's a trap!",
        bad: "Line\u2028Separator"
      };
      const serialized = safeJsonLd(malicious);
      expect(serialized).toContain('\\u0027'); // Single quote
      expect(serialized).toContain('\\u2028'); // Line separator
      expect(serialized).not.toContain("It's");
    });
  });

  describe('generateCSP', () => {
    it('should generate CSP with the provided nonce', () => {
      const nonce = 'test-nonce-123';
      const csp = generateCSP(nonce);
      expect(csp).toContain(`'nonce-${nonce}'`);
    });

    it('should contain default-src self', () => {
      const csp = generateCSP('nonce');
      expect(csp).toContain("default-src 'self'");
    });

    it('should not contain duplicate spaces', () => {
      const csp = generateCSP('nonce');
      expect(csp).not.toMatch(/\s{2,}/);
    });
  });

  describe('BLOCKED_USER_AGENTS', () => {
    it('should be an array of strings', () => {
      expect(Array.isArray(BLOCKED_USER_AGENTS)).toBe(true);
      expect(BLOCKED_USER_AGENTS.every(ua => typeof ua === 'string')).toBe(true);
    });

    it('should contain known malicious bots', () => {
      expect(BLOCKED_USER_AGENTS).toContain('sqlmap');
      expect(BLOCKED_USER_AGENTS).toContain('wpscan');
    });
  });
});
