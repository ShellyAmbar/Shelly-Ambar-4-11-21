import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <button className="navbar-brand"></button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="favorites" className="nav-link">
                favorites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
