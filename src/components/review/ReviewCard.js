import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../../redux/actions/reviewAction'
import { FaTimes } from 'react-icons/fa'



class ReviewCard extends Component {

  handleDeleteReview = () => {
    this.props.dispatchDeleteReview(this.props.review.id)
  }
  render() {
    return (
      <div className="card">
        <div className="num-display">{this.props.review.mark}</div>
        <button onClick={this.handleDeleteReview}className='close'><FaTimes color='purple'/></button>
        <div className="text-display">{this.props.review.content}</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeleteReview: (id) => dispatch(deleteReview(id))
  }
}

export default connect(null, mapDispatchToProps)(ReviewCard)

