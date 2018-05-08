import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";

import "./RandomQuoteMachine.css";

const API_URL = "http://api.icndb.com/jokes/random";
const TWEET_URL =
  "https://twitter.com/intent/tweet?via=P1xt&hashtags=Speedrun&text=";

/**
 * Component which renders an interface to
 * the internet chuck norris database, allowing
 * the user to view quotes, and optionally
 * tweet any they find amusing.
 * @class RandomQuoteMachine
 * @extends Component
 */
class RandomQuoteMachine extends Component {
  /**
   * constructor()
   * Intializes state.
   * Creates an instance of RandomQuoteMachine.
   * @memberof RandomQuoteMachine
   */
  constructor() {
    super();
    this.state = {
      joke: ""
    };
    this.getJoke();
  }
  /**
   * getJoke()
   * Retrieves a Quote from the Chuck Norris database.
   * @memberof RandomQuoteMachine
   */
  getJoke = async () => {
    const response = await fetch(API_URL);
    const input = await response.json();
    const joke = input.value.joke.replace(/&quot;/g, '"');
    this.setState({
      joke: joke
    });
  };
  /**
   * render()
   * Renders the RandomQuoteMachine component.
   * @return
   * @memberof RandomQuoteMachine
   */
  render() {
    return (
      <div className="RandomQuoteMachine">
        <Card>
          <CardBody>
            <CardTitle>Chuck Norris Joke Generator</CardTitle>
            <CardText>{this.state.joke}</CardText>

            <div className="RandomQuoteMachine_buttons">
              <Button color="primary" onClick={this.getJoke}>
                New quote
              </Button>
              <a target="_blank" href={TWEET_URL + this.state.joke}>
                <Button color="success">Tweet joke</Button>
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default RandomQuoteMachine;
