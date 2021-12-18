import React from 'react'
import ReviewForm from '../components/review/ReviewForm'
import ReviewStats from '../components/review/ReviewStats'
import Reviews from '../components/review/Reviews'

class ReviewContainer extends React.Component {
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
        />
      </div>
    )
  }
}

export default ReviewContainer
