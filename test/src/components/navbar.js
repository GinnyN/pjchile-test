import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavbarCustom = ({ brand }) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">{brand}</Navbar.Brand>
  </Navbar>
)

export default NavbarCustom;