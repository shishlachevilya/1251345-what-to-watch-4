import React from "react";
import renderer from "react-test-renderer";
import TabItem from "./tab-item";

describe(`TabItem component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <TabItem
          label={`test`}
          onChangeActiveTab={() => {}}/>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
