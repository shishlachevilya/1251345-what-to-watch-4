import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getMovieByGenre} from "../../reducer";
import MovieList from "../movie-list/movie-list";
import GenreList from "../genre-list/genre-list";
import {ALL_GENRES} from "../../constants";
import ShowMoreButton from "../show-more-button/show-more-button";
import withMoreMovies from "../../hocs/with-more-movies";

const Main = (props) => {
  const {
    movies,
    visibleMoviesAmount,
    currentGenreItem,
    onCardTitleClick,
    onGenreItemClick,
    onLoadMoreMovies
  } = props;

  const filterMoviesByGenre = (movieArray) => {
    const filteredMovies = movieArray.filter((movie) => {
      if (currentGenreItem.toLowerCase() !== ALL_GENRES.toLocaleLowerCase()) {
        return movie.genre.toLowerCase() === currentGenreItem.toLowerCase();
      }

      return true;
    });

    return filteredMovies.slice(0, visibleMoviesAmount);
  };

  const setGenreList = () => {
    return movies.reduce((acc, movie) => {
      if (!acc.includes(movie.genre)) {
        acc.push(movie.genre);
      }

      return acc;
    }, [ALL_GENRES]);
  };

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
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
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            genreList={setGenreList()}
            currentGenreItem={currentGenreItem}
            onGenreItemClick={onGenreItemClick}
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
    </React.Fragment>
  );
};

Main.propTypes = {
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
    })).isRequired,
  })).isRequired,
  currentGenreItem: PropTypes.string.isRequired,
  visibleMoviesAmount: PropTypes.number.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onGenreItemClick: PropTypes.func.isRequired,
  onLoadMoreMovies: PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    currentGenreItem: state.currentGenreItem,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreItemClick(currentGenreItem) {
    dispatch(getMovieByGenre(currentGenreItem));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withMoreMovies(Main));
