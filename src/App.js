//App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/Custom.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import appRoutes from "./Routes/appRoutes";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <Container fluid>
        <Row>
          <Col
            className="pt-0 d-none d-lg-block bg-success-subtle"
            xs={0}
            lg={2}
          >
            <SideNav />
          </Col>
          <Col className="pt-0 d-lg-none" xs={1} lg={0}>
            <SideNav />
          </Col>
          <Col xs={11} lg={9}>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Container>{route.element}</Container>}
                />
              ))}
            </Routes>
          </Col>
        </Row>
      </Container>
      <Row>
        <Footer />
      </Row>
    </Router>
  );
}

export default App;
