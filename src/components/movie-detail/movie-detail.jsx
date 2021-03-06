import React from "react";
import PropTypes from "prop-types";
import {TabLabel} from "../../mocks/tabs";
import TabNav from "../tab-nav/tab-nav";
import TabDetails from "../tab-details/tab-details";
import TabOverview from "../tab-overview/tab-overview";
import TabReviews from "../tab-reviews/tab-reviews";
import MovieList from "../movie-list/movie-list";
import {Quantity} from "../../constants";
import {connect} from "react-redux";
import withActiveItem from "../../hocs/with-active-item";
import NameSpace from "../../reducer/name-space";

const MovieDetail = (props) => {
  const {
    activeMovie: {
      id,
      title,
      bg,
      background,
      poster,
      genre,
      release
    },
    activeItem,
    onChangeActiveTab,
    onCardTitleClick
  } = props;

  const renderActiveTab = (label, movie) => {
    switch (label) {
      case TabLabel.DETAILS:
        return <TabDetails movie={movie}/>;
      case TabLabel.REVIEWS:
        return <TabReviews movie={movie}/>;
      default:
        return <TabOverview movie={movie}/>;
    }
  };

  const getMoreLikeThisMovies = () => {
    return props.movies.filter((movie) => movie.id !== id && movie.genre === genre).slice(0, Quantity.LIKE_THIS);
  };

  return (
    <div>
      <section
        id={id}
        className="movie-card movie-card--full"
        style={{backgroundColor: bg}}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{release}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={title} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <TabNav
                tabs={TabLabel}
                activeItem={activeItem}
                onChangeActiveTab={onChangeActiveTab}
              />

              {renderActiveTab(activeItem, props.activeMovie)}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {getMoreLikeThisMovies().length > 0 && (
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <MovieList
              movies={getMoreLikeThisMovies()}
              onCardTitleClick={onCardTitleClick}
            />
          </section>
        )}

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
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
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.number.isRequired,
    release: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })).isRequired
  })).isRequired,
  activeMovie: PropTypes.shape({
    id: PropTypes.string,
    bg: PropTypes.string.isRequired,
    background: PropTypes.string,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string,
    genre: PropTypes.string,
    release: PropTypes.number
  }),
  activeItem: PropTypes.string.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func
};

MovieDetail.defaultProps = {
  activeMovie: {},
  onCardTitleClick: () => {}
};

const mapStateToProps = (state) => {
  return {
    movies: state[NameSpace.DATA].movies
  };
};

export default connect(mapStateToProps)(withActiveItem(MovieDetail, TabLabel.OVERVIEW));
