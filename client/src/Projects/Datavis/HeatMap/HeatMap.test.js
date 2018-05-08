import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import HeatMap from "./HeatMap";

describe("<HeatMap />", () => {
  it("renders without crashing", () => {
    shallow(<HeatMap />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<HeatMap />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
