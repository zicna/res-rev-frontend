import React, { Component } from 'react'

export default class RatingSelect extends Component {
handleChange = (event) => {
    this.props.setRating(event.target.value)
}
  render() {
    return (
      <div>
        <ul className="rating">
          <li>
            <input
              type="radio"
              id="num1"
              name="rating"
              value="1"
              onChange={this.handleChange}
            />
            <label htmlFor="num1">1</label>
          </li>
          <li>
            <input
              type="radio"
              id="num2"
              name="rating"
              value="2"
              onChange={this.handleChange}
            />
            <label htmlFor="num2">2</label>
          </li>
          <li>
            <input
              type="radio"
              id="num3"
              name="rating"
              value="3"
              onChange={this.handleChange}
            />
            <label htmlFor="num3">3</label>
          </li>
          <li>
            <input
              type="radio"
              id="num4"
              name="rating"
              value="4"
              onChange={this.handleChange}
            />
            <label htmlFor="num4">4</label>
          </li>
          <li>
            <input
              type="radio"
              id="num5"
              name="rating"
              value="5"
              onChange={this.handleChange}
            />
            <label htmlFor="num5">5</label>
          </li>
          <li>
            <input
              type="radio"
              id="num6"
              name="rating"
              value="6"
              onChange={this.handleChange}
            />
            <label htmlFor="num6">6</label>
          </li>
          <li>
            <input
              type="radio"
              id="num7"
              name="rating"
              value="7"
              onChange={this.handleChange}
            />
            <label htmlFor="num7">7</label>
          </li>
          <li>
            <input
              type="radio"
              id="num8"
              name="rating"
              value="8"
              onChange={this.handleChange}
            />
            <label htmlFor="num8">8</label>
          </li>
          <li>
            <input
              type="radio"
              id="num9"
              name="rating"
              value="9"
              onChange={this.handleChange}
            />
            <label htmlFor="num9">9</label>
          </li>
          <li>
            <input
              type="radio"
              id="num10"
              name="rating"
              value="10"
              onChange={this.handleChange}
            />
            <label htmlFor="num10">10</label>
          </li>
        </ul>
      </div>
    )
  }
}
