// NavbarComponent.js
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSelect = (eventKey) => {
    setActiveLink(eventKey);
  };

  const handleBrandClick = () => {
    setActiveLink('');
  };

  const linkStyle = (link) => ({
    color: activeLink === link ? '#8e7cc3' : '#000',
    fontWeight: activeLink === link ? 'bold' : 'normal'
  });

  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top" onSelect={handleSelect}>
      <div className="container-fluid">
        <Navbar.Brand as={Link} to="/" onClick={handleBrandClick} eventKey="brand" style={{ marginLeft: '10%' }}>Selina Tran</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ marginLeft: '65%' }}>
            <Nav.Link href="#experience" eventKey="experience" style={linkStyle('experience')}>Experience</Nav.Link>
            <Nav.Link href="#design" eventKey="design" style={linkStyle('design')}>Design</Nav.Link>
            <Nav.Link href="/resume.pdf" target="_blank" eventKey="resume" style={linkStyle('resume')}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
