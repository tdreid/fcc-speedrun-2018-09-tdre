import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import PersonalPortfolioWebpage from "./PersonalPortfolioWebpage";

describe("<PersonalPortfolioWebpage />", () => {
  it("renders without crashing", () => {
    shallow(<PersonalPortfolioWebpage />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<PersonalPortfolioWebpage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
