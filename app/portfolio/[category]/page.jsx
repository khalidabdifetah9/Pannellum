"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Header from '../../../Component/portfolio/header'
const Category = () => {
  const {category} = useParams();
  return (
    <div className='mt-30'>
     <Header category={category}/>
     <div className='flex items-center '>
      <div className='w-1/2 space-y-4'>
       <h1 className='text-5xl font-semibold'>Creative Portfolio</h1>
       <p className='text-2xl leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis alias saepe inventore ratione maiores sed nihil voluptatibus! Provident labore non beatae consequatur quos, corrupti atque aperiam quisquam amet earum sequi.</p>
       <button className='px-8 py-3 max-w-35 bg-[#61b586] rounded-sm'>See More</button>
      </div>
      <div className='w-1/2 relative h-160'>
       <Image 
        fill 
        src={`/${category}.jpg`} 
        alt={`${category} Image`}
        className='object-cover'
        />
      </div>
     </div>
    </div>
  )
}

export default Category