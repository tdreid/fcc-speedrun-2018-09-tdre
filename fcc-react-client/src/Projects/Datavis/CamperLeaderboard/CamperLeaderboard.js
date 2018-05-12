import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table
} from "reactstrap";

import "./CamperLeaderboard.css";

class CamperLeaderboard extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      data: {
        past30: [],
        alltime: []
      }
    };
  }
  componentWillMount() {
    this.getLeaders();
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  getLeaders = async () => {
    const API = "https://fcctop100.herokuapp.com/api/fccusers/top";

    // get the top for past 30 days
    const past30Response = await fetch(API + "/recent");
    const past30 = await past30Response.json();

    // get the top alltime
    const alltimeResponse = await fetch(API + "/alltime");
    const alltime = await alltimeResponse.json();

    const data = { past30, alltime };

    this.setState({
      data
    });
  };

  render() {
    return (
      <div className="CamperLeaderboard">
        <Container>
          <Row>
            <Col>
              <h1> Camper Leaderboard</h1>
            </Col>
          </Row>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Past 30 Days
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                All Time
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col xs="12">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Camper Name</th>
                        <th>Points in past 30 days</th>
                        <th>All time points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.past30.map((record, i) => (
                        <tr key={i}>
                          <th scope="row">{i}</th>
                          <td>
                            <Link
                              to={
                                "https://www.freecodecamp.org/" +
                                record.username
                              }
                              target="_blank"
                            >
                              <img src={record.img} alt="avatar" />
                              {record.username}
                            </Link>
                          </td>
                          <td>{record.recent}</td>
                          <td>{record.alltime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col xs="12">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Camper Name</th>
                        <th>Points in past 30 days</th>
                        <th>All time points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.alltime.map((record, i) => (
                        <tr key={i}>
                          <th scope="row">{i}</th>
                          <td>
                            <Link
                              to={
                                "https://www.freecodecamp.org/" +
                                record.username
                              }
                              target="_blank"
                            >
                              <img src={record.img} alt="avatar" />
                              {record.username}
                            </Link>
                          </td>
                          <td>{record.recent}</td>
                          <td>{record.alltime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}

export default CamperLeaderboard;
