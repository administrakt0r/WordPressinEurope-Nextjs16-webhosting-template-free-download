/**
 * Basic in-memory rate limiter.
 * Note: This stores state in memory, so it works per-instance (per-lambda).
 * In a distributed Vercel environment, this provides "best effort" protection.
 */

export interface RateLimitConfig {
    limit: number;
    window: number; // in milliseconds
}

const trackers = new Map<string, { count: number; expiresAt: number }>();

/**
 * Checks if a request from the given IP is within the rate limit.
 * Returns true if allowed, false if blocked.
 */
export function checkRateLimit(ip: string, config: RateLimitConfig = { limit: 100, window: 60000 }): boolean {
    // Probabilistic cleanup to prevent memory leaks (runs on ~5% of requests)
    if (Math.random() < 0.05) {
        const now = Date.now();
        for (const [key, value] of trackers.entries()) {
            if (value.expiresAt < now) {
                trackers.delete(key);
            }
        }
    }

    const now = Date.now();
    const record = trackers.get(ip);

    // If no record exists or the window has expired, start a new window
    if (!record || record.expiresAt < now) {
        trackers.set(ip, { count: 1, expiresAt: now + config.window });
        return true;
    }

    // If the limit is exceeded, block the request
    if (record.count >= config.limit) {
        return false;
    }

    // Increment the counter
    record.count++;
    return true;
}
