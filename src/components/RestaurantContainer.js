import React, { Component } from "react";

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  getRestaurants = () => {
      console.log('helllo')
    fetch('http://localhost:3001/restaurants')
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  render() {
    return (
      <div>
        <button onClick={this.getRestaurants}>Show all Restaurants</button>
      </div>
    );
  }
}



export default RestaurantContainer;
