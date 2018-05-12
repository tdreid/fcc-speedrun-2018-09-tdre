import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import PomodoroClock from "./PomodoroClock";

describe("<PomodoroClock />", () => {
  it("renders without crashing", () => {
    shallow(<PomodoroClock />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<PomodoroClock />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
