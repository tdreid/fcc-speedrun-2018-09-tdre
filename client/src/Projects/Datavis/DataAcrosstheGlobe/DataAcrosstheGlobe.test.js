import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import DataAcrosstheGlobe from "./DataAcrosstheGlobe";

describe("<DataAcrosstheGlobe />", () => {
  it("renders without crashing", () => {
    shallow(<DataAcrosstheGlobe />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<DataAcrosstheGlobe />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
