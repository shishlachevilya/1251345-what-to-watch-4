import React from "react";
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card";
import {BrowserRouter as Router} from "react-router-dom";

const card = {
  id: `1`,
  path: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`
};

describe(`MovieCard component test`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
    .create(
        <Router>
          <MovieCard
            card={card}
            onMouseOver={() => {}}
            onCardTitleClick={() => {}}
          />
        </Router>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

