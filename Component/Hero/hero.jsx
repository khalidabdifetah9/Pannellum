import React from 'react'
import Image from "next/image"
const Hero = () => {
  return (
    <div className='text-white flex space-x-60 mt-30'>
      <div className='flex-[1.5] flex-col pt-30 space-y-7'>
        <h1 className="text-7xl font-bold capitalize leading-18 bg-linear-to-b from-[#1b422c] to-[rgba(255,255,255,0.8)] bg-clip-text text-transparent">
            Better design for your digital products
        </h1>
        <p className='text-xl opacity-60'>turn your idea into reality. we bring together the teams from the global tech industry </p>
        <button className='px-4 py-4 rounded-lg cursor-pointer bg-[#61b586]'>see our works</button>
      </div>
      <div className='flex-2 relative w-full h-180'>
        <Image className='animate-[float_4s_ease-in-out_infinite] object-contain' fill src={"/vector_1.png"} alt='Vector Image'></Image>
      </div>
    </div>
  )
}
export default Hero