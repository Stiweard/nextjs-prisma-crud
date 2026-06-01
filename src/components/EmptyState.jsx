import { IconEmpty, IconPlus } from "@/components/icons";
import Button from "@/components/ui/Button";

export default function EmptyState() {
  return (
    <div
      className="animate-slide-up flex flex-col items-center justify-center rounded-2xl border border-dashed border-surface-border bg-surface-raised/50 px-6 py-16 text-center sm:py-20"
      role="status"
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-overlay text-slate-500 ring-1 ring-surface-border">
        <IconEmpty />
      </div>
      <h2 className="text-lg font-semibold text-white">Sin tareas todavía</h2>
      <p className="mt-2 max-w-sm text-sm text-slate-400 leading-relaxed">
        Organiza tu día creando tu primera tarea. Podrás editarla o eliminarla cuando quieras.
      </p>
      <Button href="/new" size="lg" className="mt-8">
        <IconPlus className="h-4 w-4" />
        Crear primera tarea
      </Button>
    </div>
  );
}
