import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from 'react-icons/fa'




export default function MainHeader() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <FaHome /> HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                 CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/restaurants" className="nav-link">
                RESTAURANTS
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
