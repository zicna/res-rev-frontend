import React from 'react'
import ReviewCard from './ReviewCard'
const Reviews = ({reviews, deleteReview, restaurant, editReview}) => {
  const renderReviews = () => {
    return reviews.length === 0 ? (
      <p>No reviews for this restaurant</p>
    ) : (
      reviews.slice().reverse().map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          restaurant={restaurant}
        />
      ))
    )
  }
  return <div>{renderReviews()}</div>
}

export default Reviews
