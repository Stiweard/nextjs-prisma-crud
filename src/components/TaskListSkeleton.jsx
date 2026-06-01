export default function TaskListSkeleton({ count = 6 }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className="h-[168px] rounded-xl border border-surface-border bg-surface-raised p-5"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <div className="h-5 w-3/4 animate-pulse rounded-md bg-surface-overlay" />
          <div className="mt-4 space-y-2">
            <div className="h-3 w-full animate-pulse rounded bg-surface-overlay" />
            <div className="h-3 w-5/6 animate-pulse rounded bg-surface-overlay" />
          </div>
          <div className="mt-6 h-3 w-1/4 animate-pulse rounded bg-surface-overlay" />
        </li>
      ))}
    </ul>
  );
}
