import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import BarChart from "./BarChart";

describe("<BarChart />", () => {
  it("renders without crashing", () => {
    shallow(<BarChart />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<BarChart />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
