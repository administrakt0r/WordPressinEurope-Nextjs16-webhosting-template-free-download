import { describe, it, expect } from 'vitest';
import { RateLimiter } from '@/lib/ratelimit';

describe('RateLimiter', () => {
  it('should allow requests under the limit', () => {
    const limiter = new RateLimiter({ uniqueTokenPerInterval: 10, interval: 1000 });
    expect(limiter.check(2, 'ip1')).toBe(true);
    expect(limiter.check(2, 'ip1')).toBe(true);
  });

  it('should block requests over the limit', () => {
    const limiter = new RateLimiter({ uniqueTokenPerInterval: 10, interval: 1000 });
    expect(limiter.check(1, 'ip2')).toBe(true);
    expect(limiter.check(1, 'ip2')).toBe(false);
  });

  it('should reset after interval', async () => {
    const limiter = new RateLimiter({ uniqueTokenPerInterval: 10, interval: 100 });
    expect(limiter.check(1, 'ip3')).toBe(true);
    expect(limiter.check(1, 'ip3')).toBe(false);

    // Wait for interval
    await new Promise(resolve => setTimeout(resolve, 150));

    expect(limiter.check(1, 'ip3')).toBe(true);
  });
});
