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
      warning: ""
    };
  }

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
    const operators = {
      "+": 0,
      "-": 0,
      "*": 1,
      "/": 1
    };
    if (this.state.display.length > 9) {
      this.setState({
        warning: "Input full"
      });
    } else if (
      (displayLast === "." && input === ".") ||
      (operators.hasOwnProperty(displayLast) &&
        operators.hasOwnProperty(input) &&
        input !== "-") ||
      (displayLast === "" && operators.hasOwnProperty(input))
    ) {
      this.setState({
        warning: "Invalid Input"
      });
    } else {
      this.setState({
        warning: "",
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
      warning: "",
      display: ""
    });
  };

  /**
   * processResult
   * Evaluate the current calculation
   *
   * Note: uses eval which is both unsafe
   * and lazy - but this is for a speedrun
   * and reverse polish eval from scratch
   * would take a few hours and a few hundred
   * lines of code I don't have time for right now
   * @memberof Calculator
   */
  processResult = () => {
    // eslint-disable-next-line
    const result = eval(this.state.display);

    if (result) {
      this.setState({
        warning: "",
        display: "" + result
      });
    }
  };

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
