import React from 'react'
import '../styles/global.css'
import '../styles/contact.css'
import locationIcon from '../images/icons/location-icon.svg'
import mailIcon from '../images/icons/mail-icon.svg'
import phoneIcon from '../images/icons/phone-icon.svg'

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="title">
          <h1>Contact</h1>
          <p>You can contact me here</p>
      </div>
      <div className="row">
        <div className="c-left col-sm-12 col-md-12 col-lg-4">
          <div className="contact-item">
              <div className="icon">
                  <img alt="location" src={locationIcon} />
              </div>
              <div className="desc">
                  <h5>Location</h5>
                  <p>Johannesburg, Gauteng, South Africa.</p>
              </div>
          </div>
          <div className="contact-item">
              <div className="icon">
                  <img alt="Email Address" src={mailIcon} />
              </div>
              <div className="desc">
                  <h5>Email</h5>
                  <p>thiba.ma@gmail.com</p>
              </div>
          </div>
          <div className="contact-item">
              <div className="icon">
                  <img alt="Phone" src={phoneIcon} />
              </div>
              <div className="desc">
                  <h5>Phone</h5>
                  <p>+27 61 9580 694</p>
              </div>
          </div>
        </div>
        <div className="c-right col-sm-12 col-md-12 col-lg-8">
            <input placeholder="Name" type="text"/>
            <input placeholder="Email" type="text"/>
            <textarea rows="3" placeholder="Message"></textarea>
            <button className="btn">Send Message</button>
        </div>
      </div>
    </div>
  )
}
