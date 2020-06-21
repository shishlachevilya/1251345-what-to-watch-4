import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {
    card,
    onMouseOver,
    onCardTitleClick
  } = props;

  const {
    id,
    name,
    preview_image: preview
  } = card;

  return (
    <article
      id={id}
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMouseOver(id)}
    >
      <Link
        to="/detail"
      >
        <div
          className="small-movie-card__image"
          onClick={() => onCardTitleClick(card)}
        >
          <img src={preview} alt={name} width="280" height="175"/>
        </div>
      </Link>
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
    </article>
  );
};

MovieCard.propTypes = {
  card: PropTypes.object.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func.isRequired
};

export default MovieCard;


