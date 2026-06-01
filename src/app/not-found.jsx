import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center animate-fade-in">
      <p className="text-6xl font-bold tabular-nums text-slate-800">404</p>
      <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
        Página no encontrada
      </h1>
      <p className="mt-3 max-w-md text-slate-400">
        La ruta no existe o la tarea fue eliminada.
      </p>
      <Button href="/" className="mt-8">
        Volver al inicio
      </Button>
    </div>
  );
}
