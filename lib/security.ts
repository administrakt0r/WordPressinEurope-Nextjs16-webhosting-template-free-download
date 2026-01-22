
/**
 * Safely serializes data for use in JSON-LD <script> tags.
 * prevent XSS by escaping HTML entities.
 *
 * @param data The JSON object to serialize.
 * @returns A string containing the serialized JSON with escaped characters.
 */
export function safeJsonLd(data: Record<string, unknown>): string {
  const json = JSON.stringify(data);
  return json.replace(/</g, '\\u003c')
             .replace(/>/g, '\\u003e')
             .replace(/&/g, '\\u0026')
             .replace(/'/g, '\\u0027')
             .replace(/\u2028/g, '\\u2028')
             .replace(/\u2029/g, '\\u2029');
}

/**
 * Validates if a URL is safe to use (http/https/mailto/tel or relative).
 * Prevents javascript: protocol and other dangerous schemes.
 *
 * @param url The URL to check
 * @returns boolean True if the URL is considered safe
 */
export function isSafeUrl(url: string): boolean {
  if (!url) return false;

  // Allow relative URLs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    const parsed = new URL(url);
    return ['http:', 'https:', 'mailto:', 'tel:'].includes(parsed.protocol);
  } catch {
    // If URL parsing fails, it's likely safe (relative or invalid) but let's be strict
    // If it didn't start with / or # and failed parsing, it might be weird string.
    // However, URL constructor throws on relative URLs without base.
    // We already handled obvious relative URLs.

    // Check for malicious protocols in the string itself if parsing failed
    // (e.g. "javascript:alert(1)" might fail parsing in some environments? No, it parses as javascript:)

    // If it's a relative URL that didn't start with / (e.g. "about"), it's safe.
    // But "javascript:alert(1)" also doesn't start with /.

    // Simple regex check for protocol
    const protocolMatch = url.match(/^([a-zA-Z0-9-]+):/);
    if (protocolMatch) {
        const protocol = protocolMatch[1].toLowerCase();
        return ['http', 'https', 'mailto', 'tel'].includes(protocol);
    }

    // No protocol found, assume relative/safe
    return true;
  }
}
