import React from 'react'
import c1 from '../../img/meta.svg'
import c2 from '../../img/gooogle.svg'
import c3 from '../../img/intel.svg'
import b1 from '../../img/quote-logo_grid-bg-blue-fe4e3e99.png'
import b2 from '../../img/quote-logo_grid-bg-pink-e0de3485.png'
import './Company.css'

const Company = () => {
    const companies = [
        {
            cimg:c1
        },
        {
            cimg:c2
        },
        {
            cimg:c3
        },
        {
            cimg:c2
        },
        {
            cimg:c1
        },
        {
            cimg:c2
        },
        {
            cimg:c3
        },
        {
            cimg:c1
        },
    ]
  return (
    <div className='section'>
<div className="company-section">
    <img className='blur-img blur-1' src={b1} alt="" />
    <h3 className="company-sec-text">
Love by millions of developers every month <br/>
<strong>at the world's largest companies</strong>
    </h3>
<div className="companies-logos">
{
    companies.map(({cimg})=>{
        return(
            <div className="c-img-container">
                <img src={cimg} alt="" />
            </div>
        )
    })
}
</div>
<img className='blur-img blur-2' src={b2} alt="" />
</div>
    </div>
  )
}

export default Company