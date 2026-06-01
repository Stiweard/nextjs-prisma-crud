"use client";

import Link from "next/link";
import { useActionState, useState, useTransition } from "react";
import {
  createTask,
  updateTask,
  deleteTask,
} from "@/actions/tasks";
import DeleteDialog from "@/components/DeleteDialog";
import { IconArrowLeft } from "@/components/icons";
import Button from "@/components/ui/Button";
import { Field, Input, Textarea } from "@/components/ui/Field";

const TITLE_MAX = 120;
const DESC_MAX = 500;

const initialState = { error: null };

export default function TaskForm({ task }) {
  const isEditing = Boolean(task);
  const [showDelete, setShowDelete] = useState(false);
  const [titleLen, setTitleLen] = useState(task?.title?.length ?? 0);
  const [descLen, setDescLen] = useState(task?.description?.length ?? 0);
  const [deletePending, startDelete] = useTransition();

  const action = isEditing
    ? updateTask.bind(null, task.id)
    : createTask;

  const [state, formAction, isPending] = useActionState(action, initialState);

  function handleDeleteConfirm() {
    startDelete(async () => {
      await deleteTask(task.id);
    });
  }

  return (
    <>
      <div className="mx-auto w-full max-w-lg animate-slide-up">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
        >
          <IconArrowLeft className="h-4 w-4" />
          Volver a tareas
        </Link>

        <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface-raised shadow-card">
          <div className="border-b border-surface-border bg-surface-overlay/50 px-6 py-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400/90">
              {isEditing ? "Editar" : "Nueva tarea"}
            </p>
            <h1 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              {isEditing ? task.title : "Añade una tarea"}
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              {isEditing
                ? "Actualiza los detalles o elimina la tarea."
                : "Completa el formulario para guardarla en tu lista."}
            </p>
          </div>

          <form action={formAction} className="space-y-5 px-6 py-6 sm:px-8 sm:py-7">
            {state?.error ? (
              <div
                className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                role="alert"
              >
                {state.error}
              </div>
            ) : null}

            <Field
              label="Título"
              htmlFor="title"
              hint={`${titleLen}/${TITLE_MAX}`}
              error={state?.field === "title" ? state.error : null}
            >
              <Input
                id="title"
                name="title"
                required
                maxLength={TITLE_MAX}
                defaultValue={task?.title ?? ""}
                placeholder="Ej. Revisar diseño del dashboard"
                disabled={isPending}
                onChange={(e) => setTitleLen(e.target.value.length)}
              />
            </Field>

            <Field
              label="Descripción"
              htmlFor="description"
              hint={`${descLen}/${DESC_MAX}`}
            >
              <Textarea
                id="description"
                name="description"
                maxLength={DESC_MAX}
                defaultValue={task?.description ?? ""}
                placeholder="Detalles, enlaces o notas opcionales…"
                disabled={isPending}
                onChange={(e) => setDescLen(e.target.value.length)}
              />
            </Field>

            <div className="flex flex-col-reverse gap-2 border-t border-surface-border pt-5 sm:flex-row sm:justify-between">
              {isEditing ? (
                <Button
                  type="button"
                  variant="danger"
                  disabled={isPending || deletePending}
                  onClick={() => setShowDelete(true)}
                  className="sm:order-first"
                >
                  Eliminar
                </Button>
              ) : (
                <div />
              )}
              <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <Button href="/" variant="secondary" className="w-full sm:w-auto" disabled={isPending}>
                  Cancelar
                </Button>
                <Button type="submit" loading={isPending} className="w-full sm:w-auto">
                  {isEditing ? "Guardar cambios" : "Crear tarea"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <DeleteDialog
        open={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={handleDeleteConfirm}
        loading={deletePending}
        taskTitle={task?.title}
      />
    </>
  );
}
