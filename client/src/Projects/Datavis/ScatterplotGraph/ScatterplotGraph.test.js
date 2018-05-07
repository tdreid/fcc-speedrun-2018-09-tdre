import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import ScatterplotGraph from "./ScatterplotGraph";

describe("<ScatterplotGraph />", () => {
  it("renders without crashing", () => {
    shallow(<ScatterplotGraph />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<ScatterplotGraph />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
