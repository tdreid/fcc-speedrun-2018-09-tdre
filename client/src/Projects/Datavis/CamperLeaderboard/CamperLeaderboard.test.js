import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import CamperLeaderboard from "./CamperLeaderboard";

describe("<CamperLeaderboard />", () => {
  it("renders without crashing", () => {
    shallow(<CamperLeaderboard />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<CamperLeaderboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
