import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import ImageSearch from "./ImageSearch";

describe("<ImageSearch />", () => {
  it("renders without crashing", () => {
    shallow(<ImageSearch />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<ImageSearch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
