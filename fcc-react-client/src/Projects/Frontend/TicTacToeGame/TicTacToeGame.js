import React, { Component } from "react";
import { Card, CardTitle, CardBody, CardFooter, Button } from "reactstrap";

import "./TicTacToeGame.css";
/**
 * Tic Tac Toe Component
 * @class TicTacToeGame
 * @extends Component
 */
class TicTacToeGame extends Component {
  constructor() {
    super();

    this.state = {
      turn: true,
      values: ["", "", "", "", "", "", "", "", ""],
      text: "New Game"
    };
  }
  /**
   * gameOver
   * checks all possible horizontal, vertical and
   * diagonal wins
   * returns false, "Tie", or 1/input text
   * @memberof TicTacToeGame
   * @param text text to return on gameOver status
   * @param values array of values to test for gameOver
   */
  gameOver = (text = 1, values = this.state.values) => {
    if (
      (values[0] && (values[0] === values[1] && values[0] === values[2])) ||
      (values[3] && (values[3] === values[4] && values[3] === values[5])) ||
      (values[6] && (values[6] === values[7] && values[6] === values[8])) ||
      (values[0] && (values[0] === values[3] && values[0] === values[6])) ||
      (values[1] && (values[1] === values[4] && values[1] === values[7])) ||
      (values[2] && (values[2] === values[5] && values[2] === values[8])) ||
      (values[0] && (values[0] === values[4] && values[0] === values[8])) ||
      (values[2] && (values[2] === values[4] && values[2] === values[6]))
    ) {
      return text;
    } else if (values.reduce((a, b) => a && b, true)) {
      return "Tie!";
    }
    return false;
  };

  /**
   * processTurn
   * handles player click, registers selection
   * to state, and checks if game over
   * @memberof TicTacToeGame
   * @param position position player selected
   */
  processTurn = position => {
    if (this.state.turn === true) {
      const values = this.state.values;
      if (!this.state.values[position]) {
        values[position] = "x";
        this.setState({
          values: values,
          turn: false
        });
      }

      if (this.gameOver())
        this.setState({ turn: false, text: this.gameOver("You Win") });
      else this.processAITurn();
    }
  };

  /**
   * primePosition
   * check possible move for AI, return if it
   * will put the AI in a position to win/block
   * @memberof TicTacToeGame
   */
  primePosition = values => {
    return this.gameOver("WIN", values) === "WIN";
  };

  /**
   * processAITurn
   * select and make optinal move
   * on AI turn
   * @memberof TicTacToeGame
   */
  processAITurn = () => {
    let values = [...this.state.values];
    let moved = false;
    for (let i = 0; i < 9; i += 1) {
      // check each position
      if (!values[i]) {
        // if AI can win, do so
        values[i] = "o";
        if (this.primePosition(values)) {
          moved = true;
          this.setState({
            values: [...values],
            text: "AI Wins",
            turn: false
          });
        } else {
          // if AI can block player win, do so
          values[i] = "x";
          if (this.primePosition(values)) {
            values[i] = "o";
            moved = true;
            if (this.gameOver(values)) {
              this.setState({
                text: this.gameOver("AI Wins"),
                turn: false
              });
            } else {
              this.setState({
                values: [...values],
                turn: true
              });
            }
          }
        }
        values[i] = "";
      }
    }

    // if AI couldn't win or block win
    // take first position available
    for (let i = 0; i < 9 && moved === false; i += 1) {
      if (!values[i]) {
        values[i] = "o";
        this.setState({
          values: values,
          turn: true
        });
        moved = true;
      }
    }

    return;
  };

  /**
   * reset
   * reset game
   * @memberof TicTacToeGame
   */
  reset = () =>
    this.setState({
      values: ["", "", "", "", "", "", "", "", ""],
      text: "New Game",
      turn: true
    });

  /**
   * render
   * render Tic Tac Toe Component
   * @return
   * @memberof TicTacToeGame
   */
  render() {
    return (
      <div className="TicTacToeGame">
        <Card>
          <CardTitle className="TicTacToeGame_title">Tic Tac Toe</CardTitle>
          <CardBody>
            <div className="TicTacToeGame_grid">
              {[...Array(9)].map((x, i) => (
                <div
                  className="TicTacToeGame_cell"
                  key={i}
                  onClick={() => this.processTurn(i)}
                >
                  {this.state.values[i]}
                </div>
              ))}
            </div>
          </CardBody>
          <CardFooter>
            <Button color="info" onClick={this.reset}>
              {this.state.text}
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default TicTacToeGame;
