import type React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  className = '',
}) => {
  const baseStyles =
    'rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-brand hover:bg-brand-600 text-white focus:ring-brand-500',
    secondary: 'bg-brand-100 text-brand-900 hover:bg-brand-200 focus:ring-brand-500',
    outline: 'border-2 border-brand hover:bg-brand-50 text-brand focus:ring-brand-500',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const isDisabled = disabled || loading;
  const loadingStyles = loading ? 'opacity-75 cursor-not-allowed' : '';
  const disabledStyles = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

  const buttonProps = {
    type: 'button' as const,
    className:
      `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${loadingStyles} ${disabledStyles} ${className}`.trim(),
    onClick: !isDisabled ? onClick : undefined,
    disabled: isDisabled,
    'aria-disabled': isDisabled,
  };

  return (
    <button {...buttonProps}>
      {loading ? (
        <span className="flex items-center space-x-2">
          <svg
            className="animate-spin h-4 w-4"
            viewBox="0 0 24 24"
            role="presentation"
            aria-label="Loading"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};
