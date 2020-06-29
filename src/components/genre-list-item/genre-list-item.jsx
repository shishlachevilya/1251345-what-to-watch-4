import React from "react";
import PropTypes from "prop-types";

const GenreListItem = (props) => {
  const {genre, currentGenreItem, onGenreItemClick} = props;

  return (
    <li className={`catalog__genres-item ${genre === currentGenreItem ? `catalog__genres-item--active` : ``} }`}>
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(e) => {
          e.preventDefault();
          onGenreItemClick(genre);
        }}
      >
        {genre}
      </a>
    </li>
  );
};

GenreListItem.propTypes = {
  genre: PropTypes.string.isRequired,
  currentGenreItem: PropTypes.string.isRequired,
  onGenreItemClick: PropTypes.func.isRequired
};

export default GenreListItem;
