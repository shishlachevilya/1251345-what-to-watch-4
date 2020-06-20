import React from "react";
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card";

const card = {
  id: `1`,
  path: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`
};

describe(`MovieCard component test`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
    .create(
        <MovieCard
          card={card}
          onMouseOver={() => {}}
          onCardTitleClick={() => {}}
        />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

