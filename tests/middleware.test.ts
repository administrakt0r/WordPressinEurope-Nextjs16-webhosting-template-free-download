import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { describe, it, expect } from 'vitest';

describe('Middleware Security Headers', () => {
  it('should set security headers', () => {
    const request = new NextRequest(new URL('https://wpineu.com/'));
    const response = middleware(request);

    const headers = response.headers;

    // Existing header
    expect(headers.get('Content-Security-Policy')).toBeDefined();

    // New headers to be added
    expect(headers.get('X-Content-Type-Options')).toBe('nosniff');
    expect(headers.get('X-Frame-Options')).toBe('DENY');
    expect(headers.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
    expect(headers.get('Strict-Transport-Security')).toBe('max-age=63072000; includeSubDomains; preload');
    expect(headers.get('Permissions-Policy')).toContain('camera=()');
  });
});
