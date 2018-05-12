import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import StockMarket from "./StockMarket";

describe("<StockMarket />", () => {
  it("renders without crashing", () => {
    shallow(<StockMarket />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<StockMarket />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
