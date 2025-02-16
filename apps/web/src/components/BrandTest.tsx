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
            className="rounded-md bg-brand px-4 py-2 text-white transition-colors hover:bg-brand-600"
          >
            Brand Button
          </button>
          <p className="cursor-pointer text-brand hover:text-brand-700">
            Hover me to see color change
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Color Scale</h3>
          <div className="space-y-1">
            <div className="h-6 rounded bg-brand-50" />
            <div className="h-6 rounded bg-brand-100" />
            <div className="h-6 rounded bg-brand-200" />
            <div className="h-6 rounded bg-brand-300" />
            <div className="h-6 rounded bg-brand-400" />
            <div className="h-6 rounded bg-brand-500" />
            <div className="h-6 rounded bg-brand-600" />
            <div className="h-6 rounded bg-brand-700" />
            <div className="h-6 rounded bg-brand-800" />
            <div className="h-6 rounded bg-brand-900" />
          </div>
        </div>
      </div>
    </div>
  );
}
