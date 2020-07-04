import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import withHover from "../../hocs/with-hover";

const Card = withHover(MovieCard);

const MovieList = (props) => {
  const {movies, onCardTitleClick} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => {
        const {id} = movie;

        return (
          <Card
            key={id}
            movie={movie}
            onCardTitleClick={onCardTitleClick}
          />
        );
      })}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired
  })).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};

export default MovieList;
