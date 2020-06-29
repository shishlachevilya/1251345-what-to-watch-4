import React from "react";
import renderer from "react-test-renderer";
import TabReviews from "./tab-reviews";
import {movies} from "../../testData";

const movie = movies[0];

describe(`TabReviews component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <TabReviews movie={movie}/>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
