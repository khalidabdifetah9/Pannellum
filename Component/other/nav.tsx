import React from 'react'
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className='w-screen flex justify-center py-20'>
      <Link className='px-8 py-4 text-black rounded-lg text-xl font-medium bg-blue-300' href = "*">Start Course</Link>
    </nav>
  )
}

export default NavBar