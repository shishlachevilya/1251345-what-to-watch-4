import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {shallow} from "enzyme";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter as Router} from "react-router-dom";

configure({adapter: new Adapter()});

const props = [
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
  }
];

describe(`Main component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <Router>
          <Main
            movies={props}
            onCardTitleClick={() => {}}
          />
        </Router>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`component should contain 8 articles`, () => {
    const wrapper = shallow(
        <Router>
          <Main
            movies={props}
            onCardTitleClick={() => {}}
          />
        </Router>
    );
    expect(wrapper.find(`.small-movie-card`).map((card) => card.toHaveLength(8)));
  });
});
