import React from 'react'
import src from '../../img/interactive_documentation-0fa61953.png'
import ImageComponent from '../ImageComponent/ImageComponent'
import './Interactive.css'

const Interactive = () => {
  return (
  
<div className="interactive-section">
<div className="interactive-left">
        <ImageComponent src={src} />
    </div>
    <div className="interactive-right">
        <h3 className="instant-bug-head">
        Instant Bug Reports
        </h3>
        <h4 className="instant-bug-para">
        <a href="/">Use the StackBlitz SDK</a> to embed and interact with <strong>actual code</strong>in your <strong>actual docs,</strong>blog or website.
        </h4>
    </div>
</div>
    
  )
}

export default Interactive
