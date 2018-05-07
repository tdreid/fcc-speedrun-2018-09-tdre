import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import SimonGame from "./SimonGame";

describe("<SimonGame />", () => {
  it("renders without crashing", () => {
    shallow(<SimonGame />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<SimonGame />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
