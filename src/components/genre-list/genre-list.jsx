import React from "react";
import PropTypes from "prop-types";
import GenreListItem from "../genre-list-item/genre-list-item";

const GenreList = (props) => {
  const {genreList, currentGenreItem, onChangeActiveTab} = props;

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre, i) => {
        return (
          <GenreListItem
            key={`${i}-${genre}`}
            genre={genre}
            currentGenreItem={currentGenreItem}
            onChangeActiveTab={onChangeActiveTab}
          />
        );
      })}
    </ul>
  );
};

GenreList.propTypes = {
  genreList: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenreItem: PropTypes.string.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired
};

export default GenreList;
