import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainHeader() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/"
                            // activeClassName={}
                        >
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about"
                            // activeClassName={}
                        >
                        About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/restaurants"
                            // activeClassName={}
                        >
                        Restaurants
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
