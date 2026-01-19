import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExternalLink } from '@/components/ui/ExternalLink';
import nextConfig from '@/next.config';
import { safeJsonLd } from '@/lib/security';
import fs from 'fs';
import path from 'path';

interface Header {
    key: string;
    value: string;
}

interface HeaderConfig {
    source: string;
    headers: Header[];
}

describe('Security Enhancements', () => {
  it('ExternalLink component should have target="_blank" and rel="noopener noreferrer"', () => {
    render(<ExternalLink href="https://example.com">Example</ExternalLink>);
    const link = screen.getByRole('link', { name: /example/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('ExternalLink component should have screen-reader only text', () => {
    render(<ExternalLink href="https://example.com">Example</ExternalLink>);
    // The ExternalLink component adds "(opens in a new tab)" in a span with sr-only class
    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('(opens in a new tab)');
  });

  it('should have poweredByHeader set to false', () => {
    expect(nextConfig.poweredByHeader).toBe(false);
  });

  it('should sanitize JSON-LD data correctly', () => {
    const maliciousData = {
      name: '<script>alert("xss")</script>',
      description: 'Normal description'
    };
    const sanitized = safeJsonLd(maliciousData);

    // safeJsonLd returns a stringified JSON with escaped HTML entities
    // We expect the script tags to be escaped or removed, depending on implementation.
    // Based on memory/grep, it escapes.
    expect(sanitized).not.toContain('<script>');
    expect(sanitized).toContain('\\u003cscript\\u003e');
  });

  it('should have security.txt file', () => {
    const securityTxtPath = path.join(process.cwd(), 'public', '.well-known', 'security.txt');
    expect(fs.existsSync(securityTxtPath)).toBe(true);
  });
});
