// CO2Landing.js

import { Container } from "react-bootstrap";
import CO2Table from "./CO2Table";

const CO2Landing = (co2Data) => {
  return (
    <Container>
      <h2 id="intro">Hier steht das Intro für CO&#8322;Landing</h2>
      <p>
        Die Dokumentation des CO&#8322;-Ausstoßes von Unternehmen und Ländern
        ist von entscheidender Bedeutung, um das Bewusstsein für die
        Umweltauswirkungen von industriellen und nationalen Aktivitäten zu
        schärfen. Ein transparenter Überblick über CO&#8322;-Emissionen trägt
        dazu bei, Verantwortung zu fördern und umweltfreundliche Entscheidungen
        auf individueller und organisatorischer Ebene zu unterstützen. Die
        Dokumentation ermöglicht es, den Fortschritt bei der Reduzierung von
        CO&#8322;-Emissionen zu verfolgen und positive Veränderungen in Richtung
        Nachhaltigkeit zu fördern.
        <br />
        CO&#8322;-LOG ermöglicht die übersichtliche Darstellung von
        CO&#8322;-Emissionsdaten in einer benutzerfreundlichen Tabelle. Durch
        die einfache Navigation und Filterung erhalten Benutzer einen klaren
        Überblick über die CO&#8322;-Bilanz verschiedener Länder und
        Unternehmen. Diese visuelle Darstellung fördert Transparenz und trägt
        dazu bei, umweltfreundliche Entscheidungen auf individueller und
        organisatorischer Ebene zu fördern. CO&#8322; LOG spielt somit eine
        wichtige Rolle in der Sensibilisierung für und dem Umgang mit
        CO&#8322;-Emissionen.
      </p>
      <CO2Table co2Data={co2Data} />
    </Container>
  );
};

export default CO2Landing;
