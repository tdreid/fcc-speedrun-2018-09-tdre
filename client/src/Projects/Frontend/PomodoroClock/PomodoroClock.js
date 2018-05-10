import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
  Button,
  Col,
  Row
} from "reactstrap";

import "./PomodoroClock.css";

/**
 * Pomodoro Clock component
 * @class PomodoroClock
 * @extends Component
 */
class PomodoroClock extends Component {
  constructor() {
    super();

    this.state = {
      SessionTime: 25 * 60,
      BreakTime: 5 * 60,
      time: 25 * 60,
      interval: null,
      type: "Session",
      countdown: false,
      FormattedTime: this.formatTime(25 * 60)
    };
  }

  /**
   * formatTime
   * format time in seconds for display in mm : ss
   * @memberof PomodoroClock
   */
  formatTime = time => {
    return (
      Math.floor(time / 60) +
      ":" +
      (time % 60 < 10 ? `0${time % 60}` : time % 60)
    );
  };

  /**
   * switchCountdownType
   * flip between session and break time
   * @memberof PomodoroClock
   */
  switchCountdownType = () => {
    if (this.state.type === "Session") {
      this.setState({
        time: this.state.BreakTime,
        type: "Break"
      });
    } else {
      this.setState({
        time: this.state.SessionTime,
        type: "Session"
      });
    }
  };

  /**
   * startCountdown
   * start counting down
   * @memberof PomodoroClock
   */
  startCountdown = () => {
    if (!this.state.countdown) {
      this.setState({
        countdown: true,
        interval: setInterval(() => {
          this.setState({
            time: this.state.time - 1,
            FormattedTime: this.formatTime(this.state.time - 1)
          });
          if (this.state.time === 0) {
            this.switchCountdownType();
          }
        }, 1000)
      });
    }
  };

  /**
   * resetCountdown
   * reset the current countdown to full session
   * @memberof PomodoroClock
   */
  resetCountdown = () => {
    clearInterval(this.state.interval);
    this.setState({
      countdown: false,
      time: this.state.SessionTime,
      FormattedTime: this.formatTime(this.state.SessionTime),
      type: "Session"
    });
  };

  /**
   * pauseCountdown
   * pause any currently running coutdown
   * @memberof PomodoroClock
   */
  pauseCountdown = () => {
    clearInterval(this.state.interval);
    this.setState({ countdown: false });
  };

  /**
   * addSessionTime
   * add one minute to session time
   * @memberof PomodoroClock
   */
  addSessionTime = () => {
    this.setState({
      SessionTime: this.state.SessionTime + 60,
      time:
        this.state.type === "Session" ? this.state.time + 60 : this.state.time
    });
  };

  /**
   * subtractSessionTime
   * subtract one minute from session time
   * @memberof PomodoroClock
   */
  subtractSessionTime = () => {
    if (this.state.SessionTime > 60) {
      this.setState({
        SessionTime: this.state.SessionTime - 60,
        time:
          this.state.type === "Session" ? this.state.time - 60 : this.state.time
      });
    }
  };

  /**
   * addBreakTime
   * add one minute to break time
   * @memberof PomodoroClock
   */
  addBreakTime = () => {
    this.setState({
      BreakTime: this.state.BreakTime + 60,
      time: this.state.type === "Break" ? this.state.time + 60 : this.state.time
    });
  };

  /**
   * subtractBreakTime
   * subtract one minute from break time
   * @memberof PomodoroClock
   */
  subtractBreakTime = () => {
    if (this.state.BreakTime > 60) {
      this.setState({
        BreakTime: this.state.BreakTime - 60,
        time:
          this.state.type === "Break" ? this.state.time - 60 : this.state.time
      });
    }
  };

  /**
   * render
   * Render the Pomodoro Clock component
   * @return
   * @memberof PomodoroClock
   */
  render() {
    return (
      <div className="PomodoroClock">
        <Card>
          <CardTitle>Pomodoro Clock</CardTitle>
          <CardSubtitle>
            {this.state.type}
            <br />
            {this.state.FormattedTime}
          </CardSubtitle>
          <CardBody>
            <Row>
              <Col>
                <div>
                  <p className="PomodoroClock__length">Session Length </p>
                  <Button color="primary" onClick={this.addSessionTime}>
                    +
                  </Button>
                  {this.state.SessionTime / 60}
                  <Button color="primary" onClick={this.subtractSessionTime}>
                    -
                  </Button>
                </div>
              </Col>
              <Col>
                <div>
                  <p className="PomodoroClock__length">Break Length </p>
                  <Button color="primary" onClick={this.addBreakTime}>
                    +
                  </Button>
                  {this.state.BreakTime / 60}
                  <Button color="primary" onClick={this.subtractBreakTime}>
                    -
                  </Button>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <div>
              <Button color="primary" onClick={this.startCountdown}>
                Start
              </Button>
              <Button color="secondary" onClick={this.pauseCountdown}>
                Pause
              </Button>
              <Button color="warning" onClick={this.resetCountdown}>
                Reset
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default PomodoroClock;
