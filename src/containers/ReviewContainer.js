import React from 'react'
import ReviewForm from '../components/review/ReviewForm'
import ReviewStats from '../components/review/ReviewStats'
import Reviews from '../components/review/Reviews'

import { connect } from 'react-redux'
import { deleteReview } from '../redux/actions/reviewAction'

class ReviewContainer extends React.Component {
  constructor(props){
    super(props)
  }
  handleDeleteReview = (review_id) =>{
    this.props.dispatchDeleteReview(review_id)
    // console.log('hello from review conrtainr delete')
  }
  render() {
    return (
      <div>
        <ReviewForm restaurant={this.props.restaurant} />
        <ReviewStats
          rating={this.props.restaurant.rating}
          review_count={this.props.restaurant.review_count}
        />
        <Reviews
          restaurant={this.props.restaurant}
          reviews={this.props.restaurant.reviews}
          deleteReview={this.handleDeleteReview}
        />
      </div>
    )
  }
}
// ! this might not be needed ???
const mapStateToProps = (state) => {
  // debugger
  return {
    ...state.restaurants,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeleteReview: (id) => dispatch(deleteReview(id)),
  }
}

// .filter(res => res.id === this.props.restaurant_id)

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer)
