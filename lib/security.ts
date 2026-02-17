
const SAFE_PROTOCOLS = ['http:', 'https:', 'mailto:', 'tel:'];

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
 * Validates a URL to ensure it uses a safe protocol.
 * Prevents XSS by blocking dangerous schemes like javascript:, data:, vbscript:.
 *
 * @param url The URL to validate.
 * @returns True if the URL is safe, false otherwise.
 */
export function isSafeUrl(url: string): boolean {
  if (!url) return false;

  // Prevent protocol-relative URLs (open redirect risk)
  if (url.startsWith('//')) return false;

  // Allow relative URLs (starting with / or #)
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    const parsed = new URL(url);
    return SAFE_PROTOCOLS.includes(parsed.protocol);
  } catch {
    // If URL parsing fails, checks for potential dangerous schemes that might have bypassed parsing
    // If it contains a colon, treat it as suspicious (could be a scheme)
    if (url.indexOf(':') > -1) {
      return false;
    }
    // Treat as relative path
    return true;
  }
}

// Pre-compute the CSP template to avoid regex and string allocation on every request
const CSP_TEMPLATE = `
    default-src 'self';
    script-src 'self' 'nonce-NONCE_PLACEHOLDER' 'strict-dynamic';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://images.unsplash.com;
    font-src 'self' data:;
    connect-src 'self' https://uptime.wpineu.com https://clients.wpineu.com https://wp.wpineu.com https://images.unsplash.com;
    worker-src 'self' blob:;
    manifest-src 'self';
    media-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, ' ')
  .trim();

export const BLOCKED_USER_AGENTS = [
  'sqlmap',
  'nikto',
  'nuclei',
  'wpscan',
  'masscan',
  'zgrab',
  'acunetix',
  'netsparker',
  'havij',
  'muieblackcat',
  'gobuster',
  'dirbuster',
];

export function generateCSP(nonce: string): string {
  return CSP_TEMPLATE.replace('NONCE_PLACEHOLDER', nonce);
}
