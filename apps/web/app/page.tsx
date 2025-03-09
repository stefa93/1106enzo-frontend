import { TaskList } from '@/components/TaskList';
import UITest from '@/components/UITest';
import { Button } from '@enzo/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <Button variant="default">Primary Button Example</Button>
          <div>
            <Button variant="secondary">Secondary Button Example</Button>
          </div>
        </div>
        <UITest />
        <TaskList />
      </div>
    </main>
  );
}
