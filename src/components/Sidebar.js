// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTable } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>CO2 Tracker</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <Link to="/co2">
            <FontAwesomeIcon icon={faTable} /> CO2 Table
          </Link>
        </li>
        {/* Füge hier weitere Links hinzu, wenn nötig */}
      </ul>
    </nav>
  );
};

export default Sidebar;
