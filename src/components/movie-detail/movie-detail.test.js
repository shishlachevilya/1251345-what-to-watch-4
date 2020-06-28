import React from "react";
import renderer from "react-test-renderer";
import MovieDetail from "./movie-detail";
import {movies} from "../../testData";
import {BrowserRouter as Router} from "react-router-dom";

const movie = movies[0];

describe(`MovieDetail component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <Router>
          <MovieDetail
            activeMovie={movie}
            onCardTitleClick={() => {}}
          />
        </Router>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
