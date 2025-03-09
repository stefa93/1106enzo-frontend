import * as React from 'react';

export interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({ primary = false, label, onClick }: ButtonProps) => {
  const baseClasses = 'rounded-lg px-4 py-2 font-semibold transition-colors';
  const colorClasses = primary
    ? 'bg-blue-500 text-white hover:bg-blue-600'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <button type="button" className={`${baseClasses} ${colorClasses}`} onClick={onClick}>
      {label}
    </button>
  );
};
