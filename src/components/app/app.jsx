import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCardInfo: {}
    };

    this.handleMovieCardTitleClick = this.handleMovieCardTitleClick.bind(this);
  }

  handleMovieCardTitleClick(activeCard) {
    this.setState({activeMovieCardInfo: activeCard});
  }

  render() {
    const {movies} = this.props;

    return (
      <Main
        movies={movies}
        onCardTitleClick={this.handleMovieCardTitleClick}
      />
    );
  }
}

App.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;
