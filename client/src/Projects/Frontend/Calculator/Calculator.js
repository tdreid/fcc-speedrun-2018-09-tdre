import React, { Component } from "react";
import { Card } from "reactstrap";

import "./Calculator.css";
/**
 * Implements a simple calculator component
 * that provides addition, subtraction,
 * multiplication and division of integers
 * and floating point numbers
 * @class Calculator
 * @extends Component
 */
class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      display: "",
      warning: "No Eval"
    };
  }

  // operators list
  // value represents precidence
  // +- evaluate before */
  operators = {
    "+": 0,
    "-": 0,
    "*": 1,
    "/": 1
  };
  /**
   * processInput
   * Appends input to the current calculation
   * if the input is valud.
   *
   * Invalid possibilities:
   * - two decimal points in a row
   * - an operator at the beginning before a number
   * - more characters than the display can hold (10)
   * - two operators in a row (++)
   * @memberof Calculator
   * @param input: string
   */
  processInput = input => {
    const displayLast = this.state.display.slice(-1);
    if (this.state.display.length > 9) {
      this.setState({
        warning: "Input full"
      });
    } else if (displayLast === "." && input === ".") {
      this.setState({
        warning: "Double Dot"
      });
    } else if (
      this.operators.hasOwnProperty(displayLast) &&
      this.operators.hasOwnProperty(input)
    ) {
      this.setState({
        warning: "Double Operator"
      });
    } else if (displayLast === "" && this.operators.hasOwnProperty(input)) {
      this.setState({
        warning: "Operator first"
      });
    } else {
      this.setState({
        display: this.state.display + input
      });
    }
  };

  /**
   * processClear
   * Clear the current calculation
   * @memberof Calculator
   */
  processClear = input => {
    this.setState({
      warning: "No Eval",
      display: ""
    });
  };

  /**
   * processResult
   * Evaluate the current calculation
   * @memberof Calculator
   */
  processResult = input => {};

  /**
   * render
   * Renders the current component
   * @return jsx
   * @memberof Calculator
   */
  render() {
    return (
      <div className="Calculator">
        <Card>
          <h1>JavaScript Calculator</h1>
          <h2>{this.state.warning}</h2>
          <div className="Calculator_contents">
            <button
              onClick={() => {
                this.processClear();
              }}
            >
              C
            </button>
            <div className="Calculator_display">{this.state.display}</div>
            <button
              onClick={() => {
                this.processInput("7");
              }}
            >
              7
            </button>
            <button
              onClick={() => {
                this.processInput("8");
              }}
            >
              8
            </button>
            <button
              onClick={() => {
                this.processInput("9");
              }}
            >
              9
            </button>
            <button
              onClick={() => {
                this.processInput("+");
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                this.processInput("4");
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                this.processInput("5");
              }}
            >
              5
            </button>
            <button
              onClick={() => {
                this.processInput("6");
              }}
            >
              6
            </button>
            <button
              onClick={() => {
                this.processInput("-");
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                this.processInput("1");
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                this.processInput("2");
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                this.processInput("3");
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                this.processInput("*");
              }}
            >
              *
            </button>
            <button
              onClick={() => {
                this.processInput("0");
              }}
            >
              0
            </button>
            <button
              onClick={() => {
                this.processInput(".");
              }}
            >
              .
            </button>
            <button
              onClick={() => {
                this.processResult();
              }}
            >
              =
            </button>
            <button
              onClick={() => {
                this.processInput("/");
              }}
            >
              /
            </button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Calculator;
