import { describe, it, expect } from 'vitest';
import { EXTERNAL_LINKS } from '@/lib/links';

describe('External Links Security', () => {
    it('should use HTTPS for all external links', () => {
        Object.entries(EXTERNAL_LINKS).forEach(([key, url]) => {
            if (url.startsWith('mailto:') || key.endsWith('_EMAIL') || (url.includes('@') && !url.includes('://'))) {
                return; // Skip mailto links and raw email addresses
            }
            try {
                const urlObj = new URL(url);
                expect(urlObj.protocol).toBe('https:');
            } catch {
                // If it's not a valid URL, fail the test
                throw new Error(`Invalid URL for ${key}: ${url}`);
            }
        });
    });

    it('should not contain any localhost links', () => {
        Object.values(EXTERNAL_LINKS).forEach((url) => {
            expect(url).not.toContain('localhost');
            expect(url).not.toContain('127.0.0.1');
        });
    });
});
