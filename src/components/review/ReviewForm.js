import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReview } from '../../redux/actions/reviewAction'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      mark: '',
      restaurant_id: this.props.restaurant.id,
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { content, mark, restaurant_id } = this.state
    const reviewObj = {
      review: {
        content,
        mark,
        restaurant_id,
      },
    }
    // * call method form props, after connection to Redux
    this.props.dispatchAddReview(reviewObj)

    // * reset local state
    this.setState({
      content: '',
      mark: '',
      restaurant_id: this.props.restaurant.id,
    })
  }
  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <h2>How would you rate {this.props.restaurant.name} restaurant?</h2>
            <div className="input-group">
              <input
                type="textarea"
                rows="4"
                cols="50"
                name="content"
                value={this.state.name}
                onChange={this.handleChange}
                required
                autoFocus
                placeholder="Write a review"
              />
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
              <input className='btn-secundary'type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddReview: (reviewObject) => dispatch(addReview(reviewObject)),
  }
}

export default connect(null, mapDispatchToProps)(ReviewForm)
