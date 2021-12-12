import React, { Component } from "react";
import ImageContainer from "../ImageContainer";

export default class RestaurantCard extends Component {
  renderRestaurant = () => {
    const { match, restaurants } = this.props;
    const resObj = restaurants[match.params.id - 1];

    // const {description, name, rating, image, res_type, location, reviews} = restaurants[match.params.id - 1]
    // console.log(resObj.name)
    // debugger
    // const {description, name, rating, image, res_type, location, reviews} = resObj
    return (
      <div className="card mb-3" style={{ width: "75%" }}>
        <h3 className="card-header">{resObj.name}</h3>
        <div className="card-body">
          <h6 className="card-subtitle text-muted">{resObj.res_type}</h6>
        </div>
        <ImageContainer image={resObj.image} />
        <div className="card-body">
          <p className="card-text">{resObj.description}</p>
        </div>
        <div className="card-body">Here we will list reviews</div>
        <div className="card-body">
          <a href="">Link for Edit Restaurant</a>

          <a href="">Link for delete Restaurant</a>
        </div>
      </div>
    );
  };
  render() {
    return <div>{this.renderRestaurant()}</div>;
  }
}
