
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

  it('should escape line separators and single quotes in JSON-LD', () => {
    const malicious = {
      note: "It's a trap!",
      bad: "Line\u2028Separator"
    };
    const serialized = safeJsonLd(malicious);
    expect(serialized).toContain('\\u0027'); // Single quote
    expect(serialized).toContain('\\u2028'); // Line separator
    expect(serialized).not.toContain("It's");
  });

  it('should have a valid security.txt file', async () => {
    // We can't easily read public files in unit tests if they aren't imported,
    // but we can check if the file exists using fs (in node env)
    const fs = await import('fs');
    const path = await import('path');

    const securityTxtPath = path.join(process.cwd(), 'public/.well-known/security.txt');
    expect(fs.existsSync(securityTxtPath)).toBe(true);

    const content = fs.readFileSync(securityTxtPath, 'utf-8');
    expect(content).toContain('Contact: mailto:');
    expect(content).toContain('Expires:');
  });
});
