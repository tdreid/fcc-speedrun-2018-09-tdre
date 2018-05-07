import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import Calculator from "./Calculator";

describe("<Calculator />", () => {
  it("renders without crashing", () => {
    shallow(<Calculator />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
