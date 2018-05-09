import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Input
} from "reactstrap";

import "./WikipediaViewer.css";

class WikipediaViewer extends Component {
  constructor() {
    super();

    this.state = {
      wikiSearch: "",
      wikiMatches: null
    };
  }
  handleChange = async e => {
    this.setState({ wikiSearch: e.target.value });
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&prop=extracts|info&inprop=url&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${
        this.state.wikiSearch
      }`
    );
    const result = await response.json();

    if (result.query && result.query.pages)
      this.setState({ wikiMatches: result.query.pages });
  };
  render() {
    return (
      <div className="WikipediaViewer">
        <Container>
          <Row className="WikipediaViewer_header">
            <Col>
              <h1>Wikipedia Viewer</h1>
            </Col>
          </Row>
          <Row>
            <Col xs="9">
              <Input
                onChange={this.handleChange}
                value={this.state.wikiSearch}
                placeholder="Search Wikipedia"
              />
            </Col>
            <Col xs="3">
              <a
                href="https://en.wikipedia.org/wiki/Special:Random"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="info">Get Random</Button>
              </a>
            </Col>
          </Row>

          <Row className="WikipediaViewer_results">
            <ListGroup>
              {this.state.wikiMatches &&
                this.state.wikiSearch &&
                Object.entries(this.state.wikiMatches).map(match => (
                  <ListGroupItem key={match[0]}>
                    <a target="_blank" href={match[1].fullurl}>
                      {match[1].title}
                    </a>{" "}
                    - {match[1].extract}
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WikipediaViewer;
