import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import { Header } from "./Header";

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
