
export class RateLimiter {
  private timestamps: Map<string, number[]>;
  public readonly interval: number;
  public readonly uniqueTokenPerInterval: number;

  constructor(options: { interval: number; uniqueTokenPerInterval: number }) {
    this.timestamps = new Map();
    this.interval = options.interval;
    this.uniqueTokenPerInterval = options.uniqueTokenPerInterval;
  }

  /**
   * Checks if the rate limit is exceeded for the given token.
   * @param limit Max requests allowed within the interval
   * @param token Unique identifier (e.g., IP address)
   * @returns true if the request is allowed, false if blocked
   */
  check(limit: number, token: string): boolean {
    const now = Date.now();
    const windowStart = now - this.interval;

    let timestamps = this.timestamps.get(token) || [];

    // Filter out timestamps older than the window
    // Optimization: avoid filter (O(N) allocation) by finding the start index
    // Timestamps are sorted by insertion time
    const startIndex = timestamps.findIndex((t) => t > windowStart);

    if (startIndex > 0) {
      timestamps = timestamps.slice(startIndex);
    } else if (startIndex === -1 && timestamps.length > 0) {
      // No timestamp is > windowStart (all are old)
      timestamps = [];
    } else {
      // startIndex === 0: All timestamps are valid
      // Clone array to prevent mutation of the reference if we didn't slice
      timestamps = [...timestamps];
    }

    // LRU Policy: Delete the token so re-insertion moves it to the end of the Map iteration order
    this.timestamps.delete(token);

    const isBlocked = timestamps.length >= limit;

    // Fixed: Always track the attempt, even if blocked, to extend the block duration if spam continues.
    // This effectively slides the window forward, keeping the user blocked as long as they continue to spam.
    if (isBlocked) {
      // Optimization: If full, remove the oldest timestamp to make room for the new one.
      // This maintains the array size at 'limit' while sliding the window forward.
      timestamps.shift();
    }
    timestamps.push(now);

    this.timestamps.set(token, timestamps);

    // Prevent memory leaks by limiting the cache size (LRU eviction)
    if (this.timestamps.size > this.uniqueTokenPerInterval) {
      // Map keys are iterated in insertion order, so this removes the oldest entry
      const firstKey = this.timestamps.keys().next().value;
      if (firstKey) this.timestamps.delete(firstKey);
    }

    return !isBlocked;
  }
}

// Global instance for the application
export const ratelimit = new RateLimiter({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Track up to 500 unique IPs per instance
});
