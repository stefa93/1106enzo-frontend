import { TaskList } from '@/components/TaskList';
import UITest from '@/components/UITest';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="mb-8">
        <UITest />
      </div>
      <div className="mb-8">
        <TaskList />
      </div>
    </main>
  );
}
