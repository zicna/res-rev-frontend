// * here we defined basic routes
// * we are using render prop to pass a callback so we can have access to history, location, match,... in component that are beeing rendered
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from './Contact'
import Restaurants from '../components/restaurant/Restaurants'
import RestaurantCard from '../components/restaurant/RestaurantCard'
import RestaurantForm from '../components/restaurant/RestaurantForm'

const RouteLayout = ({restaurants}) => {
  return (
    <Switch>
        <Route exact path='/' component={routerProps => < Home {...routerProps} />} />
        <Route exact path='/about' component={routerProps => < About {...routerProps}/>} />
        <Route exact path='/contact' component={routerProps => < Contact {...routerProps}/>} />
        <Route exact path='/restaurants' component={routerProps => < Restaurants {...routerProps} restaurants={restaurants} />} />
        <Route exact path='/restaurants/:id' component={routerProps => < RestaurantCard {...routerProps} />} />
        <Route exact path='/restaurants/:id/edit' component={routerProps => < RestaurantForm {...routerProps} restaurants={restaurants} />} />
        <Route exact path='/restaurants/new' component={routerProps => < RestaurantForm {...routerProps} restaurants={restaurants} />} />
    </Switch>
  );
};

export default RouteLayout;
