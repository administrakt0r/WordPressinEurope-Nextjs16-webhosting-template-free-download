
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

describe('CSP Enhancements', () => {
  it('should have strict connect-src', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const cspHeader = globalHeaders.headers.find((h: Header) => h.key === 'Content-Security-Policy');
    expect(cspHeader).toBeDefined();
    if (cspHeader) {
        expect(cspHeader.value).toContain("connect-src 'self' https://uptime.wpineu.com https://clients.wpineu.com https://wp.wpineu.com https://images.unsplash.com");
    }
  });

  it('should have strict worker-src', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const cspHeader = globalHeaders.headers.find((h: Header) => h.key === 'Content-Security-Policy');
    expect(cspHeader).toBeDefined();
    if (cspHeader) {
        expect(cspHeader.value).toContain("worker-src 'self' blob:");
    }
  });

  it('should have strict manifest-src', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const cspHeader = globalHeaders.headers.find((h: Header) => h.key === 'Content-Security-Policy');
    expect(cspHeader).toBeDefined();
    if (cspHeader) {
        expect(cspHeader.value).toContain("manifest-src 'self'");
    }
  });

  it('should have strict media-src', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const cspHeader = globalHeaders.headers.find((h: Header) => h.key === 'Content-Security-Policy');
    expect(cspHeader).toBeDefined();
    if (cspHeader) {
        expect(cspHeader.value).toContain("media-src 'self'");
    }
  });

  it('should have strict base-uri', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const cspHeader = globalHeaders.headers.find((h: Header) => h.key === 'Content-Security-Policy');
    expect(cspHeader).toBeDefined();
    if (cspHeader) {
        expect(cspHeader.value).toContain("base-uri 'self'");
    }
  });

  it('should have strict form-action', async () => {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');
    expect(globalHeaders).toBeDefined();

    if (!globalHeaders) return;

    const cspHeader = globalHeaders.headers.find((h: Header) => h.key === 'Content-Security-Policy');
    expect(cspHeader).toBeDefined();
    if (cspHeader) {
        expect(cspHeader.value).toContain("form-action 'self'");
    }
  });
});
