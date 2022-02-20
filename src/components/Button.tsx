import React from 'react'

const Button = ({text}:buttonProps) => {
  return (
    <button className='btn'>{text}</button>
  )
}

type buttonProps= {
    text:string
}

export default Button