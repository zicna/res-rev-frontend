// ! here we are conditionaly rendering new res form based of local state 


import React, { Component } from "react";

// import { Link, Route } from 'react-router-dom'
import RestaurantForm from "./RestaurantForm";
import RestaurantFn from "./RestaurantFn";

export default class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewRestaurant: false,
      toggleForm: () => this.toggleForm(),
    };
  }
  toggleForm = () => {
    this.setState((prevState) => ({
      addNewRestaurant: !prevState,
    }));
  };

  handleNewResClick = () => {
    this.setState({
      addNewRestaurant: true,
    });
  };

  render() {
    console.log(this.props)
    return (
      <div>
        {this.state.addNewRestaurant ? (
          <RestaurantForm toggleForm={this.state.toggleForm} />
        ) : (
          <button onClick={this.handleNewResClick}>Add new restaurant</button>
        )}
        <RestaurantFn {...this.props} />
        
      </div>
    );
  }
}

