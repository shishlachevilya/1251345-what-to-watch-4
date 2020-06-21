import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const props = [
  {
    id: `1`,
    path: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  }
];

describe(`App component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <App
          movies={props}
        />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

