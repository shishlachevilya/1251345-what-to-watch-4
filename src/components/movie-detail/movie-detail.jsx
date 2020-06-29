import React from "react";
import PropTypes from "prop-types";
import {TabLabel} from "../../mocks/tabs";
import TabNav from "../tab-nav/tab-nav";
import TabDetails from "../tab-details/tab-details";
import TabOverview from "../tab-overview/tab-overview";
import TabReviews from "../tab-reviews/tab-reviews";
import MovieList from "../movie-list/movie-list";
import {MOVIE_LIKE_THIS_COUNT} from "../../constants";
import {connect} from "react-redux";

class MovieDetail extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TabLabel.OVERVIEW,
    };

    this.handlerChangeActiveTab = this.handlerChangeActiveTab.bind(this);
    this.getMoreLikeThisMovies = this.getMoreLikeThisMovies.bind(this);
  }

  handlerChangeActiveTab(label) {
    this.setState({
      activeTab: label,
    });
  }

  renderActiveTab(label, movie) {
    switch (label) {
      case TabLabel.DETAILS:
        return <TabDetails movie={movie}/>;
      case TabLabel.REVIEWS:
        return <TabReviews movie={movie}/>;
      default:
        return <TabOverview movie={movie}/>;
    }
  }

  getMoreLikeThisMovies() {
    const {
      movies,
      activeMovie: {
        id,
        genre
      }
    } = this.props;

    return movies.filter((movie) => movie.id !== id && movie.genre === genre).slice(0, MOVIE_LIKE_THIS_COUNT);
  }

  render() {
    const {
      activeMovie: {
        id,
        title,
        genre,
        preview,
        release
      },
      onCardTitleClick
    } = this.props;

    const {activeTab} = this.state;

    return (
      <div>
        <section id={id} className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
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
                <img src={preview} alt={name} width="218" height="327"/>
              </div>

              <div className="movie-card__desc">
                <TabNav
                  tabs={TabLabel}
                  activeTab={activeTab}
                  onChangeActiveTab={this.handlerChangeActiveTab}
                />

                {this.renderActiveTab(activeTab, this.props.activeMovie)}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          {this.getMoreLikeThisMovies().length > 0 && (
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>

              <MovieList
                movies={this.getMoreLikeThisMovies()}
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
  }
}

MovieDetail.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeMovie: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    preview: PropTypes.string,
    release: PropTypes.number
  }),
  onCardTitleClick: PropTypes.func
};

MovieDetail.defaultProps = {
  activeMovie: {},
  onCardTitleClick: () => {}
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps)(MovieDetail);
