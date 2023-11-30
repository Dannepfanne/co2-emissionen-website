//approutes.js
import Home from "../components/Home";

import CO2Landing from "./CO2Landing";
import Ranking from "./Ranking";
import CO2Faq from "./CO2Faq";
import About from "./About";
import Contact from "./Contact";
import Help from "./Help";
import Imprint from "./Imprint";
import GDPR from "./GDPR";

const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/co2-faq", element: <CO2Faq /> },
  { path: "/co2-landing", element: <CO2Landing /> },
  { path: "/ueberuns", element: <About /> },
  { path: "/kontakt", element: <Contact /> },
  { path: "/hilfe", element: <Help /> },
  { path: "/impressum", element: <Imprint /> },
  { path: "/datenschutz", element: <GDPR /> },
  { path: "/ranking", element: <Ranking /> },
];

export default appRoutes;
