import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RateLimiter } from '@/lib/ratelimit';

describe('RateLimiter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('should allow requests within limit', () => {
    const limiter = new RateLimiter(5, 1000);
    for (let i = 0; i < 5; i++) {
      expect(limiter.check('ip1')).toBe(true);
    }
  });

  it('should block requests over limit', () => {
    const limiter = new RateLimiter(2, 1000);
    expect(limiter.check('ip1')).toBe(true);
    expect(limiter.check('ip1')).toBe(true);
    expect(limiter.check('ip1')).toBe(false);
  });

  it('should refill tokens over time', () => {
    const limiter = new RateLimiter(2, 1000); // 2 requests per 1000ms
    expect(limiter.check('ip1')).toBe(true);
    expect(limiter.check('ip1')).toBe(true);
    expect(limiter.check('ip1')).toBe(false);

    // Advance time by 500ms (refill 1 token)
    vi.advanceTimersByTime(500);
    expect(limiter.check('ip1')).toBe(true);
    expect(limiter.check('ip1')).toBe(false);
  });

  it('should handle multiple IPs independently', () => {
    const limiter = new RateLimiter(1, 1000);
    expect(limiter.check('ip1')).toBe(true);
    expect(limiter.check('ip1')).toBe(false);
    expect(limiter.check('ip2')).toBe(true);
  });
});
