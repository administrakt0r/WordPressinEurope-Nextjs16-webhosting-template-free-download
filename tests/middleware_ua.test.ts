import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ratelimit } from '@/lib/ratelimit';

describe('Middleware User-Agent Blocking', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(ratelimit, 'check').mockReturnValue(true);
  });

  it('should block malicious user agent (sqlmap)', () => {
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: {
        'user-agent': 'sqlmap/1.0',
      },
    });
    const response = middleware(request);

    expect(response.status).toBe(403);
  });

  it('should block malicious user agent (nikto)', () => {
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; nikto/2.1.0)',
      },
    });
    const response = middleware(request);

    expect(response.status).toBe(403);
  });

  it('should allow legitimate user agent', () => {
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      },
    });
    const response = middleware(request);

    // Should be 200 (or 429 if rate limit fails, but we assume rate limit passes by default or we should mock it)
    // Wait, middleware calls ratelimit.check. We should mock that to be sure.
    expect(response.status).not.toBe(403);
  });
});
