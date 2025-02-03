import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaySite from './Play';
import { Routes, Route } from 'react-router-dom';

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
    fontWeight: activeLink === link ? 'bold' : 'normal',
  });

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" fixed="top" onSelect={handleSelect}>
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/#homePage" onClick={handleBrandClick} eventKey="brand" style={{ marginLeft: '10%' }}>
            Selina Tran
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ marginLeft: 'auto', marginRight: '10%' }}>
              <Nav.Link as={Link} smooth to="/#experience" eventKey="experience" style={linkStyle('experience')}>
                Work
              </Nav.Link>
              <Nav.Link as={Link} smooth to="/play" eventKey="play" style={linkStyle('play')}>
                Play
              </Nav.Link>
              <Nav.Link href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" eventKey="resume" style={linkStyle('resume')}>
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
