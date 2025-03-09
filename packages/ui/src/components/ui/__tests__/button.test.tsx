import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from '../button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders with loading state', () => {
    render(<Button loading>Click me</Button>);
    const buttons = screen.getAllByText('Click me');
    const loadingButton = buttons
      .find((button) => button.parentElement?.querySelector('.animate-spin'))
      ?.closest('button');
    expect(loadingButton).toBeDisabled();
    expect(loadingButton).toHaveClass('disabled:opacity-50');
  });

  it('renders with left icon', () => {
    render(<Button leftIcon={<span data-testid="left-icon">←</span>}>Click me</Button>);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    render(<Button rightIcon={<span data-testid="right-icon">→</span>}>Click me</Button>);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('renders different variants', () => {
    const { rerender } = render(<Button variant="default">Default</Button>);
    expect(screen.getByText('Default').closest('button')).toHaveClass('bg-primary');

    rerender(<Button variant="destructive">Destructive</Button>);
    expect(screen.getByText('Destructive').closest('button')).toHaveClass('bg-destructive');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByText('Outline').closest('button')).toHaveClass('border-input');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText('Secondary').closest('button')).toHaveClass('bg-secondary');

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByText('Ghost').closest('button')).toHaveClass('hover:bg-accent');

    rerender(<Button variant="link">Link</Button>);
    expect(screen.getByText('Link').closest('button')).toHaveClass('text-primary');
  });

  it('renders different sizes', () => {
    const { rerender } = render(<Button size="default">Default</Button>);
    expect(screen.getByText('Default').closest('button')).toHaveClass('h-9');

    rerender(<Button size="sm">Small</Button>);
    expect(screen.getByText('Small').closest('button')).toHaveClass('h-8');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByText('Large').closest('button')).toHaveClass('h-10');

    rerender(<Button size="icon">Icon</Button>);
    expect(screen.getByText('Icon').closest('button')).toHaveClass('h-9', 'w-9');
  });
});
