import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";
import {BrowserRouter as Router} from "react-router-dom";
import {movies} from "../../testData";

const movie = movies[0];

describe(`MovieCard component test`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
    .create(
        <Router>
          <MovieCard
            movie={movie}
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            onCardTitleClick={() => {}}
            isHover={false}
          />
        </Router>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

