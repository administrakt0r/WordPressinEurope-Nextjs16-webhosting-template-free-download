
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

  it('should extend block if spam continues', async () => {
    // 10 requests allowed per 100ms
    const limiter = new RateLimiter({ interval: 100, uniqueTokenPerInterval: 10 });

    // Fill the bucket (1 request allowed)
    // We use limit=1 for this test case
    expect(limiter.check(1, 'ip4')).toBe(true);
    // Next request is blocked
    expect(limiter.check(1, 'ip4')).toBe(false);

    // Wait 50ms. Window [0, 100]. Current time 50.
    // Original request at 0 expires at 100.
    await new Promise((resolve) => setTimeout(resolve, 50));

    // Spam again while blocked at T=50.
    // This should update the timestamp to 50, extending the block until 150.
    expect(limiter.check(1, 'ip4')).toBe(false);

    // Wait another 60ms. Total time 110ms.
    // Original request (at 0) would have expired at 100.
    // BUT since we spammed at 50, the timestamp is now 50.
    // Expiration is 150. So at 110, we should still be blocked.
    await new Promise((resolve) => setTimeout(resolve, 60));

    // Should be false (blocked)
    // NOTE: This call at 110 updates the timestamp to 110, extending the block until 210.
    expect(limiter.check(1, 'ip4')).toBe(false);

    // Stop spamming. Wait for the last block (at 110) to expire.
    // It expires at 210.
    // We are at 110. Need to wait > 100ms. Let's wait 110ms to be safe.
    await new Promise((resolve) => setTimeout(resolve, 110));

    // Now at 220. Should be unblocked.
    expect(limiter.check(1, 'ip4')).toBe(true);
  });
});
