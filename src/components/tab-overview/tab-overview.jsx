import React from "react";
import PropTypes from "prop-types";
import {ratingLabels} from "../../mocks/rating";

const TabOverview = (props) => {
  const {
    movie: {
      rating,
      description,
      votes
    }
  } = props;

  const ratingTransformToLabel = () => {
    const floor = Math.floor(rating);

    return ratingLabels.find((label) => label.rating <= floor).title;
  };

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingTransformToLabel()}</span>
          <span className="movie-rating__count">{votes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
      </div>
    </React.Fragment>
  );
};

TabOverview.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    videoPrev: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    release: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }))
  }).isRequired
};

export default TabOverview;
