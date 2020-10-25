import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav  from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function MenuBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
          <Navbar.Brand className="righteous">powday</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
                  
              <LinkContainer to="/about">
                  <Nav.Link >about</Nav.Link> 
              </LinkContainer>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MenuBar;
