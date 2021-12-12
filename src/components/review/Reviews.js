import React, { Component } from 'react'
import ReviewCard from './ReviewCard'

export default class Reviews extends Component {

    renderReviews = () => {
        return this.props.reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
        ))
    }
    render() {
        return (
            <div>
                {this.renderReviews()}
            </div>
        )
    }
}
