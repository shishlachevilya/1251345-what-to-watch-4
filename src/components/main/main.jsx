import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MovieList from "../movie-list/movie-list";
import GenreList from "../genre-list/genre-list";
import {ALL_GENRES} from "../../constants";
import ShowMoreButton from "../show-more-button/show-more-button";
import withMoreMovies from "../../hocs/with-more-movies";
import MainPlayer from "../main-player/main-player";
import {toggleMainPlayer} from "../../reducer/data/data";
import NameSpace from "../../reducer/name-space";
import {getGenreList, getMoviesByGenre} from "../../reducer/data/celectors";
import {getAuthorizationStatus, getUserProfile} from "../../reducer/user/celectors";
import {AuthorizationStatus} from "../../constants";
import {Link} from "react-router-dom";

const Main = (props) => {
  const {
    movies,
    genres,
    visibleMoviesAmount,
    activeItem,
    isMainPlayerShow,
    onCardTitleClick,
    onChangeActiveTab,
    onLoadMoreMovies,
    onPlayButtonClick,
    authorizationStatus
  } = props;

  const filterMoviesByGenre = (movieArray) => {
    const filteredMovies = movieArray.filter((movie) => {
      if (activeItem.toLowerCase() !== ALL_GENRES.toLocaleLowerCase()) {
        return movie.genre.toLowerCase() === activeItem.toLowerCase();
      }

      return true;
    });

    return filteredMovies.slice(0, visibleMoviesAmount);
  };

  return (
    <React.Fragment>
      {!isMainPlayerShow ? (
        <div>
          <section className="movie-card">
            <div className="movie-card__bg">
              <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <Link to="/" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <div className="user-block">
                {authorizationStatus === AuthorizationStatus.NO_AUTH ?
                  (<Link to="/login" className="user-block__link">Sign in</Link>)
                  :
                  (
                    <div className="user-block__avatar">
                      <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                    </div>
                  )}
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__info">
                <div className="movie-card__poster">
                  <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
                </div>

                <div className="movie-card__desc">
                  <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
                  <p className="movie-card__meta">
                    <span className="movie-card__genre">Drama</span>
                    <span className="movie-card__year">2014</span>
                  </p>

                  <div className="movie-card__buttons">
                    <button
                      className="btn btn--play movie-card__button"
                      type="button"
                      onClick={onPlayButtonClick}
                    >
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
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="page-content">
            <section className="catalog">
              <h2 className="catalog__title visually-hidden">Catalog</h2>

              <GenreList
                genreList={genres}
                currentGenreItem={activeItem}
                onChangeActiveTab={onChangeActiveTab}
              />

              <div className="catalog__movies-list">
                {
                  <MovieList
                    movies={filterMoviesByGenre(movies)}
                    onCardTitleClick={onCardTitleClick}
                  />
                }
              </div>

              {visibleMoviesAmount < movies.length && <ShowMoreButton onLoadMoreMovies={onLoadMoreMovies}/>}
            </section>

            <footer className="page-footer">
              <div className="logo">
                <a className="logo__link logo__link--light">
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
      ) : (
        <MainPlayer/>
      )}
    </React.Fragment>
  );
};

Main.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired,
  })).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  activeItem: PropTypes.string.isRequired,
  visibleMoviesAmount: PropTypes.number.isRequired,
  isMainPlayerShow: PropTypes.bool.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired,
  onLoadMoreMovies: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    movies: getMoviesByGenre(state, props.activeItem),
    isMainPlayerShow: state[NameSpace.DATA].isMainPlayerShow,
    genres: getGenreList(state),
    authorizationStatus: getAuthorizationStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(toggleMainPlayer());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(withMoreMovies(Main));
