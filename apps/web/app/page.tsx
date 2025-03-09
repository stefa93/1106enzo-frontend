import { Button } from '@enzo/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="space-y-4">
        <Button primary label="Primary Button Example" />
        <div>
          <Button label="Secondary Button Example" />
        </div>
      </div>
    </main>
  );
}
