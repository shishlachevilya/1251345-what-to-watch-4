import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button";

describe(`ShowMoreButton component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <ShowMoreButton
          loadMore={() => {}}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
