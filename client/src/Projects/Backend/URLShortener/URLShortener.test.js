import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import URLShortener from "./URLShortener";

describe("<URLShortener />", () => {
  it("renders without crashing", () => {
    shallow(<URLShortener />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<URLShortener />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
