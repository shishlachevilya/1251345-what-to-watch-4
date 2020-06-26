import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MoviePlayer from "../movie-player/movie-player";

const MovieCard = (props) => {
  const {
    card,
    onMouseOver,
    onMouseLeave,
    onCardTitleClick,
    isHover,
  } = props;

  const {
    id,
    name,
    video,
    preview,
  } = card;

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
          onClick={() => onCardTitleClick(card)}
        >
          <MoviePlayer video={video} poster={preview} isHover={isHover}/>
        </div>
      </Link>

      {!isHover && (
        <h3
          className="small-movie-card__title"
          onClick={(e) => {
            e.preventDefault();
            onCardTitleClick(card);
          }}
        >
          <Link
            to="/detail"
            className="small-movie-card__link"
          >
            {name}
          </Link>
        </h3>
      )}
    </article>
  );
};

MovieCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }),
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  isHover: PropTypes.bool.isRequired,
};

export default MovieCard;


