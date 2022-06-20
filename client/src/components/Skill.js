import React from 'react'

export default function Skill({icon, title, level}) {
  return (
    <div className="skill">
        <div className="icon">
            <img src={ icon } alt=" " />
        </div>
        <div className="title">
            <h3>{ title }</h3>
            <p>{ level }</p>
        </div>
    </div>
  )
}
