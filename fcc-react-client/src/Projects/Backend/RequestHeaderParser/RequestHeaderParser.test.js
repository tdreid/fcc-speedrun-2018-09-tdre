import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import RequestHeaderParser from "./RequestHeaderParser";

describe("<RequestHeaderParser />", () => {
  it("renders without crashing", () => {
    shallow(<RequestHeaderParser />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<RequestHeaderParser />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
