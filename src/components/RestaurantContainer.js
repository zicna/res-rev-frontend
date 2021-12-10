import React, { Component } from "react";

import { connect } from 'react-redux'
import {getRestaurants} from '../redux/actions/restaurantAction'

import RestaurantCard from "./RestaurantCard";

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount(){
      this.props.dispatchSetRestaurants()
    
  }
  renderRestaurants = () => {
    console.log('rendering...')
    {this.props.restaurants.map(res => <p>{res.name}</p>)}

    
  }
  render() {
    return (
      <div>
        {/* {this.renderRestaurants()} */}
        {this.props.restaurants.map(res => <RestaurantCard key={res.id} restaurant={res} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.restaurants
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetRestaurants: () => dispatch(getRestaurants())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);
