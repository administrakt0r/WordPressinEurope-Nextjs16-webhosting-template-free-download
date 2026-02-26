# Sentinel's Journal

## 2025-02-14 - Build Error with Exported Constants in Route Handlers
**Vulnerability:** Not a security vulnerability, but a build stability issue. Exporting variables assigned from constants (e.g., `export const revalidate = CONSTANT`) in `robots.ts` and `sitemap.ts` caused `Invalid segment configuration export detected` during `next build`.
**Learning:** Next.js static analysis for segment configuration seems to require literal values or direct assignment in these specific files (Route Handlers/Metadata files) in this version/configuration.
**Prevention:** Use literal values for segment configuration exports like `revalidate`, or inline the value directly.

## 2025-02-14 - CSP Image Sources and Next.js
**Vulnerability:** Permissive `img-src https:` allowed loading images from any domain.
**Learning:** Next.js `next/image` proxies requests, so `img-src 'self'` is sufficient for optimized images. However, restricting `img-src` to specific domains (like `images.unsplash.com`) adds depth to defense by preventing loading of malicious pixels via standard `<img>` tags or unoptimized images.
**Prevention:** Always explicitly list allowed image domains in CSP `img-src`, even if `next.config.ts` `remotePatterns` is configured.

## 2025-05-23 - JSON-LD Security Pattern
**Vulnerability:** Direct usage of `dangerouslySetInnerHTML` for JSON-LD scripts in multiple pages increases the risk of accidental omission of `safeJsonLd` sanitization and duplicates unsafe code.
**Learning:** Encapsulating `safeJsonLd` logic within a reusable `<JsonLd />` component ensures consistent output sanitization and reduces the codebase's attack surface.
**Prevention:** Always use the `JsonLd` component from `@/components/JsonLd` instead of raw `<script>` tags for structured data.

## 2025-05-24 - External Link Security Pattern
**Vulnerability:** Inconsistent use of `target="_blank"` without `rel="noopener noreferrer"` in some components exposed potential reverse tabnabbing risks and lacked accessibility context (screen reader text).
**Learning:** Enforcing a dedicated `ExternalLink` component ensures that all external links automatically include security attributes (`rel`) and accessibility enhancements (screen reader text), reducing the risk of human error.
**Prevention:** Always use `@/components/ui/ExternalLink` for external URLs instead of raw `<a>` or `Link` with manual `target="_blank"`.

## 2025-05-24 - Mailto Scraping Protection
**Vulnerability:** Raw `mailto:` links in static HTML are easily harvested by spambots, leading to increased phishing and spam for support addresses.
**Learning:** Creating an `ObfuscatedMailto` component that renders the `href` attribute only after client-side hydration effectively prevents simple static scrapers from harvesting email addresses while maintaining usability for real users.
**Prevention:** Use `@/components/ui/ObfuscatedMailto` instead of raw `<a>` tags for all email links.

## 2025-05-24 - Unsanitized Link Components
**Vulnerability:** Reusable link components (`ExternalLink`, `SkipLink`) accepted arbitrary `href` values, allowing XSS via `javascript:` scheme if passed malicious input.
**Learning:** Even "secure" components that handle `rel` and `target` attributes must also validate the `href` protocol to be truly secure.
**Prevention:** Use `isSafeUrl` to validate all `href` props in link components before rendering.

## 2025-05-24 - Defense in Depth with Middleware Headers
**Vulnerability:** While `next.config.ts` configured security headers, they rely on specific path matching. The application lacked a "defense in depth" layer to enforce these headers globally at the edge (middleware), potentially leaving gaps for excluded paths or static assets if configuration drifts.
**Learning:** Next.js `middleware.ts` (or `proxy.ts`) allows intercepting requests before they hit the filesystem or page logic, making it the ideal place to enforce non-negotiable security headers like HSTS and X-Frame-Options.
**Prevention:** Explicitly set critical security headers in Middleware in addition to `next.config.ts` to ensure redundancy and broader coverage.

## 2025-05-24 - Cross-Domain Policy Header
**Vulnerability:** Missing `X-Permitted-Cross-Domain-Policies` header allowed Adobe Flash and PDF documents to potentially load data from the domain.
**Learning:** Even though Flash is deprecated, other clients (like PDF readers) may verify this policy. Explicitly setting it to `none` is a defense-in-depth measure.
**Prevention:** Enforce `X-Permitted-Cross-Domain-Policies: none` in middleware to prevent cross-domain data loading.

## 2025-05-24 - Hardware API Fingerprinting
**Vulnerability:** Modern browser APIs like Web Bluetooth, Serial, HID, and Battery Status can be used for fingerprinting or accessing local hardware if exploited via XSS.
**Learning:** Explicitly disabling unused hardware APIs via `Permissions-Policy` reduces the attack surface and prevents unauthorized access to user devices, even if an attacker achieves script execution.
**Prevention:** Maintain a strict `Permissions-Policy` in `middleware.ts` that explicitly denies `bluetooth`, `serial`, `hid`, and `battery` unless absolutely necessary.

## 2025-05-24 - Protocol-Relative URL Risk
**Vulnerability:** The `isSafeUrl` function allowed protocol-relative URLs (starting with `//`), which could lead to Open Redirect vulnerabilities if used in redirection contexts or misleading users about the destination protocol.
**Learning:** `new URL('//example.com')` throws an error without a base, causing the validation to fall through to the catch block where it was treated as safe. Explicitly checking for `//` is necessary.
**Prevention:** Added an explicit check `if (url.startsWith('//')) return false;` in `lib/security.ts`.

## 2025-05-24 - Rate Limiting IP Spoofing
**Vulnerability:** `X-Forwarded-For` header was prioritized over `request.ip` for rate limiting, allowing attackers to bypass limits by spoofing the header.
**Learning:** Never blindly trust `X-Forwarded-For` for security controls unless the upstream proxy configuration strictly sanitizes it. Next.js `request.ip` is a trusted source in supported environments.
**Prevention:** Prioritize `request.ip` or use platform-specific headers (like `CF-Connecting-IP`) before falling back to `X-Forwarded-For`.

## 2025-05-24 - User-Agent Blocking
**Vulnerability:** Known malicious scanners (sqlmap, nikto, etc.) were able to access the application because User-Agent blocking logic was missing.
**Learning:** Automated scanners are the first wave of attack. Blocking them at the middleware level saves resources and reduces log noise.
**Prevention:** Implement a blocklist for known malicious User-Agents in `middleware.ts` and return 403 immediately.

## 2025-05-25 - Unverified Global Constants in Security Utilities
**Vulnerability:** The `isSafeUrl` utility relied on a `SAFE_PROTOCOLS` constant that was undefined in the module scope, causing the function to throw a `ReferenceError` which was caught by a generic catch block, leading to `false` returns for all valid absolute URLs.
**Learning:** Security utilities must be rigorous about variable definitions. A missing constant in a utility function can silently break functionality or security checks if error handling is too broad (e.g., catching all errors and returning a default value).
**Prevention:** Explicitly define all constants within the module or function scope and ensure strict linting/testing catches undefined variables. Avoid broad `try-catch` blocks that suppress `ReferenceError`s during development.

## 2025-05-25 - IP Rate Limiting Spoofing
**Vulnerability:** The rate limiting logic prioritized `X-Forwarded-For` over `request.ip`, allowing attackers to bypass rate limits by spoofing the header.
**Learning:** `X-Forwarded-For` is user-controlled and can be forged unless the upstream proxy strictly sanitizes it. Next.js `request.ip` is populated from trusted platform headers.
**Prevention:** Always prioritize `request.ip` (or platform-specific trusted headers) for security controls. Use `X-Forwarded-For` only as a fallback and sanitize it.

## 2025-05-25 - HTTP Method Blocking
**Vulnerability:** The application implicitly allowed all HTTP methods. `TRACE` and `TRACK` methods can be used for Cross-Site Tracing (XST) attacks to steal cookies or credentials, bypassing HttpOnly flags.
**Learning:** Even if modern browsers block TRACE via XHR, blocking it at the server level is a standard hardening practice ("Defense in Depth").
**Prevention:** Explicitly block `TRACE` and `TRACK` methods in `middleware.ts` with a 405 Method Not Allowed response.

## 2025-05-25 - Security Configuration Duplication
**Vulnerability:** Duplicate definition of `BLOCKED_USER_AGENTS` in `middleware.ts` and `lib/security.ts` led to variable shadowing and potential inconsistency where one list could be updated while the other remained stale, potentially allowing malicious agents.
**Learning:** Security configurations (blocklists, headers, allowlists) must have a Single Source of Truth (SSoT) to prevent "drift" and shadowing bugs.
**Prevention:** Define all security constants in `lib/security.ts` and import them. Never redefine them locally.

## 2025-05-25 - Inconsistent Security Headers on Error Responses
**Vulnerability:** Security headers (HSTS, CSP, Permissions-Policy) were only applied to successful responses in middleware. Requests blocked by method (405) or User-Agent (403) returned early without these headers, potentially allowing downgrade attacks or missing policy enforcement.
**Learning:** Security headers must be applied to *every* response generated by the application, including error pages and blocked requests, to maintain a consistent security posture ("Defense in Depth").
**Prevention:** Refactor middleware to ensure a single exit point where headers are applied to the final `NextResponse` object, regardless of its status code.

## 2025-05-25 - RegExp ReDoS Prevention in Security Lists
**Vulnerability:** Constructing a `RegExp` from a dynamic list of strings (like `BLOCKED_USER_AGENTS`) without escaping special characters can lead to ReDoS (Regular Expression Denial of Service) or logic errors if the list contains characters like `.`, `*`, or `?`.
**Learning:** Always treat string lists as "untrusted" when converting them to regex patterns. Even if the current list is safe, future additions might introduce special characters.
**Prevention:** Use an `escapeRegExp` utility function to escape all special characters in strings before joining them into a regex pattern.

## 2025-05-25 - Generic User-Agent Blocking
**Vulnerability:** Adding generic terms like "john" or "spider" to blocklists can inadvertently block legitimate users or custom bots, causing false positives.
**Learning:** Security blocklists must balance strictness with usability. However, for known attack tools like "John the Ripper", the risk of a false positive (a user with "john" in their UA) is acceptable compared to the security benefit, provided there is a mechanism to review logs or appeals.
**Prevention:** Carefully review new additions to `BLOCKED_USER_AGENTS`. Use specific tool names (e.g., `sqlmap`) where possible, but accept some risk for common tools with generic names if the threat is high.

## 2026-01-27 - False Positives in User-Agent Blocking
**Vulnerability:** The `BLOCKED_UA_REGEX` matched substrings anywhere in the User-Agent string, causing denial of service for legitimate users whose device names contained blocked terms (e.g., "John's MacBook Pro" blocked by "john").
**Learning:** Security controls must be precise. Substring matching without word boundaries (\`\\b\`) is too aggressive for common terms. Also, some terms like "john" are too generic to be safely blocked without more context (like "John/").
**Prevention:** Use word boundaries (\`\\b\`) when constructing regexes from blocklists. Remove or refine terms that are common words or names unless they are unique to the attack tool.

## 2026-05-26 - Centralized Permissions-Policy
**Vulnerability:** Redundant and potentially inconsistent `Permissions-Policy` definitions in `middleware.ts` and `next.config.ts` increased maintenance burden and risk of configuration drift, potentially leaving sensitive features enabled in some contexts.
**Learning:** Security headers should be defined as a Single Source of Truth (SSoT) to ensure consistent application across all response types (static, dynamic, edge). Centralizing these definitions in a shared utility module prevents discrepancies.
**Prevention:** Define the `PERMISSIONS_POLICY` string in `lib/security.ts` and import it into both `middleware.ts` and `next.config.ts`.

## 2026-05-27 - JSON-LD Serialization Crash
**Vulnerability:** `JSON.stringify` inside `safeJsonLd` could crash the application if passed circular references or huge objects, leading to Denial of Service for the affected page.
**Learning:** Utility functions used in critical rendering paths (like `head` or `layout`) must never throw. Always wrap potentially unsafe operations (like serialization) in try-catch blocks and return a safe fallback.
**Prevention:** Wrapped `JSON.stringify` in `try-catch` within `safeJsonLd` to return `"{}"` on error.

## 2026-05-27 - URL Validation DoS
**Vulnerability:** `isSafeUrl` could be exploited for DoS via extremely long strings because `new URL()` parsing can be expensive on massive inputs.
**Learning:** Input validation libraries must enforce reasonable limits on input size before processing to prevent resource exhaustion attacks.
**Prevention:** Added a 2048 character limit to `isSafeUrl`.

## 2026-05-28 - Middleware IP Spoofing
**Vulnerability:** The rate limiting logic in `middleware.ts` prioritized the first IP in `X-Forwarded-For` over `request.ip`, allowing attackers to bypass limits by spoofing the header.
**Learning:** `X-Forwarded-For` is user-controlled and can be forged unless the upstream proxy strictly sanitizes it. Next.js `request.ip` is populated from trusted platform headers (like `x-real-ip` or `cf-connecting-ip`) and should be the source of truth.
**Prevention:** Always prioritize `request.ip` for security controls. Remove insecure fallback logic that blindly trusts `X-Forwarded-For`.

## 2026-05-28 - User-Agent ReDoS Protection
**Vulnerability:** The `User-Agent` string was passed to a complex regex (`BLOCKED_UA_REGEX`) without length limits, exposing the application to potential ReDoS or CPU exhaustion attacks with extremely long inputs.
**Learning:** Regular expressions, especially those with many alternations, can be computationally expensive. Input validation (length limits) should always precede regex matching for untrusted inputs.
**Prevention:** Enforce a strict length limit (e.g., 2048 characters) on `User-Agent` headers before processing them with regex.

## 2026-02-25 - Middleware Security Headers and Sensitive Path Blocking
**Vulnerability:**
1.  **Sensitive Path Exposure:** Common sensitive files (e.g., `.env`, `.git`, `wp-config.php`) were not explicitly blocked at the edge, relying on the application routing or file system to handle them (potentially exposing 404s or source code if misconfigured).
2.  **Missing Security Headers on Errors:** 403 (Forbidden), 405 (Method Not Allowed), and 429 (Too Many Requests) responses lacked `Cache-Control` and `Vary` headers, creating a risk of cache poisoning where a blocked response for a malicious user could be served to legitimate users by intermediate caches.

**Learning:**
-   **Defense in Depth:** Blocking known sensitive paths at the middleware level (edge) is more efficient and secure than letting requests reach the application logic.
-   **Cache Poisoning:** Security blocks (403/429) often depend on request attributes like User-Agent or IP. If these responses are cached without `Vary: User-Agent` or `Cache-Control: no-store`, a shared cache (CDN/Proxy) might serve the block to all users.

**Prevention:**
-   Implemented a `BLOCKED_PATHS` check in `middleware.ts` to reject requests for sensitive files immediately.
-   Enhanced `middleware.ts` to add `Cache-Control: no-store`, `Pragma: no-cache`, `Expires: 0`, and `Vary: User-Agent` to all 403, 405, and 429 responses.

## 2026-05-29 - Overly Broad Blocked Paths Logic
**Vulnerability:** The use of `String.prototype.includes()` for checking blocked paths in middleware caused false positives, blocking legitimate content that contained blocked terms as substrings (e.g., `/blog/using-.env-files`).
**Learning:** Security controls based on string matching must be precise. Using `includes()` is too broad for path blocking. Regex with boundary checks or path segment analysis is required to avoid collateral damage.
**Prevention:** Implemented `isBlockedPath` using a precise regex `(?:^|/)${escaped_item}(?:$|/|\.)` to match blocked items only as full path segments or filenames.
