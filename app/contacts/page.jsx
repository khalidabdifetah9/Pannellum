import React from 'react'
import Image from 'next/image'
const Contact = () => {
  return (
    <div className='w-full space-y-25 flex flex-col'>
      <div>
        <h1 className='text-7xl text-center mt-10 font-semibold capitalize'>Lets Keep in touch!</h1>
      </div>
      <div className='w-full items-center flex gap-20'>
        <div className='w-1/2 relative h-150'>
          <Image className='object-contain' fill src={"/contact.png"} alt='Contact Vector Image'/>
        </div>
        <div className='w-1/2'>
           <form className='space-y-10' action="">
             <label htmlFor="name">Name</label>
             <input name='name' placeholder='Name' className='border-2 px-5 h-15 w-full rounded-lg outline-0 border-gray-600' type="text" />
             <label htmlFor="email">Email</label>
             <input name='email' placeholder='Email' className='border-2 px-5 h-15 w-full rounded-lg outline-0 border-gray-600' type="email" />
             <label htmlFor="message">Message</label>
             <textarea className='border-2 px-5 py-3 h-45 w-full rounded-lg outline-0 border-gray-600' name="message" id=""></textarea>
           <button className='px-8 py-3 max-w-35 bg-[#61b586] rounded-sm'>Send</button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default Contact