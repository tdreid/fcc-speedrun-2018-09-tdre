import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import RoguelikeGame from "./RoguelikeGame";

describe("<RoguelikeGame />", () => {
  it("renders without crashing", () => {
    shallow(<RoguelikeGame />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<RoguelikeGame />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
