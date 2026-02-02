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

async function getGlobalHeaders(): Promise<Header[]> {
    if (!nextConfig.headers) {
      throw new Error('nextConfig.headers is undefined');
    }
    const headersConfig = await nextConfig.headers();
    const globalHeaders = headersConfig.find((h: HeaderConfig) => h.source === '/:path*');

    if (!globalHeaders) {
        throw new Error('Global headers configuration for /:path* not found');
    }

    return globalHeaders.headers;
}

describe('Security Headers', () => {
  it('should have strict Permissions-Policy', async () => {
    const headers = await getGlobalHeaders();
    const permissionsHeader = headers.find((h: Header) => h.key === 'Permissions-Policy');

    expect(permissionsHeader).toBeDefined();
    if (permissionsHeader) {
        expect(permissionsHeader.value).toContain('camera=()');
        expect(permissionsHeader.value).toContain('microphone=()');
        expect(permissionsHeader.value).toContain('bluetooth=()');
        expect(permissionsHeader.value).toContain('serial=()');
        expect(permissionsHeader.value).toContain('hid=()');
        expect(permissionsHeader.value).toContain('battery=()');
    }
  });

  it('should have strict HSTS', async () => {
    const headers = await getGlobalHeaders();
    const hstsHeader = headers.find((h: Header) => h.key === 'Strict-Transport-Security');

    expect(hstsHeader).toBeDefined();
    if (hstsHeader) {
        expect(hstsHeader.value).toContain('max-age=63072000');
        expect(hstsHeader.value).toContain('includeSubDomains');
    }
  });

  it('should have X-Content-Type-Options set to nosniff', async () => {
    const headers = await getGlobalHeaders();
    const nosniffHeader = headers.find((h: Header) => h.key === 'X-Content-Type-Options');

    expect(nosniffHeader).toBeDefined();
    if (nosniffHeader) {
        expect(nosniffHeader.value).toBe('nosniff');
    }
  });

  it('should NOT have X-XSS-Protection header', async () => {
    const headers = await getGlobalHeaders();
    const xssHeader = headers.find((h: Header) => h.key === 'X-XSS-Protection');
    expect(xssHeader).toBeUndefined();
  });

  it('should have X-Frame-Options set to DENY', async () => {
    const headers = await getGlobalHeaders();
    const xFrameOptionsHeader = headers.find((h: Header) => h.key === 'X-Frame-Options');

    expect(xFrameOptionsHeader).toBeDefined();
    if (xFrameOptionsHeader) {
        expect(xFrameOptionsHeader.value).toBe('DENY');
    }
  });

  it('should have X-Permitted-Cross-Domain-Policies set to none', async () => {
    const headers = await getGlobalHeaders();
    const crossDomainHeader = headers.find((h: Header) => h.key === 'X-Permitted-Cross-Domain-Policies');

    expect(crossDomainHeader).toBeDefined();
    if (crossDomainHeader) {
        expect(crossDomainHeader.value).toBe('none');
    }
  });

  it('should have Cross-Origin-Opener-Policy set to same-origin', async () => {
    const headers = await getGlobalHeaders();
    const coopHeader = headers.find((h: Header) => h.key === 'Cross-Origin-Opener-Policy');

    expect(coopHeader).toBeDefined();
    if (coopHeader) {
        expect(coopHeader.value).toBe('same-origin');
    }
  });

  it('should have Cross-Origin-Resource-Policy set to same-origin', async () => {
    const headers = await getGlobalHeaders();
    const corpHeader = headers.find((h: Header) => h.key === 'Cross-Origin-Resource-Policy');

    expect(corpHeader).toBeDefined();
    if (corpHeader) {
        expect(corpHeader.value).toBe('same-origin');
    }
  });

  it('should have Referrer-Policy set to strict-origin-when-cross-origin', async () => {
    const headers = await getGlobalHeaders();
    const referrerPolicyHeader = headers.find((h: Header) => h.key === 'Referrer-Policy');

    expect(referrerPolicyHeader).toBeDefined();
    if (referrerPolicyHeader) {
        expect(referrerPolicyHeader.value).toBe('strict-origin-when-cross-origin');
    }
  });

  it('should not have duplicate headers', async () => {
    const headers = await getGlobalHeaders();
    const keys = headers.map((h: Header) => h.key);
    const uniqueKeys = new Set(keys);
    expect(keys.length).toBe(uniqueKeys.size);
  });
});
