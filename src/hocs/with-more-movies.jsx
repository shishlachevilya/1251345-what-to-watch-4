import React from "react";
import {MOVIE_AMOUNT, Quantity} from "../constants";

const withMoreMovies = (Component) => {
  return class WithMoreMovies extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        visibleMoviesAmount: MOVIE_AMOUNT
      };

      this.handlerLoadMoreMovies = this.handlerLoadMoreMovies.bind(this);
    }

    handlerLoadMoreMovies() {
      this.setState((state) => {
        return {
          visibleMoviesAmount: state.visibleMoviesAmount + Quantity.LOAD_MORE
        };
      });
    }

    render() {
      const {visibleMoviesAmount} = this.state;

      return (
        <Component
          {...this.props}
          visibleMoviesAmount={visibleMoviesAmount}
          onLoadMoreMovies={this.handlerLoadMoreMovies}
        />
      );
    }
  };
};

export default withMoreMovies;
