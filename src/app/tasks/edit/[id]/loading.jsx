export default function EditLoading() {
  return (
    <div className="mx-auto max-w-lg animate-pulse space-y-6">
      <div className="h-4 w-32 rounded bg-surface-overlay" />
      <div className="rounded-2xl border border-surface-border bg-surface-raised p-8">
        <div className="h-6 w-48 rounded bg-surface-overlay" />
        <div className="mt-6 space-y-4">
          <div className="h-10 w-full rounded-lg bg-surface-overlay" />
          <div className="h-28 w-full rounded-lg bg-surface-overlay" />
          <div className="flex justify-end gap-2 pt-4">
            <div className="h-10 w-24 rounded-lg bg-surface-overlay" />
            <div className="h-10 w-32 rounded-lg bg-surface-overlay" />
          </div>
        </div>
      </div>
    </div>
  );
}
