/**
 * A basic in-memory rate limiter.
 * Note: In a serverless/edge environment, this state is local to the instance
 * and not shared. For distributed rate limiting, use Redis (e.g., Upstash).
 */
export interface RateLimitConfig {
  uniqueTokenPerInterval: number; // Max unique IPs to track before cleanup
  interval: number; // Window size in ms
}

export class RateLimiter {
  private config: RateLimitConfig;
  private tokens: Map<string, number[]>;

  constructor(config: RateLimitConfig) {
    this.config = config;
    this.tokens = new Map();
  }

  /**
   * Checks if a token (IP) has exceeded the rate limit.
   * @param limit Max requests allowed within the interval
   * @param token The unique identifier (e.g., IP address)
   * @returns true if the request is allowed, false if limited
   */
  check(limit: number, token: string): boolean {
    const now = Date.now();
    const windowStart = now - this.config.interval;

    const tokenHistory = this.tokens.get(token) || [];
    const validTokens = tokenHistory.filter((timestamp) => timestamp > windowStart);

    if (validTokens.length >= limit) {
      return false;
    }

    validTokens.push(now);
    this.tokens.set(token, validTokens);

    // Simple cleanup to prevent memory leaks
    if (this.tokens.size > this.config.uniqueTokenPerInterval) {
      const keys = Array.from(this.tokens.keys());
      // Delete the first 10% of keys
      for (let i = 0; i < Math.ceil(keys.length * 0.1); i++) {
        this.tokens.delete(keys[i]);
      }
    }

    return true;
  }
}
