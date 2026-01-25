/**
 * Simple in-memory rate limiter for middleware.
 * Note: In a serverless environment (like Vercel), this state is local to the lambda instance.
 * It does not share state across instances, but provides basic protection against bursts
 * hitting a single instance (DoS protection).
 */

interface RateLimitContext {
  count: number;
  resetTime: number;
}

const ipMap = new Map<string, RateLimitContext>();

/**
 * Checks if an IP has exceeded the rate limit.
 *
 * @param ip The IP address to check.
 * @param limit The maximum number of requests allowed in the window.
 * @param windowMs The time window in milliseconds.
 * @returns true if the request is allowed, false if blocked.
 */
export function rateLimit(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const record = ipMap.get(ip) || { count: 0, resetTime: now + windowMs };

  // If window has passed, reset
  if (now > record.resetTime) {
    record.count = 0;
    record.resetTime = now + windowMs;
  }

  record.count++;
  ipMap.set(ip, record);

  // Simple cleanup to prevent memory leaks in long-running processes
  if (ipMap.size > 5000) {
    ipMap.clear();
  }

  return record.count <= limit;
}
