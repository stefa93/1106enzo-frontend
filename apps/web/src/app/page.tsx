import { TaskList } from '@/components/TaskList';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-8 text-4xl font-bold">Community Tasks</h1>
      <TaskList />
    </main>
  );
}
