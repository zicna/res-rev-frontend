import React from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

class Reviews extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      addNewReview: false,
      toggleForm: () => this.toggleForm()
    }
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      addNewReview: !prevState
    }))
  }
  handleNewReviewClick = () => {
    this.setState({
      addNewReview: true
    })
  }
  renderReviews = () => {
    return this.props.reviews.map((review) => (
      <ReviewCard key={review.id} review={review} />
    ));
  };
  render(){
    return (
    <div>
      {this.state.addNewReview ? <ReviewForm toggleForm={this.state.toggleForm} /> : <button onClick={this.handleNewReviewClick}>Add new Review</button>}
      {this.renderReviews()}
    </div>
    );
  }
};

export default Reviews;
