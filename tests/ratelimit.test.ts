
import { describe, it, expect } from 'vitest';
import { RateLimiter } from '@/lib/ratelimit';

describe('RateLimiter', () => {
  it('should allow requests within limit', () => {
    const limiter = new RateLimiter({ interval: 1000, uniqueTokenPerInterval: 10 });
    expect(limiter.check(2, 'ip1')).toBe(true);
    expect(limiter.check(2, 'ip1')).toBe(true);
  });

  it('should block requests exceeding limit', () => {
    const limiter = new RateLimiter({ interval: 1000, uniqueTokenPerInterval: 10 });
    expect(limiter.check(2, 'ip2')).toBe(true);
    expect(limiter.check(2, 'ip2')).toBe(true);
    expect(limiter.check(2, 'ip2')).toBe(false);
  });

  it('should reset after interval', async () => {
    const limiter = new RateLimiter({ interval: 100, uniqueTokenPerInterval: 10 });
    expect(limiter.check(1, 'ip3')).toBe(true);
    expect(limiter.check(1, 'ip3')).toBe(false);

    // Wait for interval
    await new Promise((resolve) => setTimeout(resolve, 150));

    expect(limiter.check(1, 'ip3')).toBe(true);
  });

  it('should clean up old tokens when uniqueTokenPerInterval is exceeded', () => {
    // Config: Max 2 unique tokens.
    const limiter = new RateLimiter({ interval: 10000, uniqueTokenPerInterval: 2 });

    limiter.check(1, 'A'); // stored: [A]
    limiter.check(1, 'B'); // stored: [A, B]

    expect(limiter.check(1, 'A')).toBe(false); // A is already used/blocked (limit 1)

    limiter.check(1, 'C'); // stored: [A, B, C] -> Cleanup triggers -> stored: [B, C]

    // A should be forgotten, so treated as new
    expect(limiter.check(1, 'A')).toBe(true);
  });
});
