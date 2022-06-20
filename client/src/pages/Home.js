import React from 'react'
import '../styles/home.css';
import bgImage from '../images/Pic3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="home">
      <div className="row">
        <div className='col-6 h-left'>
          <p className="intro">Hello, I am </p>
          <h1 className="name">Thiba Mahlezana</h1>
          <h3 className="role">Full Stack Developer</h3>
          <div className="h-btns">
              <button variant="outline-primary" className="h-button">
                <FontAwesomeIcon icon={faDownload} />
                {' '} Download Resume
              </button>
              <button variant="outline-primary" className="h-button">
                <FontAwesomeIcon icon={faEnvelope} />
                {' '} Let's Talk
              </button>
          </div>
        </div>
        <div className='col-6 h-right'>
          <div className="bg"></div>
          <img src={bgImage}/>
        </div>
      </div>
    </div>
  )
}
