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
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
  }).isRequired
};

export default TabOverview;
