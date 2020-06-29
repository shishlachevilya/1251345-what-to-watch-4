import React from "react";
import renderer from "react-test-renderer";
import TabNav from "./tab-nav";
import {TabLabel} from "../../testData";

describe(`TabNav component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <TabNav
          tabs={TabLabel}
          activeTab={`test`}
          onChangeActiveTab={() => {}}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
