
/**
 * Validates if a URL is safe to use in an anchor tag.
 * Blocks dangerous protocols like javascript: and vbscript:
 *
 * @param url The URL to validate
 * @returns boolean True if the URL is safe
 */
export function isSafeUrl(url: string): boolean {
  if (!url) return false;
  const lowerUrl = url.toLowerCase().trim();
  if (lowerUrl.startsWith('javascript:')) return false;
  if (lowerUrl.startsWith('vbscript:')) return false;
  if (lowerUrl.startsWith('data:')) return false;
  return true;
}

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
