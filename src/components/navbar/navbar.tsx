import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <h1 className='text-2xl'>Todo - List</h1>
            <Link href="/new" className=' text-white py-3 px-5 bg-teal-800 hover:bg-teal-500 transition-all ease-linear duration-100'>Create New Todo</Link>
        </nav>
    )
}

export default Navbar