import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import FileMetadata from "./FileMetadata";

describe("<FileMetadata />", () => {
  it("renders without crashing", () => {
    shallow(<FileMetadata />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<FileMetadata />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
