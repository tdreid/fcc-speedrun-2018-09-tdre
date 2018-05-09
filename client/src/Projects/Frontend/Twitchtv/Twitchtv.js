import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./Twitchtv.css";
/**
 * Displays a list of Twitch.tv users, including
 * their avatar, user name, and current stream/offline
 * @class Twitchtv
 * @extends Component
 */
class Twitchtv extends Component {
  constructor() {
    super();

    this.state = {
      streamersData: []
    };

    this.fetchStreams();
  }

  /**
   * fetchStream
   * loops through list of streamers
   * and fetches both their user and their
   * stream information from the Twitch API
   * @memberof Twitchtv
   */
  fetchStreams = async () => {
    await [
      "ESL_SC2",
      "OgamingSC2",
      "cretetion",
      "freecodecamp",
      "storbeck",
      "habathcx",
      "RobotCaleb",
      "noobs2ninjas"
    ].map(async streamer => this.fetchStreamer(streamer));
  };

  /**
   * fetchStreamer
   * fetch a single Twitch user's information
   * @memberof Twitchtv
   */
  fetchStreamer = async streamer => {
    const API = "https://wind-bow.glitch.me/twitch-api";

    // get the streamers
    const userResponse = await fetch(API + "/users/" + streamer);
    const userData = await userResponse.json();

    // get the streamers associated streams
    const streamResponse = await fetch(API + "/streams/" + streamer);
    const streamData = await streamResponse.json();

    this.setState({
      streamersData: [...this.state.streamersData, { streamData, userData }]
    });
  };

  /**
   * render
   * render the Twitchtv component
   * @return
   * @memberof Twitchtv
   */
  render() {
    return (
      <Container className="Twitchtv">
        <Row>
          <Col>
            <h2>Twitch App</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {this.state.streamersData &&
                this.state.streamersData
                  .sort(
                    (a, b) =>
                      (a.streamData.stream === null) -
                      (b.streamData.stream === null)
                  )
                  .map(stream => (
                    <ListGroupItem key={stream.userData.display_name}>
                      {" "}
                      {stream.userData.logo !== null ? (
                        <img alt="avatar" src={stream.userData.logo} />
                      ) : (
                        <img
                          alt="missing avatar"
                          src="http://via.placeholder.com/50x50"
                        />
                      )}
                      {stream.userData.display_name}
                      {stream.streamData.stream &&
                      stream.streamData.stream.game !== null ? (
                        <span>
                          <a
                            href={
                              "https://www.twitch.tv/" + stream.userData.name
                            }
                            target="_blank"
                          >
                            {stream.streamData.stream.game}
                          </a>
                        </span>
                      ) : (
                        <span>Offline</span>
                      )}
                    </ListGroupItem>
                  ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Twitchtv;
