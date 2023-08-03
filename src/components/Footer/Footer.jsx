import React from 'react'
import './Footer.css'
import FooterList from './FooterList'

const Footer = () => {
  return (
    <div className='footer-section section'>
<div className="footer-menu-container">
{
  FooterList.map(({title,links,index})=>{
    return(
     <div key={index} className="footer-menu">
       <h4 className="footer-menu-heading">
        {title}
      </h4>
      <div className="footer-links">
      {
        links.map(({tit,index})=>{
          return(
            <li key={index} className="footer-link">
            {tit}
            </li>
          )
        })
      }
      </div>
     </div>
    )
  })
}
</div>
<div className="footer-copyright">
  <h5 className="company-copyright">
  © 2023 StackBlitz, Inc.
  </h5>
  <p className="copyright-det">
  StackBlitz Codeflow and the Infinite Pull Request logo are trademarks of StackBlitz, Inc.
  </p>
</div>
    </div>
  )
}

export default Footer