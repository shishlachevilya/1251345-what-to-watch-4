import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {onLoadMoreMovies} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onLoadMoreMovies}
      >
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onLoadMoreMovies: PropTypes.func.isRequired
};

export default ShowMoreButton;
