import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, test } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  test('renders with primary style', () => {
    render(<Button primary label="Test Button" />);
    const button = screen.getByText('Test Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-500');
  });

  test('renders with secondary style', () => {
    render(<Button label="Test Button" />);
    const button = screen.getByText('Test Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-gray-200');
  });
});
