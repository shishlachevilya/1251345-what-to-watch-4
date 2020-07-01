import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {loadMore} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={loadMore}
      >
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  loadMore: PropTypes.func.isRequired
};

export default ShowMoreButton;
