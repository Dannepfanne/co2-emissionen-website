// Ranking.js
import React, { useState, useEffect } from "react";
import dataLoader from "../Utilities/dataLoader";
import { ProgressBar } from "react-bootstrap";

const Ranking = ({ co2Data }) => {
  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    // Hier sollen die Daten nach Ländern gruppiert werden
    const groupDataByCountry = (data) => {
      // Logik für die Gruppierung nach Ländern
      const grouped = data.reduce((acc, current) => {
        const countryName = current.country;

        // Überprüfen, ob es schon einen Eintrag für das Land gibt
        if (!acc[countryName]) {
          // Wenn nicht, erstelle einen neuen Eintrag
          acc[countryName] = { country: countryName, totalCO2: 0 };
        }

        // CO2-Wert für das jeweilige Land summieren
        acc[countryName].totalCO2 += current.co2_year;

        return acc;
      }, {});

      // Umwandeln des Objektes in ein Array
      const resultArray = Object.values(grouped);

      // Sortiere nach CO2-Werten absteigend
      resultArray.sort((a, b) => b.totalCO2 - a.totalCO2);

      // Wähle die Top 3 Länder aus
      const topCountriesData = resultArray.slice(0, 10);

      // Setze den Zustand für die Top-Länder
      setGroupedData(topCountriesData);
    };

    if (co2Data !== undefined && co2Data.length > 0) {
      // Wenn Daten vorhanden sind, rufe die Gruppierungsfunktion auf
      groupDataByCountry(co2Data);
    }
  }, [co2Data]);

  return (
    <div>
      <h2>Top 10 Länder mit dem höchsten CO2-Ausstoß</h2>
      {groupedData.map((data, index) => (
        <div key={index} className="mb-3">
          <ProgressBar
            striped
            variant="danger"
            now={data.totalCO2 / 1000}
            label={`${data.totalCO2}`}
          />
          <p>{data.country}</p>
        </div>
      ))}
    </div>
  );
};

export default dataLoader(Ranking);
