import React from 'react'
import './Headingcomponent.css'

const Headingcomponent = ({icon,sub,main,para,col, width}) => {
  return (
    <div className='headingcomponent-section'>
<div className="icon-box">
    <img src={icon} alt="" />
</div>
<h3 className="exp">
{sub}
</h3>
<h1 style={{color: col ? col : "", width: width ? width : "100%"}} className="m-heading">
  {main}
</h1>
<p className="comp-para">{para}
</p>
    </div>
  )
}

export default Headingcomponent