import React from 'react'
import './Headingcomponent.css'
import icon from '../../img/next.png'

const Headingcomponent = () => {
  return (
    <div className='headingcomponent-section section'>
<div className="icon-box">
    <img src={icon} alt="" />
</div>
<h3 className="exp">
INSTANT DEV EXPERIENCES
</h3>
<h1 className="m-heading">
Wait, I can enjoy web dev again?
</h1>
<p className="comp-para">
Significantly reduce time to market with <strong>matchlessly secure, instantly reproducible, fullstack dev environments</strong>
which <strong>boot in milliseconds.</strong>
</p>
    </div>
  )
}

export default Headingcomponent