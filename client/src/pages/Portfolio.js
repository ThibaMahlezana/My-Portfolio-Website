import React from 'react'
import '../styles/global.css'
import '../styles/portfolio.css'
import Projects from '../data/Projects'
import Project from '../components/Project'

export default function Portfolio() {
  return (
    <div className="portfolio">
        <div className="title">
            <h1>Portfolio</h1>
            <p>The projects I have worked on</p>
        </div>
        <div className="portfolio-items">
          { Projects.map((item) => {
            return(
              <Project 
                icon={item.icon}
                title={item.title}
                description={item.description}
                github_link={item.github_link}
                live_link={item.live_link}
              />
            )
          })}
        </div>
    </div>
  )
}
