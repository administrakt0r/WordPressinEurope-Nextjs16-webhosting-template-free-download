
import { describe, it, expect } from 'vitest';
import nextConfig from '@/next.config';
import { safeJsonLd } from '@/lib/security';

describe('Security Enhancements', () => {
  it('should disable poweredByHeader', () => {
    expect(nextConfig.poweredByHeader).toBe(false);
  });

  it('should escape HTML entities in JSON-LD', () => {
    const malicious = {
      name: '<script>alert(1)</script>',
      description: 'Something & something else'
    };
    const serialized = safeJsonLd(malicious);
    // JSON.stringify doubles backslashes, so we need to match that
    expect(serialized).toContain('\\u003cscript\\u003e');
    expect(serialized).toContain('\\u0026');
    expect(serialized).not.toContain('<script>');
  });
});
