import React from "react";
import { shallow } from "enzyme";

import Content from "./Content";

describe("<Content />", () => {
  it("renders without crashing", () => {
    shallow(<Content />);
  });
});
