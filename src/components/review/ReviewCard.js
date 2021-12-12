import React, { Component } from 'react'

export default class ReviewCard extends Component {
    render() {
        return (
            <div className="card-header">
                <p>Mark: {this.props.review.mark}</p>
                <p>Content: {this.props.review.content}</p>

            </div>
        )
    }
}
