import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list";
import {BrowserRouter as Router} from "react-router-dom";

const movies = [
  {
    id: `1`,
    path: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: `2`,
    path: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    id: `3`,
    path: `img/macbeth.jpg`,
    title: `Macbeth`
  },
  {
    id: `4`,
    path: `img/aviator.jpg`,
    title: `Aviator`
  },
  {
    id: `5`,
    path: `img/we-need-to-talk-about-kevin.jpg`,
    title: `We need to talk about Kevin`
  },
  {
    id: `6`,
    path: `img/what-we-do-in-the-shadows.jpg`,
    title: `What We Do in the Shadows`
  },
  {
    id: `7`,
    path: `img/revenant.jpg`,
    title: `Revenant`
  },
  {
    id: `8`,
    path: `img/johnny-english.jpg`,
    title: `Johnny English`
  },
];

describe(`MovieList component test`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
    .create(
        <Router>
          <MovieList
            movies={movies}
            onCardTitleClick={() => {}}
          />
        </Router>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
