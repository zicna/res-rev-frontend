import React, { Component } from "react";

import { connect } from 'react-redux'
import { addRestaurant } from "../redux/actions/restaurantAction";

class RestaurantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      res_type: "",
      image: "",
      description: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, location, res_type, image, description} = this.state
    const resObj = {
      restaurant:{
        name,
        location,
        res_type,
        image,
        description
      }
    }

    this.props.dispatchAddRestaurant(resObj)

    // * reset local state after submiting form
    this.setState({
      name: "",
      location: "",
      res_type: "",
      image: "",
      description: "",
    });
    this.props.toggleForm();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>New Restaurant Legend</legend>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Location</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Restaurant type</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="res_type"
                value={this.state.res_type}
                required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Image</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="image"
                required
                value={this.state.image}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="col-sm-10">
            <input type="submit" value="Create New Restaurant" />
          </div>
        </fieldset>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddRestaurant: (restaurantObj) => dispatch(addRestaurant(restaurantObj))
  }
}

export default connect(null, mapDispatchToProps)(RestaurantForm)
