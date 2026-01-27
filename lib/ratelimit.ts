/**
 * Basic in-memory rate limiter using Token Bucket algorithm.
 * Note: In a serverless environment (like Vercel), this state is local to the lambda instance.
 * It provides basic protection against rapid bursts but is not a distributed solution (use Redis for that).
 */
export class RateLimiter {
  private tokens: Map<string, { count: number; lastRefill: number }>;
  private limit: number;
  private interval: number;

  /**
   * @param limit Number of requests allowed per interval
   * @param interval Interval in milliseconds
   */
  constructor(limit: number = 100, interval: number = 60000) {
    this.tokens = new Map();
    this.limit = limit;
    this.interval = interval;
  }

  /**
   * Checks if a request is allowed for the given identifier (IP).
   * @param key Unique identifier (e.g., IP address)
   * @returns boolean True if allowed, false if limited
   */
  check(key: string): boolean {
    const now = Date.now();
    const record = this.tokens.get(key);

    if (!record) {
      this.tokens.set(key, { count: this.limit - 1, lastRefill: now });
      return true;
    }

    // Refill tokens based on time passed
    const timePassed = now - record.lastRefill;
    const tokensToAdd = Math.floor(timePassed / (this.interval / this.limit));

    if (tokensToAdd > 0) {
      record.count = Math.min(this.limit, record.count + tokensToAdd);
      record.lastRefill = now;
    }

    if (record.count > 0) {
      record.count--;
      this.tokens.set(key, record);
      return true;
    }

    return false;
  }

  /**
   * Cleans up old entries to prevent memory leaks.
   */
  cleanup() {
    const now = Date.now();
    for (const [key, record] of this.tokens.entries()) {
      if (now - record.lastRefill > this.interval) {
        this.tokens.delete(key);
      }
    }
  }
}
