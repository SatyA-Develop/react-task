import React from 'react'
import src from '../../img/rapid_prototyping-35780526.png'
import ImageComponent from '../ImageComponent/ImageComponent'
import '../InstantBug/Instantbug.css'

const Rapid = () => {
  return (
   
<div className="instant-bug-section">
    <div className="instant-bug-left">
        <h3 className="instant-bug-head">
        Rapid Prototyping
        </h3>
        <h4 className="instant-bug-para">
        Speed up your entire development process with <strong>real time hot-reloading in the</strong><a href="/"> fastest dev environment ever made.</a>
        </h4>
        <h4 className="instant-bug-para">
        Collaborate remotely on different devices, send and receive instant feedback, and <strong>get to market faster.</strong>
        </h4>
    </div>
    <div className="instant-bug-right">
        <ImageComponent src={src} />
    </div>
</div>
    
  )
}

export default Rapid