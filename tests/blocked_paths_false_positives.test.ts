import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ratelimit } from '@/lib/ratelimit';

describe('Middleware Blocked Paths False Positives', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    // Mock rate limit to always pass
    vi.spyOn(ratelimit, 'check').mockReturnValue(true);
  });

  const SAFE_PATHS_NOW_ALLOWED = [
    '/blog/using-.env-files',
    '/images/icon.env.png',
    '/my-wp-config.php-guide',
    '/products/xmlrpc.php-client',
    '/documentation/git-tutorial' // Re-adding this as it should also be allowed
  ];

  const ACTUAL_SENSITIVE_PATHS = [
    '/.env',
    '/config/.env',
    '/.env.local',
    '/.git/config',
    '/wp-config.php',
    '/admin/xmlrpc.php',
    '/wp-config.php.bak'
  ];

  it('should ALLOW safe paths that contain blocked terms (Fix verified)', () => {
    SAFE_PATHS_NOW_ALLOWED.forEach((path) => {
      const request = new NextRequest(new URL(`https://wpineu.com${path}`));
      const response = middleware(request);

      // Should NOT be 403.
      // If it passes middleware, it returns NextResponse.next() which usually has status 200
      expect(response.status, `Path ${path} should be allowed`).not.toBe(403);
    });
  });

  it('should BLOCK actually sensitive paths', () => {
    ACTUAL_SENSITIVE_PATHS.forEach((path) => {
      const request = new NextRequest(new URL(`https://wpineu.com${path}`));
      const response = middleware(request);
      expect(response.status, `Path ${path} should be blocked`).toBe(403);
    });
  });
});
