import { TaskList } from '@/components/TaskList';
import UITest from '@/components/UITest';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-8 text-4xl font-bold">Community Tasks</h1>
      <UITest />
      <div className="mt-8">
        <TaskList />
      </div>
    </main>
  );
}
