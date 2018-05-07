import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import WikipediaViewer from "./WikipediaViewer";

describe("<WikipediaViewer />", () => {
  it("renders without crashing", () => {
    shallow(<WikipediaViewer />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<WikipediaViewer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
