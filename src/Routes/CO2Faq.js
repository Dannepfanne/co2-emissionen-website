//CO2Faq.js
import { Accordion } from "react-bootstrap";

const CO2Faq = () => {
  return (
    <>
      <h2 className="text-center mt-3 mb-5">Häufige Fragen</h2>
      {/* Accordion-Funktion von React Bootstrap genutzt, da Fragen und Antworten somit kompakt und übersichtlich dargestellt werden können. */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Warum ist der CO2-Ausstoß wichtig?
          </Accordion.Header>
          <Accordion.Body>
            Der CO2-Ausstoß ist wichtig, weil Kohlendioxid ein Treibhausgas ist,
            das zur globalen Erwärmung beiträgt. Ein hoher CO2-Ausstoß führt zu
            Klimawandel, der wiederum extreme Wetterbedingungen und
            Umweltauswirkungen verursacht.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Warum tragen Unternehmen zum CO2-Ausstoß bei?
          </Accordion.Header>
          <Accordion.Body>
            Unternehmen tragen zum CO2-Ausstoß bei, weil sie bei der Produktion,
            dem Transport und dem Betrieb ihrer Geschäfte fossile Brennstoffe
            verwenden. Dies umfasst auch die Herstellung von Produkten und die
            Energieversorgung für Büros und Fabriken.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Welche Rolle spielen erneuerbare Energien bei der Reduzierung des
            CO2-Ausstoßes?
          </Accordion.Header>
          <Accordion.Body>
            Erneuerbare Energien wie Solarenergie und Windkraft produzieren
            Strom ohne CO&#8322;-Emissionen. Durch den Übergang von fossilen
            Brennstoffen zu erneuerbaren Energien kann ein Land seinen
            CO2-Ausstoß erheblich reduzieren.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Welche Auswirkungen hat der CO2-Ausstoß auf die Umwelt?
          </Accordion.Header>
          <Accordion.Body>
            Der CO&#8322;-Ausstoß führt zu Klimawandel, der wiederum zu
            extremeren Wetterereignissen, Meeresspiegelanstieg und Veränderungen
            in Ökosystemen führt. Dies beeinträchtigt die Tier- und Pflanzenwelt
            sowie die Lebensgrundlagen vieler Menschen.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Gibt es internationale Bemühungen zur Reduzierung des CO2-Ausstoßes?
          </Accordion.Header>
          <Accordion.Body>
            Ja, internationale Bemühungen wie das Pariser Abkommen setzen Ziele
            für Länder, um den globalen Temperaturanstieg zu begrenzen. Es
            fördert die Zusammenarbeit zwischen Ländern, um den CO2-Ausstoß zu
            reduzieren.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Wie kann ein Land seinen CO2-Ausstoß reduzieren?
          </Accordion.Header>
          <Accordion.Body>
            Länder können ihren CO2-Ausstoß reduzieren, indem sie erneuerbare
            Energiequellen wie Sonne und Wind fördern, Energieeffizienz
            verbessern, den öffentlichen Verkehr ausbauen und Gesetze einführen,
            die den Ausstoß von Treibhausgasen begrenzen.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default CO2Faq;
