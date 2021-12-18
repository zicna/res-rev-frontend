import React, { Component } from 'react'

export default class RatingSelect extends Component {

  constructor(props){
    super(props)
    this.state = {
      selected: this.props.selected
    }
  }
handleChange = (event) => {
    this.setState({
      selected: parseInt(event.currentTarget.value)
    })
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
              checked={this.state.selected === 1}
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
              checked={this.state.selected === 2}
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
              checked={this.state.selected === 3}
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
              checked={this.state.selected === 4}
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
              checked={this.state.selected === 5}
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
              checked={this.state.selected === 6}
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
              checked={this.state.selected === 7}
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
              checked={this.state.selected === 8}
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
              checked={this.state.selected === 9}
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
              checked={this.state.selected === 10}
            />
            <label htmlFor="num10">10</label>
          </li>
        </ul>
      </div>
    )
  }
}
