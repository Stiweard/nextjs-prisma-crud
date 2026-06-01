import { getTasks } from "@/actions/tasks";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";
import TaskCard from "@/components/TaskCard";
import { IconPlus } from "@/components/icons";
import Button from "@/components/ui/Button";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Tareas",
};

function TaskStats({ count }) {
  if (count === 0) return null;

  return (
    <div className="mb-6 flex flex-wrap gap-2 animate-fade-in">
      <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 ring-1 ring-blue-500/20">
        {count} {count === 1 ? "tarea" : "tareas"}
      </span>
      <span className="inline-flex items-center rounded-full bg-surface-overlay px-3 py-1 text-xs text-slate-400 ring-1 ring-surface-border">
        Ordenadas por más recientes
      </span>
    </div>
  );
}

export default async function Home() {
  const tasks = await getTasks();

  return (
    <>
      <PageHeader
        eyebrow="Panel"
        title="Mis tareas"
        description={
          tasks.length === 0
            ? "Gestiona tus pendientes en un solo lugar."
            : `Tienes ${tasks.length} tarea${tasks.length === 1 ? "" : "s"} en tu lista.`
        }
        actions={
          tasks.length > 0 ? (
            <Button href="/new">
              <IconPlus className="h-4 w-4" />
              Nueva tarea
            </Button>
          ) : null
        }
      />

      <TaskStats count={tasks.length} />

      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
