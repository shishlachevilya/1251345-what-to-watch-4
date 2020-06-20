import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {
    card: {
      id,
      path,
      title
    },
    onMouseOver,
    onCardTitleClick
  } = props;

  return (
    <article
      id={id}
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMouseOver(id)}
    >
      <div className="small-movie-card__image">
        <img src={path} alt={title} width="280" height="175"/>
      </div>

      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={(e) => {
            e.preventDefault();
            onCardTitleClick({id, path, title});
          }}
        >{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  onMouseOver: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func.isRequired
};

export default MovieCard;


