// * Connect with Redux and pass props to MainLayout

import React, { Component } from "react";
import RoutesLayout from "../pages/RoutesLayout";
import { connect } from "react-redux";
import { getRestaurants } from "../redux/actions/restaurantAction";
class MainContainer extends Component {
  componentDidMount() {
    this.props.dispatchSetRestaurants();
  }
  render() {
    return (
      <div>
        <RoutesLayout restaurants={this.props.restaurants} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
