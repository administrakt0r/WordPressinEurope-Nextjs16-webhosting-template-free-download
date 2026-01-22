
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { ObfuscatedMailto } from '@/components/ui/ObfuscatedMailto';

describe('ObfuscatedMailto Component', () => {
    it('should render the email text', () => {
        render(<ObfuscatedMailto email="test@example.com" />);
        expect(screen.getByText('test@example.com')).toBeDefined();
    });

    it('should eventually have the correct mailto href', async () => {
        render(<ObfuscatedMailto email="test@example.com" />);
        const link = screen.getByText('test@example.com') as HTMLAnchorElement;

        // Initially it should be null/undefined (server state)
        expect(link.getAttribute('href')).toBeNull();

        // Eventually it should be the mailto link (client state)
        await waitFor(() => {
            expect(link.getAttribute('href')).toBe('mailto:test@example.com');
        });
    });

    it('should support custom children', () => {
        render(<ObfuscatedMailto email="test@example.com">Contact Us</ObfuscatedMailto>);
        expect(screen.getByText('Contact Us')).toBeDefined();
        expect(screen.queryByText('test@example.com')).toBeNull();
    });

    it('should support headers (subject, body)', async () => {
        render(<ObfuscatedMailto email="test@example.com" headers={{ subject: "Hello", body: "World" }} />);
        const link = screen.getByText('test@example.com') as HTMLAnchorElement;

        await waitFor(() => {
             expect(link.getAttribute('href')).toBe('mailto:test@example.com?subject=Hello&body=World');
        });
    });

    it('should pass through className', () => {
        render(<ObfuscatedMailto email="test@example.com" className="text-red-500" />);
        const link = screen.getByText('test@example.com');
        expect(link.className).toContain('text-red-500');
    });
});
