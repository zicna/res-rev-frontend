import Reacr, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'
import RestaurantContainer from '../components/RestaurantContainer'

const Layout = () => {
    return(
        <Switch>
            <Route 
                path='/' 
                exact 
                component={Home} 
            />
            <Route 
                path='/about' 
                exact 
                component={About} 
            />
            <Route 
                path='/restaurants' 
                exact 
                component={RestaurantContainer} 
            />
        </Switch>
        
    )
}

export default Layout 