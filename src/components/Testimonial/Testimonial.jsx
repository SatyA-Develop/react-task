import React from 'react'
import './Testimonial.css'
import author from '../../img/author.png'
import gicon from '../../img/gicon.svg'

const Testimonial = () => {
  return (
    <div className='testimonial-section section'> 
<div className="testimonial-container">
    <h3 className="testimonial-desc">
    “Being able to instantly open and share environments has <strong>significantly reduced our team's support burden</strong> for bug reproductions and enabled rapid innovation.”
    </h3>
    <div className="testimonial-bottom">
        <div className="t-author">
            <img src={author} alt="tauthor" />
        </div>
        <div className="t-icon">
            <img src={gicon} alt="icon" />
        </div>
        <div className="t-det">
            <div className="t-name">STEPHEN FLUIN</div>
            <div className="t-position">Developer Relations Lead at Google</div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Testimonial