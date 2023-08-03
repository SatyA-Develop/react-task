import React from 'react'
import Headingcomponent from '../HeadingComponent/Headingcomponent'
import icon from '../../img/wand-magic-light-3ffc6e1f.svg'
import './Instadev.css'

const Instantdev = () => {
  return (
    <div className='instantdev-sec section'>
    <Headingcomponent col={"rgba(0, 0, 0,0.8)"} icon={icon} main={'Wait, I can enjoy web dev again?'} sub={'INSTANT DEV EXPERIENCES'} para={<>Significantly reduce time to market with <strong>matchlessly secure, instantly reproducible, fullstack dev environments</strong>which <strong>boot in milliseconds.</strong></>} />
    </div>
  )
}

export default Instantdev