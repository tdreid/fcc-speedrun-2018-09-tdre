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
   * processEntry
   * Handles user input and passes it to the
   * appropriate function
   * @memberof Calculator
   */
  processEntry = e => {
    const input = e.target.value;
    if (input === "=") {
      this.processResult();
    } else {
      this.processInput(input);
    }
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
    const operators = ["+", "-", "*", "/"];

    if (this.state.display.length > 9) {
      this.setState({
        warning: "Input full"
      });
    } else if (
      (displayLast === "." && input === ".") ||
      (operators.includes(displayLast) && operators.includes(input)) ||
      (displayLast === "" && operators.includes(input))
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
    const displayLast = this.state.display.slice(-1);
    const operators = ["+", "-", "*", "/"];

    // catch trailing operator so it doesn't break eval
    if (operators.includes(displayLast)) {
      this.setState({
        warning: "Invalid Input"
      });
    } else {
      // eslint-disable-next-line
      const result = eval(this.state.display);
      if (result) {
        this.setState({
          warning: "",
          display: "" + result
        });
      }
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
            <button onClick={this.processClear}>C</button>
            <div className="Calculator_display">{this.state.display}</div>
            {[
              "7",
              "8",
              "9",
              "+",
              "4",
              "5",
              "6",
              "-",
              "1",
              "2",
              "3",
              "*",
              "0",
              ".",
              "=",
              "/"
            ].map(button => (
              <button key={button} value={button} onClick={this.processEntry}>
                {button}
              </button>
            ))}
          </div>
        </Card>
      </div>
    );
  }
}

export default Calculator;
