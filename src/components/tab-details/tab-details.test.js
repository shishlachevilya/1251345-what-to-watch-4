import React from "react";
import renderer from "react-test-renderer";
import TabDetails from "./tab-details";
import {movies} from "../../testData";

const movie = movies[0];

describe(`TabDetails component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <TabDetails movie={movie}/>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
