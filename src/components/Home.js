// Home.js

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <h2>Hier ist die Homepage</h2>
      <p>
        Hier steht ein Text, warum CO2 wichtig ist. Die Homepage bietet
        Übersichten zu <Link to="/co2">Gesamtdaten</Link>, einer{" "}
        <Link to="/co2-country-rank">Länderübersicht</Link> und einer Bilanz von{" "}
        <Link to="/co2-company-rank">Unternehmen</Link>.
      </p>
    </Container>
  );
};

export default Home;
