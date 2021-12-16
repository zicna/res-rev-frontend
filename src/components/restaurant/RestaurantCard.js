import React, { Component } from 'react'
import ImageContainer from '../ImageContainer'
import { connect } from 'react-redux'
import { deleteRestaurant } from '../../redux/actions/restaurantAction'
import { deleteReview } from '../../redux/actions/reviewAction'
import { FaTimes, FaEdit } from 'react-icons/fa'
import ReviewContainer from '../../containers/ReviewContainer'

class RestaurantCard extends Component {
  handleEditClick = () => {
    console.log('Edit was clicked')
  }
  handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete restaurant?')) {
      const { match, restaurants } = this.props
      const restaurant = restaurants[match.params.id - 1]
      this.props.dispatchDeleteRestaurant(restaurant.id)
      this.props.history.push('/restaurants')
    }
  }
  renderRestaurant = () => {
    const { match } = this.props
    const restaurantObject = this.props.restaurants[match.params.id - 1]

    return (
      <div>
        <div className="card">
          <h3>{restaurantObject.name}</h3>
          <div>
            <h6>{restaurantObject.res_type}</h6>
          </div>
          <ImageContainer image={restaurantObject.image} />
          <div>
            <p>{restaurantObject.description}</p>
          </div>
          <div>
            <button className="btn btn-primary" onClick={this.handleEditClick}>
              <FaEdit />
            </button>
            <button
              className="btn btn-primary"
              onClick={this.handleDeleteClick}
            >
              <FaTimes />
            </button>
          </div>
        </div>
        <div>
          <ReviewContainer
            restaurant={this.props.restaurants[match.params.id - 1]}
            deleteReview={this.props.dispatchDeleteReview}
          />
        </div>
      </div>
    )
  }

  render() {
    return <div>{this.renderRestaurant()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.restaurants,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeleteRestaurant: (id) => dispatch(deleteRestaurant(id)),
    dispatchDeleteReview: (review_id) => dispatch(deleteReview(review_id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCard)
