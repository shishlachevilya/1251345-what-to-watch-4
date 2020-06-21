import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MovieDetail from "../movie-detail/movie-detail";

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
    const {activeMovieCardInfo} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              movies={movies}
              onCardTitleClick={this.handleMovieCardTitleClick}
            />
          </Route>
          <Route path="/detail">
            <MovieDetail activeMovieCard={activeMovieCardInfo}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
