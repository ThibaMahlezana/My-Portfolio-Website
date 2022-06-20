import React from 'react'

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
                    <a href="#" className="btn btn-primary"><i class="fa-brands fa-github"></i> Github</a>
                </div>
            </div>
        </div>
    </div>
  )
}
