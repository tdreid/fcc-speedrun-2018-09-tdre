import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Twitchtv from "./Twitchtv";

describe("<Twitchtv />", () => {
  it("renders without crashing", () => {
    shallow(<Twitchtv />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Twitchtv />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
