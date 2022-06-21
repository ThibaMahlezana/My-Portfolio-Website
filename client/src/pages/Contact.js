import React from 'react'
import '../styles/global.css'
import '../styles/contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <div className="title">
          <h1>Contact</h1>
          <p>You can contact me here</p>
      </div>
      <div className="row">
        <div className="c-left col-4">
          <div className="contact-item">
              <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="desc">
                  <h5>Location</h5>
                  <p>Johannesburg, Gauteng, South Africa.</p>
              </div>
          </div>
          <div className="contact-item">
              <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="desc">
                  <h5>Email</h5>
                  <p>thiba.ma@gmail.com</p>
              </div>
          </div>
          <div className="contact-item">
              <div className="icon">
                  <i className="fa-solid fa-phone"></i>
              </div>
              <div className="desc">
                  <h5>Phone</h5>
                  <p>+27 61 9580 694</p>
              </div>
          </div>
        </div>
        <div className=" col-8 c-right">
            <input placeholder="Name" type="text"/>
            <input placeholder="Email" type="text"/>
            <textarea rows="3" placeholder="Message"></textarea>
            <button className="btn">Send Message</button>
        </div>
      </div>
    </div>
  )
}
