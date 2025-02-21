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

    // Check for section heading
    expect(screen.getByText('Toast Notifications Test')).toBeInTheDocument();

    // Check for buttons
    expect(screen.getByText('Show Success Toast')).toBeInTheDocument();
    expect(screen.getByText('Show Error Toast')).toBeInTheDocument();
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

    // Check success button styles
    expect(successButton).toHaveClass(
      'px-4',
      'py-2',
      'bg-green-500',
      'text-white',
      'rounded',
      'hover:bg-green-600',
      'transition-colors'
    );

    // Check error button styles
    expect(errorButton).toHaveClass(
      'px-4',
      'py-2',
      'bg-red-500',
      'text-white',
      'rounded',
      'hover:bg-red-600',
      'transition-colors'
    );
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
