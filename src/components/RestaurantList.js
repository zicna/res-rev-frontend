import React, { Component } from "react";

import RestaurantCard from "./RestaurantCard";
import RestaurantForm from "./RestaurantForm";

export default class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newRestaurant: false,
      toggleForm: () => this.toggleForm(),
    };
  }
  toggleForm = () => {
    this.setState((prevState) => ({
      newRestaurant: !prevState,
    }));
  };

  handleNewResClick = () => {
    this.setState({
      newRestaurant: true,
    });
  };
  
  render() {
    return (
      <div>
        {this.state.newRestaurant ? (
          <RestaurantForm toggleForm={this.state.toggleForm} />
        ) : (
          <button onClick={this.handleNewResClick}>Add new restaurant</button>
        )}
        {this.props.restaurants.map((res) => {
          return (
            <div key={res.id}>
              <p >{res.name}</p>
              {/* <button>Edit</button>
              <button onClick={this.handleDelete}>Delete</button> */}
              <button>Show More</button>
            </div>
          );
        })}
      </div>
    );
  }
}
