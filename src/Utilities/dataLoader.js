// dataLoader.js
import { useEffect, useState } from "react";

const dataLoader = (WrappedComponent) => {
  return (props) => {
    const [co2Data, setCo2Data] = useState([]);

    const fetchCO2Data = async () => {
      try {
        const response = await fetch("/data/MOCK_c02.json");
        const data = await response.json();
        console.log("Fetched CO2 data:", data); // Hinzugefügter Log
        setCo2Data(data);
      } catch (error) {
        console.error("Fehler beim Laden der CO2-Daten:", error);
      }
    };

    useEffect(() => {
      fetchCO2Data();
    }, []);

    useEffect(() => {
      console.log("CO2 data in dataLoader:", co2Data); // Hinzugefügter Log
    }, [co2Data]);

    return <WrappedComponent {...props} co2Data={co2Data} />;
  };
};

export default dataLoader;
