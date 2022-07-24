import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
            <a
              role="button"
              className={`navbar-burger burger ${isOpen && "is-active"}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => setOpen(!isOpen)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
              exact
              >
              Home
          </NavLink>
          <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
            >
              About
          </NavLink>
          <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/portfolio"
            >
              Portfolio
          </NavLink>
          <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/contact"
            >
              Contact
          </NavLink>
      </div>
    </nav>
  )
}
