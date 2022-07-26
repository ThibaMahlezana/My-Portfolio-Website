import React from 'react'
import '../styles/home.css';
import bgImage from '../images/Thiba.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDownload } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import mailIcon from '../images/icons/mail-icon.svg'

export default function Home() {
  return (
    <div id="home" className="home">
      <div className="row">
        <div className='col-sm-12 col-md-6 col-lg-6 h-left'>
          <p className="intro">Hello, I am </p>
          <h1 className="name">Thiba Mahlezana</h1>
          <h3 className="role">Full Stack Developer</h3>
          <div className="h-btns">
              {/* <button variant="outline-primary" className="h-button">
                <FontAwesomeIcon icon={faDownload} />
                {' '} Download Resume
              </button> */}
              <button variant="outline-primary" className="h-button button-float">
                <a href="#contact">
                  <img alt="contact" src={mailIcon} />
                  {' '} Let's Talk
                </a>
              </button>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 h-right'>
          <div className="bg"></div>
          <img alt='' src={bgImage}/>
        </div>
      </div>
    </div>
  )
}
