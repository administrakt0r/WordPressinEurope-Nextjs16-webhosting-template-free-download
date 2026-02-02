import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CopyButton } from '@/components/ui/CopyButton';

describe('CopyButton Component', () => {
  const originalClipboard = navigator.clipboard;

  beforeEach(() => {
    // Mock navigator.clipboard
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    });
  });

  afterEach(() => {
    // Restore clipboard
    Object.assign(navigator, {
      clipboard: originalClipboard,
    });
    vi.restoreAllMocks();
  });

  it('should render a button with type="button"', () => {
    render(<CopyButton text="Test text" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should copy text to clipboard when clicked', async () => {
    render(<CopyButton text="Test text" />);
    const button = screen.getByRole('button');

    await fireEvent.click(button);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Test text');
  });

  it('should show feedback after copying', async () => {
    render(<CopyButton text="Test text" />);
    const button = screen.getByRole('button');

    // Initial state
    expect(screen.getByLabelText('Copy to clipboard')).toBeInTheDocument();

    await fireEvent.click(button);

    // Copied state (Mock state update might be async or immediate depending on React 19)
    // We can use findByLabelText to wait for the update
    expect(await screen.findByLabelText('Copied')).toBeInTheDocument();
  });
});
