import React, { Component } from 'react'
import ImageContainer from '../ImageContainer'
import { connect } from 'react-redux'
import { deleteRestaurant } from '../../redux/actions/restaurantAction'
import { FaTimes } from 'react-icons/fa'
import ReviewContainer from '../../containers/ReviewContainer'
// import { deleteReview } from '../../redux/actions/reviewAction'
// import ReviewStats from '../review/ReviewStats'
// import ReviewForm from '../review/ReviewForm'
// import Reviews from '../review/Reviews'


class RestaurantCard extends Component {
  handleEditClick = () => {
    console.log('Edit was clicked')
  }
  handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete?')) {
      const { match, restaurants } = this.props
      const restaurant = restaurants[match.params.id - 1]
      this.props.dispatchDeleteRestaurant(restaurant.id)
      this.props.history.push('/restaurants')
    }
  }
  renderRestaurant = () => {
    const { match, restaurant } = this.props
    // const restaurant = restaurants[match.params.id - 1]

    return (
      <div>
        <div style={{ width: '75%' }}>
          <h3>{restaurant.name}</h3>
          <div>
            <h6>{restaurant.res_type}</h6>
          </div>
          <ImageContainer image={restaurant.image} />
          <div>
            <p>{restaurant.description}</p>
          </div>
          <div>Here we will list reviews</div>
          <div>
            <button onClick={this.handleEditClick}>Edit</button>
            <button onClick={this.handleDeleteClick}>
              <FaTimes />
            </button>
          </div>
        </div>
        <div>
          <ReviewContainer restaurant={restaurant} />
        </div>
      </div>
    )
  }

  render() {
    return <div>{this.renderRestaurant()}</div>
    // return <>Hello form Restaurant Card</>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeleteRestaurant: (id) => dispatch(deleteRestaurant(id)),
  }
}

export default connect(null, mapDispatchToProps)(RestaurantCard)
