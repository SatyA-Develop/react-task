import React, { useEffect, useState } from 'react'
import Logo from '../../img/image8-1.png'
import menu from './menu'
import Button from '../Button/Button'
import './Header.css'
import {ImCross} from 'react-icons/im'
import {RiMenu2Line} from 'react-icons/ri'
import { useSwipeable } from "react-swipeable";

const Header = () => {
    const isMob = window.innerWidth <= 768 ? true : false;
    const[menuopen,setmenuOpen] = useState(false);
    const outsideClick = (e) => {
          if (e.target.classList.contains("nav-list")) {
            setmenuOpen(true);
          } else {
            setmenuOpen(false);
          }
        };
        useEffect(() => {
          document.addEventListener("click", outsideClick, true);
        }, []);
        const closeNav = useSwipeable({
            onSwiped: (eventData) => {
              if(eventData.dir === "Left"){
                setmenuOpen(false)
            }
            }
          });
  return (
<div className="header-section section">
<a href='/' className='logo' >
    <img src={Logo} alt="" />
</a>
<div className="hamberg-menu" onClick={()=>setmenuOpen(true)} >
    <RiMenu2Line/>
</div>
<ul
{...closeNav}
className={isMob? menuopen? "nav-list menu-open": "nav-list" : "nav-list"}  >
<a href='/' className='mlogo' onClick={()=>setmenuOpen(false)} >
    <img src={Logo} alt="" />
</a>
<div className="cross-btn"onClick={()=> setmenuOpen(false)} >
<ImCross/>
</div>
{
    menu.map(({title,id,path,submenu})=>{
        return(
            <a className='nav-item' key={id} href={path}>
                <li  onClick={()=>setmenuOpen(false)}>{title}</li>
               {isMob && submenu?.map(({tit})=>{
                    return(
                        <div className="submenus-items">
                            <li onClick={()=>setmenuOpen(false)} >{tit}</li>
                        </div>
                    )
                })}
               
            </a>
            
        )
    })
}
</ul>
<div className='btn-header'><Button val='sign in'/></div>
</div>
    
  )
}

export default Header