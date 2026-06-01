import Link from "next/link";
import { formatDate, formatRelativeDate } from "@/lib/format";
import { IconPencil } from "@/components/icons";

export default function TaskCard({ task }) {
  return (
    <article className="group relative h-full">
      <Link
        href={`/tasks/edit/${task.id}`}
        className="flex h-full flex-col rounded-xl border border-surface-border bg-surface-raised p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/30 hover:shadow-card-hover"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-base font-semibold leading-snug text-white group-hover:text-blue-100">
            {task.title}
          </h3>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-overlay text-slate-500 opacity-0 ring-1 ring-surface-border transition-all group-hover:opacity-100 group-focus-visible:opacity-100">
            <IconPencil />
          </span>
        </div>

        {task.description ? (
          <p className="mt-3 flex-1 line-clamp-3 text-sm leading-relaxed text-slate-400">
            {task.description}
          </p>
        ) : (
          <p className="mt-3 flex-1 text-sm italic text-slate-600">Sin descripción</p>
        )}

        <footer className="mt-4 flex items-center justify-between gap-2 border-t border-surface-border/80 pt-4">
          <time
            dateTime={new Date(task.createdAt).toISOString()}
            className="text-xs text-slate-500"
            title={formatDate(task.createdAt)}
          >
            {formatRelativeDate(task.createdAt)}
          </time>
          <span className="text-xs font-medium text-blue-400/80 opacity-0 transition-opacity group-hover:opacity-100">
            Editar →
          </span>
        </footer>
      </Link>
    </article>
  );
}
