import React, { Component } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { connect } from 'react-redux'
import { deleteReview, editReview } from '../../redux/actions/reviewAction'

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

  render() {
    return (
      <div className="card">
        <div className="num-display">{this.props.review.mark}</div>
        <button
          onClick={() => this.props.dispatchDeleteReview(this.props.review.id)}
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

const mapStateToProps = (state) => {
  return {
    ...state.restaurnats,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeleteReview: (review_id) => dispatch(deleteReview(review_id)),
    dispatchEditReview: (reviewObject) => dispatch(editReview(reviewObject)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard)
