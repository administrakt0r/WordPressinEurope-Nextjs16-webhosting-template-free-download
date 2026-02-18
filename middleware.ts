import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ratelimit } from '@/lib/ratelimit';
import { BLOCKED_UA_REGEX, generateCSP } from '@/lib/security';

interface RequestWithIp extends NextRequest {
  ip?: string;
}

export function middleware(request: NextRequest) {
  // Generate nonce for CSP
  const nonce = crypto.randomUUID();
  const contentSecurityPolicyHeaderValue = generateCSP(nonce);

  let response: NextResponse;

  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

  // 1. Block TRACE and TRACK methods to prevent XST attacks
  if (['TRACE', 'TRACK'].includes(request.method)) {
    response = new NextResponse('Method Not Allowed', { status: 405 });
  }
  // 2. Block malicious User-Agents
  else if (BLOCKED_UA_REGEX.test(userAgent)) {
    response = new NextResponse('Forbidden', { status: 403 });
  }
  else {
    // 3. Rate limiting
    // Prioritize request.ip (trusted platform IP) to prevent spoofing via X-Forwarded-For
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = (request as RequestWithIp).ip ||
               (forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1');

    if (!ratelimit.check(100, ip)) {
      response = new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'Retry-After': '60',
          'Content-Type': 'text/plain',
        },
      });
    }
    // 4. Valid Request
    else {
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
  }

  // Apply Security Headers to all responses (including 403, 405, 429)
  // This ensures consistent security posture even for blocked requests
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
  response.headers.set('X-DNS-Prefetch-Control', 'off');
  response.headers.set('X-Download-Options', 'noopen');

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
