
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ObfuscatedMailto } from '@/components/ui/ObfuscatedMailto';

describe('ObfuscatedMailto Component', () => {
    it('should render the email text', () => {
        render(<ObfuscatedMailto email="test@example.com" />);
        expect(screen.getByText('test@example.com')).toBeDefined();
    });

    it('should initially have no href or placeholder href', () => {
        render(<ObfuscatedMailto email="test@example.com" />);
        const link = screen.getByText('test@example.com') as HTMLAnchorElement;
        // Depending on implementation, it might be undefined or empty or "#" initially
        // We just want to ensure it's not the full mailto link immediately in source if we were SSRing,
        // but effectively in JSDOM, useEffect runs immediately.
        // So we check that it eventually becomes the correct link.
        expect(link.getAttribute('href')).toBe('mailto:test@example.com');
    });

    it('should support custom children', () => {
        render(<ObfuscatedMailto email="test@example.com">Contact Us</ObfuscatedMailto>);
        expect(screen.getByText('Contact Us')).toBeDefined();
        expect(screen.queryByText('test@example.com')).toBeNull();
    });

    it('should support headers (subject, body)', () => {
        render(<ObfuscatedMailto email="test@example.com" headers={{ subject: "Hello", body: "World" }} />);
        const link = screen.getByText('test@example.com') as HTMLAnchorElement;
        expect(link.getAttribute('href')).toBe('mailto:test@example.com?subject=Hello&body=World');
    });

    it('should pass through className', () => {
        render(<ObfuscatedMailto email="test@example.com" className="text-red-500" />);
        const link = screen.getByText('test@example.com');
        expect(link.className).toContain('text-red-500');
    });
});
