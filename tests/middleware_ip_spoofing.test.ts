import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ratelimit } from '@/lib/ratelimit';

// Mock ratelimit.check to spy on arguments
vi.mock('@/lib/ratelimit', async () => {
  const actual = await vi.importActual('@/lib/ratelimit');
  return {
    ...actual,
    ratelimit: {
      check: vi.fn().mockReturnValue(true),
    },
  };
});

describe('Middleware Security Fixes', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('IP Spoofing Protection', () => {
    it('should NOT use X-Forwarded-For first IP (FIXED BEHAVIOR)', () => {
      // Mock request.ip as undefined
      const request = new NextRequest(new URL('https://wpineu.com/'), {
        headers: { 'x-forwarded-for': '66.66.66.66, 1.1.1.1' },
      });
      Object.defineProperty(request, 'ip', { get: () => undefined });

      middleware(request);

      // Should fall back to 127.0.0.1 (safe default) instead of using spoofed IP
      expect(ratelimit.check).toHaveBeenCalledWith(100, '127.0.0.1');
      expect(ratelimit.check).not.toHaveBeenCalledWith(100, '66.66.66.66');
    });

    it('should use request.ip if available', () => {
      const request = new NextRequest(new URL('https://wpineu.com/'), {
        headers: { 'x-forwarded-for': '66.66.66.66, 1.1.1.1' },
      });
      Object.defineProperty(request, 'ip', { get: () => '8.8.8.8' });

      middleware(request);

      expect(ratelimit.check).toHaveBeenCalledWith(100, '8.8.8.8');
    });
  });

  describe('DoS Protection', () => {
    it('should allow normal length User-Agent', () => {
      const request = new NextRequest(new URL('https://wpineu.com/'), {
        headers: { 'user-agent': 'Mozilla/5.0' },
      });
      const response = middleware(request);
      expect(response.status).toBe(200);
    });

    it('should block long User-Agent (FIXED BEHAVIOR)', () => {
        const longUA = 'A'.repeat(3000);
        const request = new NextRequest(new URL('https://wpineu.com/'), {
            headers: { 'user-agent': longUA },
        });
        const response = middleware(request);
        expect(response.status).toBe(403);
    });
  });
});
