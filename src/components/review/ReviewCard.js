import React, { Component } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'

class ReviewCard extends Component {
  
  render() {
    return (
      <div className="card">
        <div className="num-display">{this.props.review.mark}</div>
        <button onClick={() => this.props.deleteReview(this.props.review.id)} className="close">
          <FaTimes color="purple" />
        </button>
        <button onClick={() => this.props.editReview(this.props.review.id)} className="edit">
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{this.props.review.content}</div>
      </div>
    )
  }
}

export default ReviewCard
