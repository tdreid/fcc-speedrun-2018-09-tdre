import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import GameofLive from "./GameofLive";

describe("<GameofLive />", () => {
  it("renders without crashing", () => {
    shallow(<GameofLive />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<GameofLive />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
