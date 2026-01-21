import { describe, it, expect } from 'vitest';
import nextConfig from '@/next.config';

interface Header {
    key: string;
    value: string;
}

interface HeaderConfig {
    source: string;
    headers: Header[];
}

describe('Security Headers', () => {
  it('should have strict CSP', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    // We are looking for headers applied to all paths
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const cspHeader = globalHeaders.headers.find((h: Header) => h.key === 'Content-Security-Policy');
    expect(cspHeader).toBeDefined();
    if (cspHeader) {
        expect(cspHeader.value).toContain('upgrade-insecure-requests');
        expect(cspHeader.value).toContain("object-src 'none'");
        expect(cspHeader.value).toContain("frame-ancestors 'none'");
        expect(cspHeader.value).toContain("frame-src 'none'");
        expect(cspHeader.value).toContain("img-src 'self' data: https://images.unsplash.com");
    }
  });

  it('should have strict Permissions-Policy', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const permissionsHeader = globalHeaders.headers.find((h: Header) => h.key === 'Permissions-Policy');
    expect(permissionsHeader).toBeDefined();
    if (permissionsHeader) {
        expect(permissionsHeader.value).toContain('camera=()');
        expect(permissionsHeader.value).toContain('microphone=()');
    }
  });

  it('should have strict HSTS', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const hstsHeader = globalHeaders.headers.find((h: Header) => h.key === 'Strict-Transport-Security');
    expect(hstsHeader).toBeDefined();
    if (hstsHeader) {
        expect(hstsHeader.value).toContain('max-age=63072000');
        expect(hstsHeader.value).toContain('includeSubDomains');
    }
  });

  it('should have X-Content-Type-Options set to nosniff', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const nosniffHeader = globalHeaders.headers.find((h: Header) => h.key === 'X-Content-Type-Options');
    expect(nosniffHeader).toBeDefined();
    if (nosniffHeader) {
        expect(nosniffHeader.value).toBe('nosniff');
    }
  });

  it('should have X-XSS-Protection set to 1; mode=block', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const xssHeader = globalHeaders.headers.find((h: Header) => h.key === 'X-XSS-Protection');
    expect(xssHeader).toBeDefined();
    if (xssHeader) {
        expect(xssHeader.value).toBe('1; mode=block');
    }
  });

  it('should have X-Frame-Options set to DENY', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const xFrameOptionsHeader = globalHeaders.headers.find((h: Header) => h.key === 'X-Frame-Options');
    expect(xFrameOptionsHeader).toBeDefined();
    if (xFrameOptionsHeader) {
        expect(xFrameOptionsHeader.value).toBe('DENY');
    }
  });

  it('should have X-Permitted-Cross-Domain-Policies set to none', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const crossDomainHeader = globalHeaders.headers.find((h: Header) => h.key === 'X-Permitted-Cross-Domain-Policies');
    expect(crossDomainHeader).toBeDefined();
    if (crossDomainHeader) {
        expect(crossDomainHeader.value).toBe('none');
    }
  });

  it('should have Cross-Origin-Opener-Policy set to same-origin', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const coopHeader = globalHeaders.headers.find((h: Header) => h.key === 'Cross-Origin-Opener-Policy');
    expect(coopHeader).toBeDefined();
    if (coopHeader) {
        expect(coopHeader.value).toBe('same-origin');
    }
  });

  it('should have Cross-Origin-Resource-Policy set to same-origin', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const corpHeader = globalHeaders.headers.find((h: Header) => h.key === 'Cross-Origin-Resource-Policy');
    expect(corpHeader).toBeDefined();
    if (corpHeader) {
        expect(corpHeader.value).toBe('same-origin');
    }
  });

  it('should have Referrer-Policy set to strict-origin-when-cross-origin', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const referrerPolicyHeader = globalHeaders.headers.find((h: Header) => h.key === 'Referrer-Policy');
    expect(referrerPolicyHeader).toBeDefined();
    if (referrerPolicyHeader) {
        expect(referrerPolicyHeader.value).toBe('strict-origin-when-cross-origin');
    }
  });

  it('should not have duplicate headers', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const keys = globalHeaders.headers.map((h: Header) => h.key);
    const uniqueKeys = new Set(keys);
    expect(keys.length).toBe(uniqueKeys.size);
  });
});
