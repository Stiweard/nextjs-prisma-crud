import { prisma } from "@/libs/prisma";
import TaskCard from '@/components/TaskCard';
import NavBar from '@/components/NavBar';

async function loadTasks() {
  // const res = await fetch('http://localhost:3000/api/tasks')
  // const data = await res.json()
  const data = await prisma.task.findMany()
  console.log(data);
  return data;
}

// export const revalidate = 30;

export const dynamic = 'force-dynamic';

export default async function Home() {

  const tasks = await loadTasks();

  return (
    <div className="bg-white h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Tareas creadas</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
      <NavBar />
    </div>
  )
}
