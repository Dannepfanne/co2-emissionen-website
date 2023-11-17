// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTable } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        CO2 Emissions Tracker
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/co2" className="nav-link">
              <FontAwesomeIcon icon={faTable} /> CO2 Table
            </Link>
          </li>
          {/* Füge hier weitere Links hinzu, wenn nötig */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
