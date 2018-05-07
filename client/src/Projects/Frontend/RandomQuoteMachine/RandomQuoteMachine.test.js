import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import RandomQuoteMachine from "./RandomQuoteMachine";

describe("<RandomQuoteMachine />", () => {
  it("renders without crashing", () => {
    shallow(<RandomQuoteMachine />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<RandomQuoteMachine />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
