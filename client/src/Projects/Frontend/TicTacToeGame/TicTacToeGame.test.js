import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import TicTacToeGame from "./TicTacToeGame";

describe("<TicTacToeGame />", () => {
  it("renders without crashing", () => {
    shallow(<TicTacToeGame />);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<TicTacToeGame />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
