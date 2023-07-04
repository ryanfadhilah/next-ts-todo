
"use client"

import { prisma } from '@/db';
import React from 'react'

type typeTodoItem = {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    toggleTodo: (id: string, completed: boolean) => void
}

async function deleteTodo(uuid: string) {
    console.log(uuid)

    // await prisma.todo.delete({
    //     where: {
    //         id: uuid,
    //     },
    // })
}

const TodoItem = ({ id, title, completed, createdAt, updatedAt, toggleTodo }: typeTodoItem) => {
    return (
        <li className='flex justify-between my-5 py-5  border hover:bg-teal-900 transition-all ease-linear duration-100'>
            <div>
                <input id={id} type="checkbox" defaultChecked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)} className='peer mx-4' />
                <label htmlFor={id} className='peer-checked:line-through text-white'>{title}</label>
            </div>
            <button className='mx-4 h-full hover:text-orange-300 hover:tracking-widest transition-all ease-linear duration-100' onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}

export default TodoItem