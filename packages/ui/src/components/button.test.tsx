import { cleanup, render, screen } from '@testing-library/react';
import * as React from 'react';
import { afterEach, describe, expect, test } from 'vitest';
import { Button } from './button';

afterEach(() => cleanup());

describe('Button', () => {
  test('renders with primary style', () => {
    render(<Button primary label="Test Button" />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-500');
  });

  test('renders with secondary style', () => {
    render(<Button label="Test Button" />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-gray-200');
  });
});
