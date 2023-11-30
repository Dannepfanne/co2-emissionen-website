// Footer.js
import React from "react";
import { Nav, Col, Row, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="mt-5 ">
      <Container className="d-md-flex text-md-left text-center justify-content-center">
        <Col>
          <h5>NÜTZLICHES</h5>
          <Nav.Link as={Link} to="/hilfe">
            Hilfe
          </Nav.Link>
          <Nav.Link as={Link} to="/impressum">
            Impressum
          </Nav.Link>
          <Nav.Link as={Link} to="/datenschutz">
            Datenschutz
          </Nav.Link>
        </Col>
        <Col>
          <h5>INFOS CO&#8322;</h5>
          <Nav.Link
            as={Link}
            to="https://www.umweltbundesamt.de/themen/klima-energie/treibhausgas-emissionen"
          >
            Bundesumweltamt
          </Nav.Link>
          <Nav.Link as={Link} to="https://www.klimaschule.bayern.de/">
            Klimaschule Bayern
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="https://de.statista.com/themen/2442/treibhausgasemissionen/#topicOverview"
          >
            Statista Themenseite CO2
          </Nav.Link>
        </Col>
        <Col>
          <h5>KONTAKT</h5>
          <Navbar.Text>Prinzenweg 3</Navbar.Text>
          <br />
          <Navbar.Text> 80803 München</Navbar.Text>
          <br />
          <Navbar.Text> info@example.com </Navbar.Text>
          <br />
          <Navbar.Text>+49 1234 56789</Navbar.Text>
        </Col>
      </Container>
      <Row className="border-top">
        <p className="pt-3 text-center text-muted">&copy; 2023 CO&#8322;-LOG</p>
      </Row>
    </Container>
  );
};

export default Footer;
