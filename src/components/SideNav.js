// SideNav.js
import { Navbar, Nav, Offcanvas, Col } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaMastodon } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <Navbar expand="lg" className="h5 sidenav shadow-lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          className="bg-success-subtle"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column ">
              <div className="d-md-none">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  Über uns
                </Nav.Link>
                <hr />
              </div>
              <Nav.Link as={Link} to="/co2-landing">
                Weltweite CO2-Daten
              </Nav.Link>
              <Nav.Link as={Link} to="/ranking">
                Rangliste
              </Nav.Link>
              <Nav.Link as={Link} to="/co2-faq">
                FAQ zu CO2
              </Nav.Link>
              <hr />
              <Col md={{ span: 1 }} className="d-flex px-2">
                <Nav.Link as={Link} to="https://www.facebook.com/co2logDE">
                  <FaFacebook />
                </Nav.Link>
                <Nav.Link as={Link} to="https://www.x.com/co2logDE">
                  <FaXTwitter />
                </Nav.Link>
                <Nav.Link as={Link} to="https://chaos.social/@co2LOG">
                  <FaMastodon />
                </Nav.Link>
              </Col>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
};

export default SideNav;
