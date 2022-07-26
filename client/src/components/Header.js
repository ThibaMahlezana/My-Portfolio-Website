import React from 'react'
import '../styles/global.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar expand="md" className="header nav">
      <Container>
        <Navbar.Brand className="col-md-4 col-lg-6" href="#home">
          <h4></h4>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="header-links col-md-4 col-lg-6">
          <Nav className="me-auto">
            <Nav.Link style={{color: '#8fa7be'}} className="nav-item" href="#home">Home</Nav.Link>
            <Nav.Link style={{color: '#8fa7be'}} className="nav-item" href="#about">About</Nav.Link>
            <Nav.Link style={{color: '#8fa7be'}} className="nav-item" href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link style={{color: '#8fa7be'}} className="nav-item" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
