import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import withPlayer from "../../hocs/withPlayer";

const Card = withPlayer(MovieCard);

const MovieList = (props) => {
  const {movies, onCardTitleClick} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => {
        const {id} = movie;

        return (
          <Card
            key={id}
            card={movie}
            onCardTitleClick={onCardTitleClick}
          />
        );
      })}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};

export default MovieList;
