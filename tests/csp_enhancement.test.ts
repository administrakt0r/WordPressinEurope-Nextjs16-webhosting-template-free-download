import { describe, it, expect } from 'vitest';
import { middleware } from '@/middleware';
import { NextRequest } from 'next/server';

describe('CSP Middleware', () => {
    it('should set Content-Security-Policy header with nonce', () => {
        const request = new NextRequest(new URL('http://localhost/'));
        const response = middleware(request);

        const csp = response.headers.get('Content-Security-Policy');
        expect(csp).toBeDefined();
        if (!csp) return;

        // Check for Nonce
        expect(csp).toMatch(/script-src 'self' 'nonce-[a-zA-Z0-9-]+'/);

        // Check for other critical directives
        expect(csp).toContain("object-src 'none'");
        expect(csp).toContain("frame-ancestors 'none'");
        expect(csp).toContain("frame-src 'none'");
        expect(csp).toContain("upgrade-insecure-requests");
    });

    it('should have strict connect-src', () => {
        const request = new NextRequest(new URL('http://localhost/'));
        const response = middleware(request);
        const csp = response.headers.get('Content-Security-Policy');
        expect(csp).toContain("connect-src 'self' https://uptime.wpineu.com https://clients.wpineu.com https://wp.wpineu.com https://images.unsplash.com");
    });

    it('should have strict worker-src', () => {
        const request = new NextRequest(new URL('http://localhost/'));
        const response = middleware(request);
        const csp = response.headers.get('Content-Security-Policy');
        expect(csp).toContain("worker-src 'self' blob:");
    });

    it('should have strict manifest-src', () => {
        const request = new NextRequest(new URL('http://localhost/'));
        const response = middleware(request);
        const csp = response.headers.get('Content-Security-Policy');
        expect(csp).toContain("manifest-src 'self'");
    });

    it('should have strict media-src', () => {
        const request = new NextRequest(new URL('http://localhost/'));
        const response = middleware(request);
        const csp = response.headers.get('Content-Security-Policy');
        expect(csp).toContain("media-src 'self'");
    });
});
