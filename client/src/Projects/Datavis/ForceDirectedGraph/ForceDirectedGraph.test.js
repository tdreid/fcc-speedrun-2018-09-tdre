import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import ForceDirectedGraph from "./ForceDirectedGraph";

describe("<ForceDirectedGraph />", () => {
  it("renders without crashing", () => {
    shallow(<ForceDirectedGraph />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<ForceDirectedGraph />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
