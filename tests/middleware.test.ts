import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ratelimit } from '@/lib/ratelimit';

describe('Middleware Security Headers', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should set security headers', () => {
    // Ensure rate limit passes for this test
    vi.spyOn(ratelimit, 'check').mockReturnValue(true);

    const request = new NextRequest(new URL('https://wpineu.com/'));
    const response = middleware(request);

    const headers = response.headers;

    // Existing header
    expect(headers.get('Content-Security-Policy')).toBeDefined();

    // New headers to be added
    expect(headers.get('X-Content-Type-Options')).toBe('nosniff');
    expect(headers.get('X-Frame-Options')).toBe('DENY');
    expect(headers.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
    expect(headers.get('Strict-Transport-Security')).toBe('max-age=63072000; includeSubDomains; preload');
    expect(headers.get('Permissions-Policy')).toContain('camera=()');
    expect(headers.get('X-Permitted-Cross-Domain-Policies')).toBe('none');
    expect(headers.get('Cross-Origin-Opener-Policy')).toBe('same-origin');
    expect(headers.get('Cross-Origin-Resource-Policy')).toBe('same-origin');
    expect(headers.get('X-DNS-Prefetch-Control')).toBe('on');
  });

  it('should return 429 when rate limit is exceeded', () => {
    vi.spyOn(ratelimit, 'check').mockReturnValue(false);

    const request = new NextRequest(new URL('https://wpineu.com/'));
    const response = middleware(request);

    expect(response.status).toBe(429);
    expect(response.headers.get('Retry-After')).toBe('60');
  });
});
