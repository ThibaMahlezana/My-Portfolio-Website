import React from "react";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="logo">
              <a href="">T M</a>
            </div>
            <div className="hamburger-btn outer-shadow hover-in-shadow">
              <span></span>
            </div>
          </div>
        </div>
        <nav className="nav-menu">
          <div className="close-nav-menu outer-shadow hover-in-shadow">
            &times;
          </div>
          <div className="nav-menu-inner">
            <ul>
              <li>
                <a className="inner-shadow active">home</a>
              </li>
              <li>
                <a className="outer-shadow hover-in-shadow">about</a>
              </li>
              <li>
                <a className="outer-shadow hover-in-shadow">services</a>
              </li>
              <li>
                <a className="outer-shadow hover-in-shadow">portfolio</a>
              </li>
              <li>
                <a className="outer-shadow hover-in-shadow">testimonial</a>
              </li>
              <li>
                <a className="outer-shadow hover-in-shadow">contact</a>
              </li>
            </ul>
          </div>
          <p className="copyright-text">&copy; 2021 Thiba Mahlezana</p>
        </nav>
      </header>
    </div>
  );
}

export default Header;
