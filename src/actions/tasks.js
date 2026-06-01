"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

const TITLE_MAX = 120;
const DESC_MAX = 500;

export async function getTasks() {
  return prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getTask(id) {
  return prisma.task.findUnique({
    where: { id: Number(id) },
  });
}

function validateFormData(formData) {
  const title = formData.get("title")?.toString().trim() ?? "";
  const description = formData.get("description")?.toString().trim() ?? "";

  if (!title) {
    return { error: "El título es obligatorio", field: "title" };
  }
  if (title.length > TITLE_MAX) {
    return {
      error: `El título no puede superar ${TITLE_MAX} caracteres`,
      field: "title",
    };
  }
  if (description.length > DESC_MAX) {
    return {
      error: `La descripción no puede superar ${DESC_MAX} caracteres`,
      field: "description",
    };
  }

  return { data: { title, description } };
}

export async function createTask(prevState, formData) {
  const validated = validateFormData(formData);
  if (validated.error) return validated;

  try {
    await prisma.task.create({ data: validated.data });
    revalidatePath("/");
  } catch {
    return { error: "No se pudo crear la tarea. Comprueba la conexión e inténtalo de nuevo." };
  }

  redirect("/");
}

export async function updateTask(id, prevState, formData) {
  const validated = validateFormData(formData);
  if (validated.error) return validated;

  try {
    await prisma.task.update({
      where: { id: Number(id) },
      data: validated.data,
    });
    revalidatePath("/");
  } catch {
    return { error: "No se pudo actualizar la tarea. Inténtalo de nuevo." };
  }

  redirect("/");
}

export async function deleteTask(id) {
  try {
    await prisma.task.delete({
      where: { id: Number(id) },
    });
    revalidatePath("/");
  } catch {
    return { error: "No se pudo eliminar la tarea." };
  }

  redirect("/");
}
