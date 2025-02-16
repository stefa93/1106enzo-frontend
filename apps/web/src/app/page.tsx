import { BrandTest } from '@/components/BrandTest';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Tailwind Configuration Demo</h1>
      <BrandTest className="max-w-4xl" />
    </main>
  );
}
