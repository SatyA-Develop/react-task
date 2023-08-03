import React from 'react'
import './Workitem.css'

const WorkItem = ({item}) => {
    const {title,subtit,icon}= item
  return (
    <div className="single-item">
        <div className="single-left">
            <img src={icon} alt="" />
        </div>
        <div className="single-right">
            <h2>{title}</h2>
            <h3>{subtit}</h3>
        </div>
    </div>
  )
}

export default WorkItem