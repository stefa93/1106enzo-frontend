import { TaskList } from '@/components/TaskList';
import UITest from '@/components/UITest';
import { Button } from '@enzo/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <Button primary label="Primary Button Example" />
          <div>
            <Button label="Secondary Button Example" />
          </div>
        </div>
        <UITest />
        <TaskList />
      </div>
    </main>
  );
}
