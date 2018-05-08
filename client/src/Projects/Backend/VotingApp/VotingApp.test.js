import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import VotingApp from "./VotingApp";

describe("<VotingApp />", () => {
  it("renders without crashing", () => {
    shallow(<VotingApp />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<VotingApp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
