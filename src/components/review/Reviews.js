import React from 'react'
import ReviewCard from './ReviewCard'
class Reviews extends React.Component {
  renderReviews = () => {
    return this.props.reviews.length === 0 ? (
      <p>No reviews for this restaurant</p>
    ) : (
      this.props.reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))
    )
  }
  render() {
    return <div>{this.renderReviews()}</div>
  }
}

export default Reviews
