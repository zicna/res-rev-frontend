// ! NOT IN USE

import React, { Component } from "react";

import { connect } from "react-redux";
import { getRestaurants } from "../redux/actions/restaurantAction";

// import RestaurantCard from "./RestaurantCard";
import RestaurantList from "./RestaurantList";

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    this.props.dispatchSetRestaurants();
  }

  render() {
    return (
      <div>
        <RestaurantList restaurants={this.props.restaurants} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.restaurants,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetRestaurants: () => dispatch(getRestaurants()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantContainer);
