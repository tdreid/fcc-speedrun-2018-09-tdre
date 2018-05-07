import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import PinterestClone from "./PinterestClone";

describe("<PinterestClone />", () => {
  it("renders without crashing", () => {
    shallow(<PinterestClone />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<PinterestClone />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
