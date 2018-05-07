import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import TimestampMicroservice from "./TimestampMicroservice";

describe("<TimestampMicroservice />", () => {
  it("renders without crashing", () => {
    shallow(<TimestampMicroservice />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<TimestampMicroservice />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
