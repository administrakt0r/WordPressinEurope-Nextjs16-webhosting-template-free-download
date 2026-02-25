import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { ratelimit } from '@/lib/ratelimit';

describe('Middleware Error Response Headers', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should include Cache-Control and Vary headers on 403 Forbidden (UA block)', () => {
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: { 'user-agent': 'sqlmap' },
    });

    const response = middleware(request);
    expect(response.status).toBe(403);

    expect(response.headers.get('Cache-Control')).toBe('no-store, no-cache, must-revalidate, proxy-revalidate');
    expect(response.headers.get('Pragma')).toBe('no-cache');
    expect(response.headers.get('Expires')).toBe('0');
    expect(response.headers.get('Vary')).toContain('User-Agent');
  });

  it('should include Cache-Control and Vary headers on 429 Too Many Requests', () => {
    vi.spyOn(ratelimit, 'check').mockReturnValue(false);

    const request = new NextRequest(new URL('https://wpineu.com/'));
    const response = middleware(request);

    expect(response.status).toBe(429);

    expect(response.headers.get('Cache-Control')).toBe('no-store, no-cache, must-revalidate, proxy-revalidate');
    expect(response.headers.get('Pragma')).toBe('no-cache');
    expect(response.headers.get('Expires')).toBe('0');
    expect(response.headers.get('Vary')).toContain('User-Agent');
  });

  it('should block sensitive paths', () => {
    const sensitivePaths = ['/.env', '/wp-config.php', '/.git/HEAD', '/.htaccess'];

    sensitivePaths.forEach(path => {
        const request = new NextRequest(new URL(`https://wpineu.com${path}`));
        const response = middleware(request);
        // This fails currently (returns 200 or falls through to app which returns 404, but middleware returns next())
        // If middleware returns next(), response.status is not available to check here easily as we mock next() usually?
        // Actually middleware() returns the response object.
        // If it falls through, it returns NextResponse.next().
        // We can check if it returns a redirect or rewrite or next().
        // But for blocking, we want it to return 403 or 404 directly.

        // Currently it returns NextResponse.next()
        expect(response.status).toBe(403);
    });
  });
});
