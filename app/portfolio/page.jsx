import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import Header from "../../Component/portfolio/header"
const gallarycontent = [
  {
   id:0, 
   src:"/illustration.jpg",
   name:"Illustration",
   left:40,
   scale:50
  },
   {
    id:1,
    src:"/website.jpg",
    name:"Website",
    left:56,
    scale:100 
  },
  {
    id:2,
    src:"/Applications.jpg",
    name:"Applications",
    left:30,
    scale:0
  }
]
const Portfolio = () => {
  return (
    <div className='flex flex-col mt-30'>
        <Header category = {"Choose a gallary"} />
      <div className='grid  grid-cols-4 gap-10'>
          {gallarycontent.map((one,index)=>
          <Link
          href={`/portfolio/${one.name}`}
          className='w-full group relative h-140' 
          key={index}>
           <Image src={one.src} alt={one.name} fill className={`object-cover grayscale-${one.scale} border-4 rounded-lg border-gray-300`}/>
           <button className={`absolute bottom-3 left-${one.left} group-hover:text-${index===one.id ? "[#61b586]":"white"} transition-colors duration-300 text-5xl font-bold`}>{one.name}</button>
          </Link>)}
      </div>
    </div>
  )
}

export default Portfolio