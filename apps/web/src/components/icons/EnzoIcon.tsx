'use client';

import type { IconProps } from './index';

export function EnzoIcon({ size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Enzo"
      role="img"
      {...props}
    >
      {/* Stylized @ symbol */}
      <circle cx="12" cy="12" r="4" />
      <path d="M16 12a4 4 0 0 0-8 0" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      <title>Enzo Icon</title>
    </svg>
  );
}

EnzoIcon.displayName = 'EnzoIcon';
