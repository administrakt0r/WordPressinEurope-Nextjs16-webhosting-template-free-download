/**
 * Basic in-memory rate limiter for serverless environments.
 * Note: State is local to the serverless instance, so it's not a distributed rate limiter.
 * This provides a layer of defense against rapid-fire scraping or DoS attempts.
 */

interface RateLimitConfig {
  limit: number;
  windowMs: number;
}

interface RateLimitInfo {
  count: number;
  expiresAt: number;
}

const trackers = new Map<string, RateLimitInfo>();

/**
 * Checks if a request from the given IP should be rate limited.
 *
 * @param ip - The IP address of the requester.
 * @param config - Rate limit configuration (default: 100 reqs / 60s).
 * @returns {boolean} - Returns true if the request is allowed, false if rate limited.
 */
export function rateLimit(
  ip: string,
  config: RateLimitConfig = { limit: 100, windowMs: 60 * 1000 }
): boolean {
  if (!ip) return true; // Fail open if no IP

  const now = Date.now();
  const tracker = trackers.get(ip);

  // Lazy cleanup: If entry is expired, reset it
  if (!tracker || tracker.expiresAt < now) {
    trackers.set(ip, {
      count: 1,
      expiresAt: now + config.windowMs,
    });
    return true;
  }

  // Check limit before incrementing to avoid overflow/unnecessary writes
  if (tracker.count >= config.limit) {
    return false;
  }

  // Increment count
  tracker.count++;
  return true;
}

// Periodic cleanup to prevent memory leaks from old IPs
// Only runs if the process stays alive (e.g. Node.js server, but maybe not Edge)
if (typeof setInterval !== 'undefined') {
  const CLEANUP_INTERVAL = 60 * 1000 * 5; // 5 minutes
  const interval = setInterval(() => {
    const now = Date.now();
    for (const [key, value] of trackers.entries()) {
      if (value.expiresAt < now) {
        trackers.delete(key);
      }
    }
  }, CLEANUP_INTERVAL);

  // Prevent keeping the process alive just for this
  if (interval.unref) {
    interval.unref();
  }
}
