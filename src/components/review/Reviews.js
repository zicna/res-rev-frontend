import React from "react";
import ReviewCard from "./ReviewCard";

class Reviews extends React.Component{
  constructor(props){
    super(props)
    this.state ={

    }
  }
  renderReviews = () => {
    return this.props.reviews.map((review) => (
      <ReviewCard key={review.id} review={review} />
    ));
  };
  render(){
    return <div>{this.renderReviews()}</div>;
  }
};

export default Reviews;
