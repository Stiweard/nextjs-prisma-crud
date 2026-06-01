export function formatDate(date) {
  return new Date(date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatRelativeDate(date) {
  const now = Date.now();
  const then = new Date(date).getTime();
  const diffSec = Math.round((now - then) / 1000);

  if (diffSec < 60) return "Hace un momento";
  if (diffSec < 3600) {
    const m = Math.floor(diffSec / 60);
    return `Hace ${m} min`;
  }
  if (diffSec < 86400) {
    const h = Math.floor(diffSec / 3600);
    return `Hace ${h} h`;
  }
  if (diffSec < 604800) {
    const d = Math.floor(diffSec / 86400);
    return `Hace ${d} día${d === 1 ? "" : "s"}`;
  }
  return formatDate(date);
}
