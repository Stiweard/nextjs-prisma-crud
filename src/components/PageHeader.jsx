export default function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <header className="mb-8 animate-slide-up sm:mb-10">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400/90">
          {eyebrow}
        </p>
      ) : null}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-2 text-base text-slate-400 leading-relaxed">{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex shrink-0 flex-wrap gap-2">{actions}</div> : null}
      </div>
    </header>
  );
}
