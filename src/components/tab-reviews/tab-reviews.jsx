import React from "react";
import PropTypes from "prop-types";

const TabReviews = (props) => {
  const {movie} = props;
  const {reviews} = movie;

  const reviewsSeparator = () => {
    return reviews.reduce((acc, review, i) => {
      if (i % 2 === 0) {
        acc.left.push(review);
      } else {
        acc.right.push(review);
      }
      return acc;

    }, {left: [], right: []});
  };

  const renderReviews = (array) => {
    return array.map((review, i) => {
      const {text, author, rating, date} = review;

      return (
        <div key={`${i}-${author}`} className="review">
          <blockquote className="review__quote">
            <p className="review__text">{text}</p>

            <footer className="review__details">
              <cite className="review__author">{author}</cite>
              <time className="review__date" dateTime={date}>{date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{rating}</div>
        </div>
      );
    });
  };

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {renderReviews(reviewsSeparator().left)}
      </div>

      <div className="movie-card__reviews-col">
        {renderReviews(reviewsSeparator().right)}
      </div>
    </div>
  );
};


TabReviews.propTypes = {
  movie: PropTypes.shape({
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }))
  }).isRequired
};

export default TabReviews;
