'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Task {
  id: number;
  attributes: {
    title: string;
    description: string;
    category: string;
    status: string;
    location: string;
  };
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/tasks`);
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        setTasks(data.data);
        setError(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'An error occurred';
        setError(message);
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div data-testid="tasks-loading">Loading tasks...</div>;
  }

  if (error) {
    return (
      <div role="alert" data-testid="tasks-error">
        {error}
      </div>
    );
  }

  return (
    <div data-testid="tasks-list" className="space-y-4">
      <h2 className="text-2xl font-bold">Community Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-lg border border-gray-200 p-4 shadow-sm"
              data-testid={`task-${task.id}`}
            >
              <h3 className="text-lg font-semibold">{task.attributes.title}</h3>
              <p className="mt-2 text-gray-600">{task.attributes.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-sm text-brand-800">
                  {task.attributes.category}
                </span>
                <span className="text-sm text-gray-500">{task.attributes.location}</span>
              </div>
              <div className="mt-2 text-right">
                <span className="text-sm font-medium text-brand">{task.attributes.status}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
