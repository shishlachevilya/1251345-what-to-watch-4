import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const props = {
  info: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  },
  moviesTitleList: [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
    `We need to talk about Kevin`,
    `What We Do in the Shadows`,
    `Revenant`,
    `Johnny English`,
    `Shutter Island`,
    `Pulp Fiction`,
    `No Country for Old Men`,
    `Snatch`,
    `Moonrise Kingdom`,
    `Seven Years in Tibet`,
    `Midnight Special`,
    `War of the Worlds`,
    `Dardjeeling Limited`,
    `Orlando`,
    `Mindhunter`,
    `Midnight Special`
  ]
};

describe(`App component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(<App {...props}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

