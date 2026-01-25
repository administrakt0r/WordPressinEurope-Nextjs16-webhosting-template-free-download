import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { rateLimit } from '@/lib/ratelimit';

describe('rateLimit', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should allow requests within limit', () => {
    const ip = '1.2.3.4';
    const limit = 5;
    const window = 60000;

    for (let i = 0; i < limit; i++) {
      expect(rateLimit(ip, limit, window)).toBe(true);
    }
  });

  it('should block requests over limit', () => {
    const ip = '1.2.3.5';
    const limit = 2;
    const window = 60000;

    expect(rateLimit(ip, limit, window)).toBe(true);
    expect(rateLimit(ip, limit, window)).toBe(true);
    expect(rateLimit(ip, limit, window)).toBe(false);
  });

  it('should reset after window expires', () => {
    const ip = '1.2.3.6';
    const limit = 1;
    const window = 1000;

    expect(rateLimit(ip, limit, window)).toBe(true);
    expect(rateLimit(ip, limit, window)).toBe(false);

    vi.advanceTimersByTime(1001);

    expect(rateLimit(ip, limit, window)).toBe(true);
  });
});
