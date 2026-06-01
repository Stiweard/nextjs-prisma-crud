import { notFound } from "next/navigation";
import { getTask } from "@/actions/tasks";
import TaskForm from "@/components/TaskForm";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const task = await getTask(id);
  return {
    title: task ? `Editar: ${task.title}` : "Editar tarea",
  };
}

export default async function EditTaskPage({ params }) {
  const { id } = await params;
  const task = await getTask(id);

  if (!task) {
    notFound();
  }

  return <TaskForm task={task} />;
}
