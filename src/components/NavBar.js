import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

export default function NavBar() {
  return (
    <>
      <div className="logo">LOGO</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <FaHome /> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="/restaurants">RESTAURANTS</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
