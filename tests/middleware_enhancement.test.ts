import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ratelimit } from '@/lib/ratelimit';

describe('Middleware Security Enhancements', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should block malicious User-Agents with 403 Forbidden', () => {
    // Mock rate limit to pass (shouldn't be reached if blocked early, but just in case)
    vi.spyOn(ratelimit, 'check').mockReturnValue(true);

    const maliciousUAs = ['sqlmap', 'nikto', 'nuclei', 'wpscan'];

    maliciousUAs.forEach((ua) => {
      const request = new NextRequest(new URL('https://wpineu.com/'), {
        headers: {
          'User-Agent': ua,
        },
      });
      const response = middleware(request);
      expect(response.status).toBe(403);
      expect(response.headers.get('Content-Type')).toBe('text/plain');
    });
  });

  it('should allow normal User-Agents', () => {
    vi.spyOn(ratelimit, 'check').mockReturnValue(true);

    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });
    const response = middleware(request);
    expect(response.status).not.toBe(403);
  });

  it('should skip rate limiting for static assets', () => {
    const rateLimitSpy = vi.spyOn(ratelimit, 'check').mockReturnValue(true);

    const staticAssets = [
      '/logo.svg',
      '/image.png',
      '/style.css',
      '/script.js',
      '/font.woff2',
    ];

    staticAssets.forEach((path) => {
      const request = new NextRequest(new URL(`https://wpineu.com${path}`));
      middleware(request);
    });

    expect(rateLimitSpy).not.toHaveBeenCalled();
  });

  it('should enforce rate limiting for non-static assets', () => {
    const rateLimitSpy = vi.spyOn(ratelimit, 'check').mockReturnValue(true);

    const request = new NextRequest(new URL('https://wpineu.com/about'));
    middleware(request);

    expect(rateLimitSpy).toHaveBeenCalled();
  });
});
