import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainHeader() {
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item'>
                            <NavLink
                                to='/'
                                // activeClassName={active}
                                className='nav-link'
                            >
                            Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/about'
                                // activeClassName={{active}}
                                className='nav-link'
                            >
                            About
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/restaurants'
                                // activeClassName={{active}}
                                className='nav-link'
                            >
                            Restaurants
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
