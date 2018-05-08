import React from "react";
import { shallow } from "enzyme";
import { Card } from "reactstrap";

import Home from "./Home";

describe("<Home />", () => {
  it("renders without crashing", () => {
    shallow(<Home />);
  });
  it("contains a card for each FCC project", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Card)).toHaveLength(30);
  });
});
