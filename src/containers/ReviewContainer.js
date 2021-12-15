import React from 'react'
import ReviewForm from '../components/review/ReviewForm'
import ReviewStats from '../components/review/ReviewStats'
import Reviews from '../components/review/Reviews'

import { connect } from 'react-redux'
import { deleteReview } from '../redux/actions/reviewAction'

function ReviewContainer({ restaurant }) {
    
  const handleDeleteReview = (review_id) => {
    this.props.dispatchDeleteReview(review_id)
  }
  return (
    <div>
      <ReviewForm restaurant={restaurant} />
      <ReviewStats
        rating={restaurant.rating}
        review_count={restaurant.review_count}
      />
      <Reviews
        restaurant={restaurant}
        reviews={restaurant.reviews}
        deleteReview={handleDeleteReview}
      />
    </div>
  )
}
// ! this might not be needed ???
const mapStateToProps = (state) => {
  return {
    ...state,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeleteReview: (id) => dispatch(deleteReview(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer)
