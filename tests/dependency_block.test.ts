import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ratelimit } from '@/lib/ratelimit';

describe('Middleware Dependency File Blocking', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    // Mock rate limit to always pass
    vi.spyOn(ratelimit, 'check').mockReturnValue(true);
  });

  const SENSITIVE_FILES = [
    '/package.json',
    '/package-lock.json',
    '/pnpm-lock.yaml',
    '/yarn.lock',
    '/composer.json',
    '/composer.lock',
    '/npm-debug.log',
    '/yarn-error.log',
    '/pnpm-debug.log'
  ];

  it('should BLOCK access to dependency and log files', () => {
    SENSITIVE_FILES.forEach((path) => {
      const request = new NextRequest(new URL(`https://wpineu.com${path}`));
      const response = middleware(request);

      // We expect these to be blocked (403)
      // If they are not blocked, the status will likely be 200 (NextResponse.next())
      expect(response.status, `Path ${path} should be blocked (403)`).toBe(403);
    });
  });
});
