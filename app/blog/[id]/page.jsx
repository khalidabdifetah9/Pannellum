"use client"
import React from 'react'
import {useParams} from "next/navigation"
import Image from 'next/image'
import useSwr from "swr"
import { getData } from '../../../lib/api'


const Page = () => {
    const {data,error,isLoading} = useSwr("http://localhost:3000/api/post",getData)
    const {id} = useParams();
      if(isLoading) return <p className='text-white text-3xl w-full mx-auto mt-50'>Loading...</p>
      if(error) return <p>SomeThing Went Wrong!</p>
      const blog = data?.find((item)=>item.id ===id)
      if(!blog) return <p>Blog Not Found!</p>
  return (
    <div className='flex flex-col space-y-10'>
      <div className='flex items-center'>
        <div className='space-y-8 w-1/2'>
           <h1 className='text-5xl font-semibold capitalize'>{blog.title}</h1>
           <p  className='text-2xl'>{blog.des}</p>
           <div className='flex mt-25 space-x-3 items-center'>
              <Image
               width={60}
               height={60}
               src={"/abouts.jpg"}
               alt='Profile Picture'
               className='w-20 h-20 rounded-full object-cover'
              />
              <p>{blog.username}</p>
           </div>
        </div>
        <div className='w-1/2 relative h-160'>
          <Image
           fill
           src={blog.img}
           alt='Blog Image'
           className='object-cover'
          />
        </div>
      </div>
      <div>
        <p className='text-2xl'>{blog.contact}</p>
      </div>
    </div>
  )
}

export default Page