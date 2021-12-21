import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import RestaurantForm from './RestaurantForm'

export default class Restaurants extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addNewRestaurant: false,
      toggleForm: () => this.toggleForm(),
      factor: 0
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

  handleClick = (event) => {
    if (event.target.innerText === "Add points" ){
      event.target.innerText = 0
    }else if (parseInt(event.target.innerText) === 0 ){
      event.target.innerText = parseInt(event.target.innerText) + parseInt(this.state.factor)
    }else{
      event.target.innerText = parseInt(event.target.innerText) * parseInt(this.state.factor)
    }
  }

  renderRestaurants = () => {
    const { restaurants, match } = this.props

    return restaurants.map((r, index) => (
    
      <div className="card" key={r.id}>
        <Link to={`${match.url}/${index + 1}`} >
          <div >{r.name}</div>
        </Link>
        <div><button onClick={this.handleClick}>Add points</button></div>



      </div>
    ))
  }

  handleChangeFactor = (event) => {
    this.setState({
      factor: event.target.value
    })
  }

  render() {
    return (
      <>

      <input 
      type="number"
      onChange={this.handleChangeFactor}
      value={this.state.factor} />
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
