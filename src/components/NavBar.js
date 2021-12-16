import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from 'react-icons/fa'




export default function MainHeader() {
  return (
      <nav >
        <div>
          <ul>
            <li>
              <NavLink to="/" >
                <FaHome /> HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" >
                 CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink to="/restaurants" >
                RESTAURANTS
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
}
