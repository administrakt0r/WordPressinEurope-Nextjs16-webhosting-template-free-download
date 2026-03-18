
const SAFE_PROTOCOLS = ['http:', 'https:', 'mailto:', 'tel:'];

/**
 * Safely serializes data for use in JSON-LD <script> tags.
 * prevent XSS by escaping HTML entities.
 *
 * @param data The JSON object to serialize.
 * @returns A string containing the serialized JSON with escaped characters.
 */
export function safeJsonLd(data: Record<string, unknown>): string {
  try {
    const json = JSON.stringify(data);
    return json.replace(/</g, '\\u003c')
               .replace(/>/g, '\\u003e')
               .replace(/&/g, '\\u0026')
               .replace(/'/g, '\\u0027')
               .replace(/\u2028/g, '\\u2028')
               .replace(/\u2029/g, '\\u2029');
  } catch {
    return '{}';
  }
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
  // Prevent DoS via extremely long URLs
  if (url.length > 2048) return false;

  const trimmedUrl = url.trim();

  // Prevent control characters which can bypass filters (e.g. \n, \t, \r)
  // ASCII 0-31 (control) and 127 (delete)
  if (/[\x00-\x1F\x7F]/.test(trimmedUrl)) return false;

  // Prevent protocol-relative URLs (open redirect risk)
  if (trimmedUrl.startsWith('//')) return false;

  try {
    // Use a dummy base to allow parsing of relative URLs
    // This catches schemes like javascript: even if they are not at the start (though URL constructor handles that)
    const parsed = new URL(trimmedUrl, 'http://dummy.com');
    return SAFE_PROTOCOLS.includes(parsed.protocol);
  } catch {
    return false;
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
  'nmap',
  'nessus',
  'qualys',
  'openvas',
  'whatweb',
  'buster',
  'censys',
  'shodan',
  'seun',
  'blackwidow',
  'brutus',
  'cgiscan',
  'commix',
  'crawley',
  'crimea',
  'davtest',
  'dotdotpwn',
  'fuzz',
  'grabber',
  'grendel-scan',
  'hydra',
  'jbrofuzz',
  'medusa',
  'metis',
  'morfeus',
  'mysqloit',
  'pangolin',
  'pentbox',
  'webinspect',
  'webslayer',
  'zap',
  'burp',
  'metasploit',
];

/**
 * Escapes special characters in a string for use in a regular expression.
 * Prevents ReDoS and ensures literal matching of characters like . or *.
 *
 * @param string The string to escape.
 * @returns The escaped string.
 */
export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Pre-compiled regex for faster matching (O(1) vs O(N))
// Matches any of the blocked user agents (case-insensitive)
// Uses escapeRegExp to ensure safety against special characters in the list
// Wrapped in \b to prevent partial matches (false positives)
export const BLOCKED_UA_REGEX = new RegExp(
  BLOCKED_USER_AGENTS.map(ua => `\\b${escapeRegExp(ua)}\\b`).join('|'),
  'i'
);

export function generateCSP(nonce: string): string {
  return CSP_TEMPLATE.replace('NONCE_PLACEHOLDER', nonce);
}

// Strict Permissions-Policy to enhance privacy and security
// Prevents usage of sensitive browser features and tracking APIs
export const PERMISSIONS_POLICY = [
  'camera=()',
  'microphone=()',
  'geolocation=()',
  'browsing-topics=()',
  'payment=()',
  'usb=()',
  'accelerometer=()',
  'gyroscope=()',
  'magnetometer=()',
  'midi=()',
  'sync-xhr=()',
  'autoplay=()',
  'fullscreen=()',
  'picture-in-picture=()',
  'display-capture=()',
  'screen-wake-lock=()',
  'bluetooth=()',
  'serial=()',
  'hid=()',
  'battery=()',
  'attribution-reporting=()',
  'run-ad-auction=()',
  'join-ad-interest-group=()',
  'encrypted-media=()',
  'gamepad=()',
  'shared-autofill=()',
  'otp-credentials=()',
].join(', ');

// Sensitive paths and files to block at the edge
export const BLOCKED_PATHS = [
  '.env',
  '.git',
  'wp-config.php',
  '.htaccess',
  '.htpasswd',
  'xmlrpc.php',
  'phpinfo.php',
  'package.json',
  'package-lock.json',
  'pnpm-lock.yaml',
  'yarn.lock',
  'composer.json',
  'composer.lock',
  'npm-debug.log',
  'yarn-error.log',
  'pnpm-debug.log',
];

// Pre-compiled regex for blocked paths to improve performance and precision
// Matches the blocked path as a full segment or followed by a dot (extension/suffix)
// Ensures it's not a partial match of another word (e.g., 'env' in 'environment')
export const BLOCKED_PATH_REGEX = BLOCKED_PATHS.length > 0
  ? new RegExp(
      BLOCKED_PATHS.map((path) => `(?:^|/)${escapeRegExp(path)}(?:$|/|\\.)`).join('|'),
      'i'
    )
  : /$^/; // Matches nothing if the list is empty

/**
 * Checks if the given pathname contains a blocked path segment.
 *
 * @param pathname The URL pathname to check.
 * @returns True if the pathname is blocked, false otherwise.
 */
export function isBlockedPath(pathname: string): boolean {
  return BLOCKED_PATH_REGEX.test(pathname);
}

// Common attack signatures for SQLi, XSS, and LFI
export const MALICIOUS_QUERY_SIGNATURES = [
  '<script',
  '<iframe',
  '<object',
  '<embed',
  'javascript:',
  'vbscript:',
  'data:text/html',
  'onload=',
  'onerror=',
  'union select',
  'union all select',
  'base64_decode',
  '../',
  '..\\',
  '/etc/passwd',
  'c:\\windows'
];

// Pre-compiled regex for malicious query parameters
export const MALICIOUS_QUERY_REGEX = new RegExp(
  MALICIOUS_QUERY_SIGNATURES.map(sig => escapeRegExp(sig)).join('|'),
  'i'
);

/**
 * Decodes a URI component repeatedly until it stops changing to prevent double-encoding bypasses.
 *
 * @param component The URI component to decode.
 * @returns The fully decoded component, or the original component if decoding fails.
 */
function fullyDecodeURIComponent(component: string): string {
  let decoded = component;
  try {
    let prev;
    do {
      prev = decoded;
      decoded = decodeURIComponent(decoded);
    } while (prev !== decoded);
  } catch {
    // If decoding fails (e.g. malformed URI), return the last successfully decoded state
  }
  return decoded;
}

/**
 * Checks if the given URL search parameters contain common attack signatures.
 *
 * @param searchParams The URL search parameters object to check.
 * @returns True if malicious query is detected, false otherwise.
 */
export function isMaliciousQuery(searchParams: URLSearchParams): boolean {
  for (const [key, value] of searchParams.entries()) {
    const decodedKey = fullyDecodeURIComponent(key);
    const decodedValue = fullyDecodeURIComponent(value);

    if (MALICIOUS_QUERY_REGEX.test(decodedKey) || MALICIOUS_QUERY_REGEX.test(decodedValue)) {
      return true;
    }
  }
  return false;
}
