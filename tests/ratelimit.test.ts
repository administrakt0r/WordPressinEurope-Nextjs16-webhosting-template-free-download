import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { rateLimit } from '@/lib/ratelimit';

describe('Rate Limit', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should allow requests within the limit', () => {
    const ip = '1.1.1.1';
    const config = { limit: 10, windowMs: 60000 };

    for (let i = 0; i < 10; i++) {
      expect(rateLimit(ip, config)).toBe(true);
    }
  });

  it('should block requests exceeding the limit', () => {
    const ip = '2.2.2.2';
    const config = { limit: 5, windowMs: 60000 };

    for (let i = 0; i < 5; i++) {
      rateLimit(ip, config);
    }

    // Next request should fail
    expect(rateLimit(ip, config)).toBe(false);
  });

  it('should fail open if no IP is provided', () => {
    expect(rateLimit('')).toBe(true);
  });

  it('should reset limit after window expires', () => {
    const ip = '3.3.3.3';
    const config = { limit: 2, windowMs: 1000 };

    // Consume limit
    rateLimit(ip, config);
    rateLimit(ip, config);
    expect(rateLimit(ip, config)).toBe(false);

    // Fast forward time
    vi.advanceTimersByTime(1100);

    // Should be allowed again (counter reset)
    expect(rateLimit(ip, config)).toBe(true);
  });

  it('should handle multiple IPs independently', () => {
    const ip1 = '5.5.5.5';
    const ip2 = '6.6.6.6';
    const config = { limit: 1, windowMs: 1000 };

    expect(rateLimit(ip1, config)).toBe(true);
    expect(rateLimit(ip1, config)).toBe(false);

    // IP2 should still be allowed
    expect(rateLimit(ip2, config)).toBe(true);
  });
});
