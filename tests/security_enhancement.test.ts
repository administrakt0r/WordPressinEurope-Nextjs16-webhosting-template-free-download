
import { describe, it, expect } from 'vitest';
import nextConfig from '@/next.config';

describe('Security Enhancements', () => {
  it('should disable poweredByHeader', () => {
    expect(nextConfig.poweredByHeader).toBe(false);
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
