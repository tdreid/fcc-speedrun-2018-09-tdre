import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Content from "./Content";

describe("<Content />", () => {
  it("renders without crashing", () => {
    shallow(<Content />);
  });
});
