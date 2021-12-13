import React, { Component } from 'react'
import ImageContainer from '../ImageContainer'
import { connect } from 'react-redux'
import { deleteRestaurant } from '../../redux/actions/restaurantAction'
import Reviews from '../review/Reviews'

class RestaurantCard extends Component {
  handleEditClick = () => {
    console.log('Edit was clicked')
  }
  handleDeleteClick = () => {
    const { match, restaurants } = this.props
    const resObj = restaurants[match.params.id - 1]
    this.props.dispatchDeleteRestaurant(resObj.id)
    this.props.history.push('/restaurants')
  }
  renderRestaurant = () => {
    const { match, restaurants } = this.props
    const resObj = restaurants[match.params.id - 1]

    return (
      <div>
        <div style={{ width: '75%' }}>
          <h3>{resObj.name}</h3>
          <div>
            <h6>{resObj.res_type}</h6>
          </div>
          <ImageContainer image={resObj.image} />
          <div>
            <p>{resObj.description}</p>
          </div>
          <div>Here we will list reviews</div>
          <div>
            <button onClick={this.handleEditClick}>Edit</button>
            <button onClick={this.handleDeleteClick}>Delete</button>
          </div>
        </div>
        <div>
          <Reviews restaurant={resObj} reviews={resObj.reviews} />
        </div>
      </div>
    )
  }

  render() {
    return <div>{this.renderRestaurant()}</div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeleteRestaurant: (id) => dispatch(deleteRestaurant(id)),
  }
}

export default connect(null, mapDispatchToProps)(RestaurantCard)
