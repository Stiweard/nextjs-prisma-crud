"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import NavBar from '@/components/NavBar';

export default function NewPage({ params }) {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescrption] = useState('')

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title)
          setDescrption(data.description)
        })
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (params.id) {

      const res = await fetch(`/api/tasks/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      console.log(data);
    } else {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
    }
    router.refresh()
    setTimeout(() => {
      router.push('/')
    }, 1000);
  }

  return (
    <div className=" h-screen flex justify-center items-center">
      <form className=" bg-slate-800 p-10 rounded md:w-1/4"
        onSubmit={onSubmit}
      >
        <label htmlFor="title"
          className=" font-bold text-sm"
        >
          Titulo de la tarea
        </label>
        <input
          id="titulo"
          type="text"
          className=" border border-gray-50 p-2 mb-4 w-full rounded text-black"
          placeholder={"Titulo de la tarea"}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          value={title}
        />
        <label htmlFor="descripcion"
          className=" font-bold text-sm"
        >
          Descripcion de la tarea
        </label>
        <textarea
          id="descripcion"
          rows="3"
          className=" border border-gray-50 p-2 mb-4 w-full rounded text-black"
          placeholder={"Descripcion de la tarea"}
          onChange={(e) => {
            setDescrption(e.target.value)
          }}
          value={description}
        ></textarea>
        <div className=" flex justify-between">
          <button
            type="submit"
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {params.id ? 'Actualizar' : 'Crear'}
          </button>
          {params.id ? (
            <button
              href="#"
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="button"
              onClick={async () => {
                const res = await fetch(`/api/tasks/${params.id}`, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                router.refresh()
                setTimeout(() => {
                  router.push('/')
                }, 1000);
                const data = await res.json()
                console.log(data);
              }}
            >
              Eliminar
            </button>
          ) : null}
        </div>
      </form>
      <NavBar />
    </div>
  )
}
