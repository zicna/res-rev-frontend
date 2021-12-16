import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import RestaurantForm from './RestaurantForm'

export default class Restaurants extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addNewRestaurant: false,
      toggleForm: () => this.toggleForm(),
    }
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      addNewRestaurant: !prevState,
    }))
  }

  handleNewResClick = () => {
    this.setState({
      addNewRestaurant: true,
    })
  }

  renderRestaurants = () => {
    const { restaurants, match } = this.props

    return restaurants.map((r, index) => (
    
      <div className="card" key={r.id}>
        <Link to={`${match.url}/${index + 1}`} >
          <div >{r.name}</div>
        </Link>
      </div>
    ))
  }

  render() {
    return (
      <>
        <div>
          {this.state.addNewRestaurant ? (
            <RestaurantForm toggleForm={this.state.toggleForm} />
          ) : (
            <button className='btn btn-primary' onClick={this.handleNewResClick}>Add</button>
          )}
        </div>
        {this.renderRestaurants()}
      </>
    )
  }
}
