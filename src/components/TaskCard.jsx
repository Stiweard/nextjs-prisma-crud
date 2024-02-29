"use client"

import { useRouter } from "next/navigation"

export default function TaskCard({task}) {

    const router = useRouter()

    return (
        <div className="group relative bg-gray-900 p-5 rounded hover:bg-slate-500 hover:cursor-pointer"
        onClick={() =>{
            router.push(`/tasks/edit/${task.id}`)
        }}
        >
            <div className="mt-4 flex justify-between flex-col">
                <div>
                    <h3 className=" text-2xl text-white">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {task.title}
                    </h3>
                </div>
                <p className="text-sm font-medi text-white">{task.description}</p>
                <p className="text-sm font-serif text-white">{new Date(task.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    )
}
