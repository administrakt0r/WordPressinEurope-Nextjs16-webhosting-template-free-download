import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExternalLink } from '@/components/ui/ExternalLink';

// Mock the security library to isolate component testing
vi.mock('@/lib/security', () => ({
  isSafeUrl: vi.fn((url) => {
    if (url === 'javascript:alert(1)') return false;
    return true;
  }),
}));

describe('ExternalLink Component', () => {
  it('renders correctly with safe URL', () => {
    render(
      <ExternalLink href="https://example.com" className="test-class">
        Click me
      </ExternalLink>
    );

    const link = screen.getByRole('link', { name: /click me/i });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveClass('test-class');
  });

  it('renders screen reader text', () => {
    render(
      <ExternalLink href="https://example.com">
        Click me
      </ExternalLink>
    );

    const srText = screen.getByText('(opens in a new tab)');
    expect(srText).toHaveClass('sr-only');
  });

  it('handles unsafe URLs by replacing with #', () => {
    render(
      <ExternalLink href="javascript:alert(1)">
        Unsafe Link
      </ExternalLink>
    );

    const link = screen.getByRole('link', { name: /unsafe link/i });
    expect(link).toHaveAttribute('href', '#');
  });

  it('passes through other props like aria-label', () => {
    render(
      <ExternalLink href="https://example.com" ariaLabel="Custom Label">
        Click me
      </ExternalLink>
    );

    const link = screen.getByRole('link', { name: /custom label/i });
    expect(link).toBeInTheDocument();
  });
});
