import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ratelimit } from '@/lib/ratelimit';

describe('Middleware User-Agent Blocking', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should allow requests with normal user agents', () => {
    vi.spyOn(ratelimit, 'check').mockReturnValue(true);
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
    });
    const response = middleware(request);
    expect(response.status).toBe(200);
  });

  it('should block requests with sqlmap user agent', () => {
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: { 'user-agent': 'sqlmap/1.0' },
    });
    const response = middleware(request);
    expect(response.status).toBe(403);
    // Ensure security headers are present even on 403
    expect(response.headers.get('X-Frame-Options')).toBe('DENY');
    expect(response.headers.get('Content-Security-Policy')).toBeDefined();
  });

  it('should block requests with nikto user agent', () => {
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: { 'user-agent': 'Nikto' },
    });
    const response = middleware(request);
    expect(response.status).toBe(403);
  });

  it('should block requests with nuclei user agent', () => {
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: { 'user-agent': 'Nuclei' },
    });
    const response = middleware(request);
    expect(response.status).toBe(403);
  });

  it('should block requests with wpscan user agent', () => {
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: { 'user-agent': 'WPScan/3.8.20' },
    });
    const response = middleware(request);
    expect(response.status).toBe(403);
  });

  it('should block requests with hydra user agent', () => {
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: { 'user-agent': 'Hydra' },
    });
    const response = middleware(request);
    expect(response.status).toBe(403);
  });

  it('should block requests with zap user agent', () => {
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: { 'user-agent': 'ZAP/2.12.0' },
    });
    const response = middleware(request);
    expect(response.status).toBe(403);
  });

  it('should allow legitimate user agents that contain substrings of blocked terms', () => {
    // "john" was removed, but let's test a word boundary case.
    // "fuzz" is in the blocklist. "FuzzyBrowser" should NOT be blocked.
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; FuzzyBrowser/1.0)' },
    });
    const response = middleware(request);
    expect(response.status).toBe(200);
  });

  it('should allow legitimate words containing blocked terms', () => {
    // "buster" is in blocklist. "Ghostbuster" should NOT be blocked.
    const request = new NextRequest(new URL('https://wpineu.com/'), {
      headers: { 'user-agent': 'Ghostbuster/1.0' },
    });
    const response = middleware(request);
    expect(response.status).toBe(200);
  });
});
