import React from 'react'
import ReviewCard from './ReviewCard'
const Reviews = ({reviews, deleteReview, restaurant}) => {
  const renderReviews = () => {
    return reviews.length === 0 ? (
      <p>No reviews for this restaurant</p>
    ) : (
      reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          deleteReview={deleteReview}
          restaurant={restaurant}
        />
      ))
    )
  }
  return <div>{renderReviews()}</div>
}

export default Reviews
