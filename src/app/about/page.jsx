import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Acerca de",
};

const stack = [
  { name: "Next.js 16", desc: "App Router y Server Actions" },
  { name: "Prisma 6", desc: "ORM tipado sobre PostgreSQL" },
  { name: "React 19", desc: "UI con transiciones y formularios" },
  { name: "Tailwind CSS", desc: "Diseño responsive y accesible" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proyecto"
        title="Acerca de TaskFlow"
        description="Aplicación de referencia para un CRUD de tareas con arquitectura moderna en el stack de Vercel."
      />

      <div className="grid gap-4 sm:grid-cols-2 animate-fade-in">
        {stack.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-surface-border bg-surface-raised p-5 shadow-card"
          >
            <h2 className="font-semibold text-white">{item.name}</h2>
            <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-8 rounded-xl border border-surface-border bg-surface-overlay/40 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Funcionalidades
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          <li className="flex gap-3">
            <span className="text-blue-400">✓</span>
            Listado con tarjetas, fechas relativas y estados vacíos
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400">✓</span>
            Crear, editar y eliminar con confirmación modal
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400">✓</span>
            Validación en servidor y feedback de errores en formularios
          </li>
        </ul>
      </section>
    </>
  );
}
