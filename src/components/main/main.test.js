import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {shallow} from "enzyme";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

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

describe(`Main component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <Main
          {...props}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`component should contain 20 articles`, () => {
    const wrapper = shallow(<Main {...props} />);
    expect(wrapper.find(`.small-movie-card`)).toHaveLength(20);
  });
});
