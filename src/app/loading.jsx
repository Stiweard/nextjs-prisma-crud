import PageHeader from "@/components/PageHeader";
import TaskListSkeleton from "@/components/TaskListSkeleton";

export default function Loading() {
  return (
    <>
      <PageHeader
        eyebrow="Panel"
        title="Mis tareas"
        description="Cargando tu lista…"
      />
      <TaskListSkeleton />
    </>
  );
}
