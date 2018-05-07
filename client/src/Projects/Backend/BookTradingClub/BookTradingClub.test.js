import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import BookTradingClub from "./BookTradingClub";

describe("<BookTradingClub />", () => {
  it("renders without crashing", () => {
    shallow(<BookTradingClub />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<BookTradingClub />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
