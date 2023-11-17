// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CO2Table from "./components/CO2Table";
import Sidebar from "./components/Sidebar";
import "./scss/Custom.scss";

function App() {
  const [co2Data, setCo2Data] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data/MOCK_c02.json");
        const data = await response.json();
        setCo2Data(data);
      } catch (error) {
        console.error("Fehler beim Laden der CO2-Daten:", error);
      }
    };

    loadData();
  }, []);

  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Switch>
              <Route
                path="/"
                exact
                render={() => <Home co2DataProp={co2Data} />}
              />
              <Route
                path="/co2"
                exact
                render={() => <CO2Table co2DataProp={co2Data} />}
              />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
