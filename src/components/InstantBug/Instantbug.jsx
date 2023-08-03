import React from 'react'
import src from '../../img/bug_reports-62f54590.png'
import ImageComponent from '../ImageComponent/ImageComponent'
import './Instantbug.css'

const Instantbug = () => {
  return (
   
<div className="instant-bug-section">
    <div className="instant-bug-left">
        <h3 className="instant-bug-head">
        Instant Bug Reports
        </h3>
        <h4 className="instant-bug-para">
        Create <strong>zero-overhead, live templates</strong>for your users to reliably submit bugs against, <strong>filtering out true issues</strong>from everything else.
        </h4>
        <h4 className="instant-bug-para">
        <a href="/">Share complete environments with only a url,</a> and never spin up heavy local installations for a simple bug report <strong>filtering out true issues</strong>ever again.
        </h4>
    </div>
    <div className="instant-bug-right">
        <ImageComponent src={src} />
    </div>
</div>
    
  )
}

export default Instantbug