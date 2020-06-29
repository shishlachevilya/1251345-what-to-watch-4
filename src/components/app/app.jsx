import React from "react";
import Main from "../main/main.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MovieDetail from "../movie-detail/movie-detail";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: {}
    };

    this.handleMovieTitleClick = this.handleMovieTitleClick.bind(this);
  }

  handleMovieTitleClick(activeMovie) {
    this.setState({activeMovie});
  }

  render() {
    const {activeMovie} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              onCardTitleClick={this.handleMovieTitleClick}
            />
          </Route>
          <Route path="/detail">
            <MovieDetail
              activeMovie={activeMovie}
              onCardTitleClick={this.onCardTitleClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
