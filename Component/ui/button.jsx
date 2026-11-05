import React from 'react'
const Button = ({children,OnEnter}) => {
  return (
    <button onClick={OnEnter} className='bg-amber-400 cursor-pointer rounded-lg px-7 py-3'>{children}</button>
  )
}

export default Button