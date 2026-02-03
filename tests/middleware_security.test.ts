import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ratelimit } from '@/lib/ratelimit';

describe('Middleware Security Enhancements', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should block malicious user agents with 403', () => {
    // Should not reach rate limit check if blocked early
    const rateLimitSpy = vi.spyOn(ratelimit, 'check');

    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: {
        'User-Agent': 'sqlmap/1.0',
      },
    });
    const response = middleware(request);

    expect(response.status).toBe(403);
    // If blocked, we shouldn't waste resources checking rate limit
    expect(rateLimitSpy).not.toHaveBeenCalled();
  });

  it('should allow normal user agents', () => {
    vi.spyOn(ratelimit, 'check').mockReturnValue(true);

    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });
    const response = middleware(request);

    expect(response.status).not.toBe(403);
    expect(response.status).toBe(200);
  });

  it('should prioritize request.ip over X-Forwarded-For header', () => {
    const rateLimitSpy = vi.spyOn(ratelimit, 'check').mockReturnValue(true);

    const request = new NextRequest(new URL('https://wpineu.com/'), {
        headers: {
            'X-Forwarded-For': '1.2.3.4, 5.6.7.8'
        }
    });

    // Simulate request.ip presence
    Object.defineProperty(request, 'ip', {
        get: () => '9.9.9.9',
        configurable: true
    });

    middleware(request);

    // Expect check to be called with '9.9.9.9' (the trusted IP) instead of '1.2.3.4' (the header)
    expect(rateLimitSpy).toHaveBeenCalledWith(100, '9.9.9.9');
  });

  it('should fallback to X-Forwarded-For if request.ip is missing', () => {
    const rateLimitSpy = vi.spyOn(ratelimit, 'check').mockReturnValue(true);

    const request = new NextRequest(new URL('https://wpineu.com/'), {
        headers: {
            'X-Forwarded-For': '1.2.3.4, 5.6.7.8'
        }
    });

    // Ensure ip is undefined
    Object.defineProperty(request, 'ip', {
        get: () => undefined,
        configurable: true
    });

    middleware(request);

    expect(rateLimitSpy).toHaveBeenCalledWith(100, '1.2.3.4');
  });
});
