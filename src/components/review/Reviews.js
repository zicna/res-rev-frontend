import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = ({reviews}) => {
  const renderReviews = () => {
    return reviews.map((review) => (
      <ReviewCard key={review.id} review={review} />
    ));
  };
  return <div>{renderReviews()}</div>;
};

export default Reviews;
