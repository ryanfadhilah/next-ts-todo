import Navbar from '@/components/navbar/navbar'
import TodoItem from '@/components/todoItem/todoItem'
import { prisma } from '@/db'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'


function getTodo() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, completed: boolean) {
  "use server"
  await prisma.todo.update({ where: { id }, data: { completed } })
}

async function deleteTodo(uuid: string) {
  "use server"
  console.log(uuid)

  await prisma.todo.delete({
    where: {
      id: uuid,
    },
  })
  getTodo()
}

export default async function Home() {
  const todos = await getTodo()
  return (
    <main>

      <Navbar></Navbar>

      <ul>
        {todos.map((v, i, a) => {
          return (<TodoItem key={i}{...v} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoItem>)
        })}
      </ul>
    </main>
  )
}
