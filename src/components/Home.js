// Home.js
import React from "react";
import CO2Table from "./CO2Table";

const Home = ({ co2DataProp }) => {
  return (
    <div>
      <h2>Willkommen auf der CO2 Emissions Tracker Homepage</h2>
      <p>
        Hier findest du Informationen zu CO2-Emissionen von verschiedenen
        Unternehmen und Ländern.
      </p>
      <CO2Table co2DataProp={co2DataProp} />
    </div>
  );
};

export default Home;
