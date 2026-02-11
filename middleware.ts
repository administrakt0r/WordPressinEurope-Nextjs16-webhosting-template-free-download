import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ratelimit } from '@/lib/ratelimit';

interface RequestWithIp extends NextRequest {
  ip?: string;
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

const BLOCKED_USER_AGENTS = ['sqlmap', 'nikto', 'nuclei', 'wpscan'];

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

  // Block malicious User-Agents
  if (BLOCKED_USER_AGENTS.some((agent) => userAgent.includes(agent))) {
    const response = new NextResponse('Forbidden', { status: 403 });
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    return response;
  }

  // Rate limiting
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip = (request as RequestWithIp).ip || (forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1');

  // Generate nonce and CSP for all non-blocked requests
  const nonce = crypto.randomUUID();
  const contentSecurityPolicyHeaderValue = CSP_TEMPLATE.replace('NONCE_PLACEHOLDER', nonce);

  let response: NextResponse;

  if (!ratelimit.check(100, ip)) {
    response = new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
        'Content-Type': 'text/plain',
      },
    });
  } else {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set(
      'Content-Security-Policy',
      contentSecurityPolicyHeaderValue
    );

    response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // Apply Security Headers to all responses (including 429)
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  );
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), midi=(), sync-xhr=(), autoplay=(), fullscreen=(), picture-in-picture=(), display-capture=(), screen-wake-lock=(), bluetooth=(), serial=(), hid=(), battery=()'
  );
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'on');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
