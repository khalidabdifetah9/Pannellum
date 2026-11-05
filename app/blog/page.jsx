import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getData } from '../../lib/api'



const Blog = async () => {
      const result = await getData();
  return (
    <div className='mt-10'>
       {result.map((blog,index)=>
       <div 
        key={index}
        className='flex w-full space-y-10 space-x-8 items-center'
       >
        <Link href={`/blog/${blog.id}`} className='relative w-1/2 h-160'>
          <Image 
           fill
           src={blog.img}
           alt={`Blog Image ${index+1}`}
           className='object-cover'
          />
        </Link>
        <div className='w-1/2 space-y-4'>
          <h1 className='text-5xl font-semibold capitalize'>{blog.title}</h1>
          <p className='text-2xl'>{blog.des}</p>
        </div>

       </div>)}
    </div>
  )
}

export default Blog