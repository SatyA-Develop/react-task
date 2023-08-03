import React from 'react'
import './Button.css'

const Button = ({val}) => {
  return (
    <button className='btn'>{val}</button>
  )
}

export default Button