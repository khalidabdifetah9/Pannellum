import React from 'react'

const Header = ({category}) => {
  return (
       <div className='space-y-10'>
         <h1 className='text-9xl font-semibold'>Our Works</h1>
         <p  className='text-3xl mb-5'>{category}</p>
      </div>
  )
}

export default Header