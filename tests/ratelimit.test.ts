
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

  it('should follow LRU eviction policy', () => {
    const limiter = new RateLimiter({ interval: 100000, uniqueTokenPerInterval: 2 });

    // Fill capacity
    limiter.check(1, 'A'); // Usage: 1/1. Keys: [A]
    limiter.check(1, 'B'); // Usage: 1/1. Keys: [A, B]

    // Access A again. This should move it to the end (most recently used).
    // A is blocked (1/1), but we accessed it.
    limiter.check(1, 'A');
    // Keys should be: [B, A]

    // Add new token C. Should evict the least recently used (B).
    limiter.check(1, 'C');
    // Keys should be: [A, C]

    // Verify A should remain (remembered), so it is still blocked.
    // NOTE: We check A first to avoid evicting A by inserting B!
    expect(limiter.check(1, 'A')).toBe(false);

    // Verify B should be evicted (forgotten), so it starts fresh.
    expect(limiter.check(1, 'B')).toBe(true);
  });
});
