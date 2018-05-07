import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import RecipeBox from "./RecipeBox";

describe("<RecipeBox />", () => {
  it("renders without crashing", () => {
    shallow(<RecipeBox />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<RecipeBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
