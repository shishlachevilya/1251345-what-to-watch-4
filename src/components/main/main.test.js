import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {shallow} from "enzyme";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter as Router} from "react-router-dom";
import {movies} from "../../testData";

configure({adapter: new Adapter()});

const props = movies;

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
