import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { describe, it, expect } from 'vitest';

describe('Middleware User-Agent Blocking', () => {
  it('should block malicious user agents', () => {
    const maliciousAgents = ['sqlmap', 'nikto', 'nuclei', 'wpscan'];

    maliciousAgents.forEach((agent) => {
      const request = new NextRequest(new URL('https://wpineu.com/'), {
        headers: { 'user-agent': agent },
      });
      const response = middleware(request);
      expect(response.status).toBe(403);
    });
  });

  it('should allow normal user agents', () => {
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: { 'user-agent': 'Mozilla/5.0' },
    });
    const response = middleware(request);
    expect(response.status).not.toBe(403);
  });
});
