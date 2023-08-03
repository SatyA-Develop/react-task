import React from 'react'
import Headingcomponent from '../HeadingComponent/Headingcomponent'
import icon from '../../img/alicorn-light-86839891.svg'
import './Bleeding.css'

const Bleeding = () => {
  return (
    <div className='bleeding-sec'>
    <Headingcomponent width={'80%'} col={"#fff"} icon={icon} main={'The first dev environment faster and more secure than local.'} sub={'IBLEEDING EDGE'} />
    </div>
  )
}

export default Bleeding