import React, { Component } from "react";

import { connect } from 'react-redux'

import {getRestaurants} from '../redux/actions/restaurantAction'

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  getRestaurants = () => {
      console.log('helllo')
      this.props.dispatchSetRestaurants()
    
  };
  render() {
    return (
      <div>
        <button onClick={this.getRestaurants}>Show all Restaurants</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToPRops = (dispatch) => {
  return {
    dispatchSetRestaurants: () => dispatch(getRestaurants())
  }
}



export default connect(mapStateToProps, mapDispatchToPRops)(RestaurantContainer);
