import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';
import { data } from "autoprefixer";

// Peticion GET
export async function GET(request, { params }) {

    console.log(params.id);

    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    console.log(task);

    return NextResponse.json(task)
}

// Peticion PUT
export async function PUT(request, { params }) {

    const data = await request.json()

    const taskUpdate = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })

    return NextResponse.json(taskUpdate)
}

// Peticion DELETE
export async function DELETE(request, { params }) {
    try {

        const taskRemoved = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })

        return NextResponse.json(taskRemoved)

    } catch (error) {
        return NextResponse.json(error.message);
    }
}