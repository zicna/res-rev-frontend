import React from 'react'
import ReviewForm from '../components/review/ReviewForm'
import ReviewStats from '../components/review/ReviewStats'
import Reviews from '../components/review/Reviews'
import ReviewEditForm from '../components/review/ReviewEditForm'

class ReviewContainer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      review: {
        id:'',
        restaurant_id:'',
        content: '',
        mark: ''
      },
      edit:false
    }
  }

  handleEditReview = ({id, mark, content, restaurant_id}) => {
    console.log(`id: ${id}; mark: ${mark}; content: ${content}`)
    this.setState({
      review:{
        id,
        restaurant_id,
        mark,
        content
      },
      edit: true
    })
  }
  render() {
    return (
      <div>
        { this.state.edit ? < ReviewEditForm restaurant={this.props.restaurant} review={this.state.review}/> : <ReviewForm restaurant={this.props.restaurant} />}
        <ReviewStats
          rating={this.props.restaurant.rating}
          review_count={this.props.restaurant.review_count}
        />
        <Reviews
          restaurant={this.props.restaurant}
          reviews={this.props.restaurant.reviews}
          editReview={this.handleEditReview}
        />
      </div>
    )
  }
}

export default ReviewContainer
