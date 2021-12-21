import React from 'react'
import ReviewCard from './ReviewCard'
const Reviews = ({reviews, deleteReview, restaurant, editReview}) => {
  const renderReviews = () => {
    return reviews.length === 0 ? (
      <div className='card'>No reviews for this restaurant</div>
    ) : (
      reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          restaurant={restaurant}
          editReview={editReview}
        />
      ))
    )
  }
  return <div>{renderReviews()}</div>
}

export default Reviews
