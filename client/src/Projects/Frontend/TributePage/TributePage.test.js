import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import TributePage from "./TributePage";

describe("<TributePage />", () => {
  it("renders without crashing", () => {
    shallow(<TributePage />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<TributePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
