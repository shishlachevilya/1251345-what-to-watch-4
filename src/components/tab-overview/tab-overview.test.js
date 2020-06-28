import React from "react";
import renderer from "react-test-renderer";
import TabOverview from "./tab-overview";
import {movies} from "../../testData";

const movie = movies[0];

describe(`TabOverview component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <TabOverview movie={movie}/>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
