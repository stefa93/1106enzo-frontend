import { fireEvent, render, screen } from '@testing-library/react';
import { toast } from 'react-toastify';
import { describe, expect, it, vi } from 'vitest';
import UITest from '../UITest';

// Mock react-toastify
vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe('UITest Component', () => {
  it('renders the component correctly', () => {
    render(<UITest />);

    // Check for main heading
    expect(screen.getByText('UI Components Test')).toBeInTheDocument();

    // Check for section headings
    expect(screen.getByText('Icons Test')).toBeInTheDocument();
    expect(screen.getByText('Toast Notifications Test')).toBeInTheDocument();

    // Check for buttons
    expect(screen.getByText('Show Success Toast')).toBeInTheDocument();
    expect(screen.getByText('Show Error Toast')).toBeInTheDocument();
  });

  it('renders icons with correct styles', () => {
    render(<UITest />);

    // Find icons by their class names
    const bell = screen.getByTestId('icon-bell');
    const menu = screen.getByTestId('icon-menu');
    const chevron = screen.getByTestId('icon-chevron');

    // Check if icons have the correct classes
    expect(bell).toHaveClass('h-6', 'w-6', 'text-brand');
    expect(menu).toHaveClass('h-6', 'w-6', 'text-brand-600');
    expect(chevron).toHaveClass('h-4', 'w-4', 'text-brand-800');
  });

  it('calls toast.success with correct parameters when clicking success button', () => {
    render(<UITest />);

    const successButton = screen.getByTestId('show-success-toast');
    fireEvent.click(successButton);

    expect(toast.success).toHaveBeenCalledWith('This is a success message!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  });

  it('calls toast.error with correct parameters when clicking error button', () => {
    render(<UITest />);

    const errorButton = screen.getByTestId('show-error-toast');
    fireEvent.click(errorButton);

    expect(toast.error).toHaveBeenCalledWith('This is an error message!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  });

  it('has correct button styles', () => {
    render(<UITest />);

    const successButton = screen.getByTestId('show-success-toast');
    const errorButton = screen.getByTestId('show-error-toast');

    // Success button should have primary variant styles
    expect(successButton).toHaveClass(
      'rounded',
      'font-medium',
      'transition-colors',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'bg-brand',
      'hover:bg-brand-600',
      'text-white',
      'focus:ring-brand-500',
      'px-4',
      'py-2',
      'text-base'
    );

    // Error button should have outline variant with custom styles
    expect(errorButton).toHaveClass('bg-red-500', 'text-white', 'hover:bg-red-600');
  });

  it('has correct ARIA roles and types for accessibility', () => {
    render(<UITest />);

    const successButton = screen.getByTestId('show-success-toast');
    const errorButton = screen.getByTestId('show-error-toast');

    // Check button types
    expect(successButton).toHaveAttribute('type', 'button');
    expect(errorButton).toHaveAttribute('type', 'button');
  });

  it('maintains consistent toast configuration across multiple calls', () => {
    render(<UITest />);
    const successButton = screen.getByTestId('show-success-toast');

    // Click multiple times to verify consistent behavior
    fireEvent.click(successButton);
    fireEvent.click(successButton);

    const expectedConfig = {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    };

    // Verify both calls used the same configuration
    expect(toast.success).toHaveBeenNthCalledWith(1, 'This is a success message!', expectedConfig);
    expect(toast.success).toHaveBeenNthCalledWith(2, 'This is a success message!', expectedConfig);
  });

  it('uses same base configuration for both success and error toasts', () => {
    render(<UITest />);
    const successButton = screen.getByTestId('show-success-toast');
    const errorButton = screen.getByTestId('show-error-toast');

    // Trigger both types of toasts
    fireEvent.click(successButton);
    fireEvent.click(errorButton);

    const expectedConfig = {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    };

    // Verify both toast types use the same configuration
    expect(toast.success).toHaveBeenCalledWith('This is a success message!', expectedConfig);
    expect(toast.error).toHaveBeenCalledWith('This is an error message!', expectedConfig);
  });
});
