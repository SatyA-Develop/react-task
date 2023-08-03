import React from 'react'
import './Imagecomponent.css'

const ImageComponent = ({src}) => {
  return (
    <>
<img className='common-img' src={src} alt="" />
    </>
  )
}

export default ImageComponent