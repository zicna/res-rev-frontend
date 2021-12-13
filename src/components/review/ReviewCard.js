import React, { Component } from 'react'
import { FaTimes } from 'react-icons/fa'


export default class ReviewCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="num-display">{this.props.review.mark}</div>
        <button className='close'><FaTimes /></button>
        <div className="text-display">{this.props.review.content}</div>
      </div>
    )
  }
}
