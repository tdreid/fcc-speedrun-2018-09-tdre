import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import LocalWeather from "./LocalWeather";

describe("<LocalWeather />", () => {
  it("renders without crashing", () => {
    shallow(<LocalWeather />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<LocalWeather />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
