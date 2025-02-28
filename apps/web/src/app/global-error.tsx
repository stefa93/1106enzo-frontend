'use client';

import { Inter } from 'next/font/google';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h1 className="mb-4 text-4xl font-bold">Something went wrong!</h1>
          <p className="mb-4 text-gray-600">{error.message || 'An unexpected error occurred.'}</p>
          <button
            onClick={reset}
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
