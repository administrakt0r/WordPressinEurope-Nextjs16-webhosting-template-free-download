import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

describe('Breadcrumbs Component', () => {
  it('renders nothing when items list is empty', () => {
    const { container } = render(<Breadcrumbs items={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders home icon always as first item', () => {
    render(<Breadcrumbs items={[{ label: 'Test', href: '/test' }]} />);
    const homeLink = screen.getByLabelText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders items correctly', () => {
    const items = [
      { label: 'Level 1', href: '/level-1' },
      { label: 'Level 2', href: '/level-2' },
    ];
    render(<Breadcrumbs items={items} />);

    // Level 1 should be a link
    const link1 = screen.getByRole('link', { name: 'Level 1' });
    expect(link1).toHaveAttribute('href', '/level-1');

    // Level 2 should be text (current page)
    const text2 = screen.getByText('Level 2');
    expect(text2).toBeInTheDocument();
    expect(text2).not.toHaveAttribute('href');
    expect(text2).toHaveAttribute('aria-current', 'page');
  });

  it('applies custom className', () => {
    render(
      <Breadcrumbs
        items={[{ label: 'Test', href: '/test' }]}
        className="custom-class"
      />
    );
    const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
    expect(nav).toHaveClass('custom-class');
  });
});
