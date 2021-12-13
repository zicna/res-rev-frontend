import React, { Component } from "react";

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      mark: "",
      restaurnt_id: this.props.restaurant.id,
    };
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const {content, mark, restaurant_id} = this.state
    const reviewObj ={
        review:{
            content,
            mark,
            restaurant_id
        }
    }
    // * call method form props, after connection to Redux

    // * reset local state
    // !option one spread prevState and change content and mark 
    // !option two
    this.setState({
        content: '',
        mark: '',
        restaurant_id: this.props.restaurant.id

    })
  }
  handleCancel = () => {
    this.props.toggleForm()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>
            New Review for {this.props.restaurant.name} restaurant
          </legend>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Your review:</label>
            <div className="col-sm-10">
              <input
                type="textarea"
                rows="4"
                cols="50"
                name="content"
                value={this.state.name}
                onChange={this.handleChange}
                required
                autoFocus
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Mark:</label>
            <div className="col-sm-10">
              <input
                type="number"
                min={1}
                max={10}
                name="mark"
                value={this.state.mark}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="col-sm-10">
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
          <div className="col-sm-10">
            <input type="submit" value="Create New Review" />
          </div>
        </fieldset>
      </form>
    );
  }
}
