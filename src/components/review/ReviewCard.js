import React, { Component } from 'react'

export default class ReviewCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="num-display">{this.props.review.mark}</div>
        <div className="text-display">Content: {this.props.review.content}</div>
      </div>
    )
  }
}
