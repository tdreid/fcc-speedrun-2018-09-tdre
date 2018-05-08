import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import MarkdownPreviewer from "./MarkdownPreviewer";

describe("<MarkdownPreviewer />", () => {
  it("renders without crashing", () => {
    shallow(<MarkdownPreviewer />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<MarkdownPreviewer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
