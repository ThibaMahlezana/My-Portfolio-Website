import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe} from '@fortawesome/free-solid-svg-icons'
import { FaGithub } from 'react-icons/fa';

export default function Project({icon, title, description, github_link, live_link}) {
  return (
    <div className="portfolio-item">
        <div className="portfolio-item">
            <div className="card" style={{ width: 285 }}>
                <div className='img-holder'>
                    <img className="card-img-top" src={ icon } />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ description }</p>
                    { live_link ? 
                    <a href={live_link} className="btn btn-primary">
                        <FontAwesomeIcon icon={faGlobe} /> Live
                    </a> : ''
                    }
                    { github_link ? 
                    <a href={github_link} className="btn btn-primary">
                        <FaGithub /> Github
                    </a> : ''
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
