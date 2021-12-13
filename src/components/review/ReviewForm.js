import React, { Component } from "react";
import { connect } from 'react-redux'
import { addReview } from '../../redux/actions/reviewAction'

class ReviewForm extends Component {
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
    this.props.dispatchAddReview(reviewObj)

    // * reset local state
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
          <div>
            <label>Your review:</label>
            <div>
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
          <div>
            <label>Mark:</label>
            <div>
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
          <div>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
          <div>
            <input type="submit" value="Create New Review" />
          </div>
        </fieldset>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddReview: (reviewObject) => dispatch(addReview(reviewObject))
    }
}

export default connect()(ReviewForm)
