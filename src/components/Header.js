// Header.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="success-subtle" className="shadow-lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/CO2_LOG_logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-left"
            alt="CO2-LOG-Logo"
          />
          <span className="ms-2 d-none d-md-block">
            CO&#8322;-Log - Nachvollziehbar, Nachhaltig und Natürlich
          </span>
          <span className="ms-2 d-md-none">CO&#8322;-Log</span>
        </Navbar.Brand>

        <Nav className="ms-auto d-none d-md-flex">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            Über uns
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
