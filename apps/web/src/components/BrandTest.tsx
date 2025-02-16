'use client';

interface BrandTestProps {
  className?: string;
}

export function BrandTest({ className = '' }: BrandTestProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <h2 className="text-2xl font-bold text-brand">Brand Color Test</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="font-semibold">Default & Hover States</h3>
          <button
            type="button"
            className="px-4 py-2 text-white bg-brand hover:bg-brand-600 rounded-md transition-colors"
          >
            Brand Button
          </button>
          <p className="text-brand hover:text-brand-700 cursor-pointer">
            Hover me to see color change
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Color Scale</h3>
          <div className="space-y-1">
            <div className="h-6 bg-brand-50 rounded" />
            <div className="h-6 bg-brand-100 rounded" />
            <div className="h-6 bg-brand-200 rounded" />
            <div className="h-6 bg-brand-300 rounded" />
            <div className="h-6 bg-brand-400 rounded" />
            <div className="h-6 bg-brand-500 rounded" />
            <div className="h-6 bg-brand-600 rounded" />
            <div className="h-6 bg-brand-700 rounded" />
            <div className="h-6 bg-brand-800 rounded" />
            <div className="h-6 bg-brand-900 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
} 