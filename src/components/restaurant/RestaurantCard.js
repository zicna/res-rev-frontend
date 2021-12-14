import React, { Component } from 'react'
import ImageContainer from '../ImageContainer'
import { connect } from 'react-redux'
import { deleteRestaurant } from '../../redux/actions/restaurantAction'
import { deleteReview } from '../../redux/actions/reviewAction'
import Reviews from '../review/Reviews'
import { FaTimes } from 'react-icons/fa'
import RestaurantStats from './RestaurantStats'
import ReviewForm from '../review/ReviewForm'

class RestaurantCard extends Component {
  handleEditClick = () => {
    console.log('Edit was clicked')
  }
  handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete?')) {
      const { match, restaurants } = this.props
      const resObj = restaurants[match.params.id - 1]
      this.props.dispatchDeleteRestaurant(resObj.id)
      this.props.history.push('/restaurants')
    }
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
            <button onClick={this.handleDeleteClick}>
              <FaTimes />
            </button>
          </div>
        </div>
        <div>
          <ReviewForm restaurant={resObj} />
          <RestaurantStats
            rating={resObj.rating}
            review_count={resObj.review_count}
          />
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
