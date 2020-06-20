import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null
    };

    this.handlerCardMouseOver = this.handlerCardMouseOver.bind(this);
  }

  handlerCardMouseOver(id) {
    this.setState({activeCardId: id});
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => {
          const {id} = movie;

          return (
            <MovieCard
              key={id}
              card={movie}
              onMouseOver={this.handlerCardMouseOver}
            />
          );
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
  ).isRequired
};

export default MovieList;
