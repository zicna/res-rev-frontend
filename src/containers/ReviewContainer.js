import React from 'react'
import ReviewForm from '../components/review/ReviewForm'
import ReviewStats from '../components/review/ReviewStats'
import Reviews from '../components/review/Reviews'

export default function ReviewContainer({restaurant}) {
    return (
        <div>
            <ReviewForm restaurant={restaurant} />
            <ReviewStats
              rating={restaurant.rating}
              review_count={restaurant.review_count}
            />
            <Reviews restaurant={restaurant} reviews={restaurant.reviews} />

        </div>
    )
}

