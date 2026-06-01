export function Field({ label, htmlFor, hint, error, children }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={htmlFor} className="text-sm font-medium text-slate-200">
          {label}
        </label>
        {hint ? (
          <span className="text-xs text-slate-500" id={`${htmlFor}-hint`}>
            {hint}
          </span>
        ) : null}
      </div>
      {children}
      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border bg-surface-overlay px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors " +
  "border-surface-border focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20 focus:outline-none " +
  "disabled:cursor-not-allowed disabled:opacity-50";

export function Input({ error, className = "", ...props }) {
  return (
    <input
      className={[inputClass, error ? "border-red-500/60 focus:border-red-500/70 focus:ring-red-500/20" : "", className].join(" ")}
      aria-invalid={error ? true : undefined}
      {...props}
    />
  );
}

export function Textarea({ error, className = "", ...props }) {
  return (
    <textarea
      className={[inputClass, "resize-y min-h-[120px]", error ? "border-red-500/60 focus:border-red-500/70 focus:ring-red-500/20" : "", className].join(" ")}
      aria-invalid={error ? true : undefined}
      {...props}
    />
  );
}
