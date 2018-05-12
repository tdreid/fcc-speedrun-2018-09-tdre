import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import marked from "marked";

import "./MarkdownPreviewer.css";

class MarkdownPreviewer extends Component {
  constructor() {
    super();
    const text = "# Put markdown here";
    this.state = {
      text,
      markdown: this.convertMarkdown(text)
    };
  }
  textChanged = event => {
    const text = event.target.value;
    const markdown = this.convertMarkdown(text);
    this.setState({ text, markdown });
  };
  convertMarkdown = text => {
    marked.setOptions({ sanitize: true });
    return { __html: marked(text) };
  };
  render() {
    return (
      <div className="MarkdownPreviewer">
        <Container>
          <Row>
            <Col xs="12" sm="6">
              <h2>Enter Markdown:</h2>
              <hr />
              <div className="MarkdownPreviewer_input">
                <textarea
                  autoFocus={true}
                  className="textInput form-control"
                  value={this.state.text}
                  onChange={this.textChanged}
                />
              </div>
            </Col>
            <Col xs="12" sm="6">
              <h2>Formatted Result:</h2>
              <hr />
              <div className="MarkdownPreviewer_output">
                <div dangerouslySetInnerHTML={this.state.markdown} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MarkdownPreviewer;
