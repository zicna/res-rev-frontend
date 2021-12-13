import React, { Component } from 'react'

export default class RestaurantStats extends Component {
    render() {
        return (
            <div className='feedback-stats'>
                <h4>{this.props.review_count} Reviews</h4>
                <h4>Average Rating: {this.props.rating}</h4>
            </div>
        )
    }
}