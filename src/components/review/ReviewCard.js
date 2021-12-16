import React, { Component } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'

class ReviewCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        mark: '',
        content: '',
        id: '',
        resturant_id: '',
      },
    }
  }

  // handleEditClick = ({ id, restaurant_id, mark, content }) => {

  render() {
    return (
      <div className="card">
        <div className="num-display">{this.props.review.mark}</div>
        <button
          onClick={() => this.props.deleteReview(this.props.review.id)}
          className="close"
        >
          <FaTimes color="purple" />
        </button>
        <button
          onClick={() => this.handleEditClick(this.props.review)}
          className="edit"
        >
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{this.props.review.content}</div>
      </div>
    )
  }
}

export default ReviewCard
