import { TaskList } from '@/components/features/task/TaskList';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="mb-8">
        <TaskList />
      </div>
    </main>
  );
}
