import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import NightlifeCoordination from "./NightlifeCoordination";

describe("<NightlifeCoordination />", () => {
  it("renders without crashing", () => {
    shallow(<NightlifeCoordination />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<NightlifeCoordination />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
