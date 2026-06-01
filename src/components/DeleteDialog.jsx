"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import { IconTrash } from "@/components/icons";

export default function DeleteDialog({ open, onClose, onConfirm, loading, taskTitle }) {
  const cancelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    cancelRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-dialog-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Cerrar"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md animate-slide-up rounded-2xl border border-surface-border bg-surface-raised p-6 shadow-2xl">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-red-500/15 text-red-400">
          <IconTrash className="h-5 w-5" />
        </div>
        <h2 id="delete-dialog-title" className="text-lg font-semibold text-white">
          ¿Eliminar esta tarea?
        </h2>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
          {taskTitle ? (
            <>
              Se eliminará <strong className="font-medium text-slate-300">&quot;{taskTitle}&quot;</strong> de forma permanente.
            </>
          ) : (
            "Esta acción no se puede deshacer."
          )}
        </p>
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            ref={cancelRef}
            type="button"
            disabled={loading}
            onClick={onClose}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-surface-overlay px-4 text-sm font-medium text-slate-200 ring-1 ring-surface-border transition hover:bg-surface-raised disabled:opacity-50"
          >
            Cancelar
          </button>
          <Button variant="danger" loading={loading} onClick={onConfirm}>
            Eliminar tarea
          </Button>
        </div>
      </div>
    </div>
  );
}
