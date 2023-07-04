import { prisma } from '@/db'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

async function createTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("createTodo: Title error")
    }
    await prisma.todo.create({ data: { title, completed: false } })
    redirect("/")
}

const New = () => {
    return (
        <main className='w-full h-full grid grid-cols-1'>

            <nav className="flex justify-between text-2xl">
                <h1>New Todo</h1>
            </nav>

            <form action={createTodo} className='grid grid-cols-1'>
                <input type="text" name='title' className='text-black p-5 my-5' placeholder='write here...' />
                <div className='flex'>
                    <Link href=".." className='px-5 py-3 bg-teal-800 hover:bg-teal-500 transition-all ease-linear duration-100'>Cancel</Link>
                    <button type='submit' className='px-5 py-3 bg-teal-800 hover:bg-teal-500 transition-all ease-linear duration-100'>Submit</button>
                </div>
            </form>

        </main>
    )
}

export default New