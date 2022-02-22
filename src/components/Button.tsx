import React from 'react'
import { showAddFormInterface } from '../App'

const Button = ({text, onClick}:buttonProps) => {
  return (
    <button className='btn' onClick={onClick}>{text}</button>
  )
}

type buttonProps= {
    text:string
    onClick: showAddFormInterface
}

export default Button