import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MoviePlayer from "../movie-player/movie-player";

const MovieCard = (props) => {
  const {
    movie,
    onMouseOver,
    onMouseLeave,
    onCardTitleClick,
    isHover,
  } = props;

  const {
    id,
    title,
    videoPrev,
    preview,
  } = movie;

  return (
    <article
      id={id}
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <Link
        to="/detail"
      >
        <div
          className="small-movie-card__image"
          onClick={() => onCardTitleClick(movie)}
        >
          <MoviePlayer video={videoPrev} poster={preview} isHover={isHover}/>
        </div>
      </Link>

      {!isHover && (
        <h3
          className="small-movie-card__title"
          onClick={(e) => {
            e.preventDefault();
            onCardTitleClick(movie);
          }}
        >
          <Link
            to="/detail"
            className="small-movie-card__link"
          >
            {title}
          </Link>
        </h3>
      )}
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    videoPrev: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.number.isRequired,
    release: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }))
  }).isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  isHover: PropTypes.bool.isRequired,
};

export default MovieCard;


