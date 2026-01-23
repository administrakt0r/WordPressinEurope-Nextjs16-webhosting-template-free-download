import { describe, it, expect } from 'vitest';
import { isSafeUrl } from '@/lib/security';

describe('isSafeUrl', () => {
  it('should return true for valid HTTP/HTTPS URLs', () => {
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
    expect(isSafeUrl('vbscript:msgbox')).toBe(false);
    expect(isSafeUrl('data:text/html,bad')).toBe(false);
  });

  it('should return false for malformed URLs with potential schemes', () => {
    expect(isSafeUrl('javascript:alert(1)')).toBe(false);
    expect(isSafeUrl('foo:bar')).toBe(false); // Unknown scheme
  });

  it('should handle edge cases', () => {
    expect(isSafeUrl('')).toBe(false);
    // @ts-expect-error Testing invalid input
    expect(isSafeUrl(null)).toBe(false);
    // @ts-expect-error Testing invalid input
    expect(isSafeUrl(undefined)).toBe(false);
  });
});
