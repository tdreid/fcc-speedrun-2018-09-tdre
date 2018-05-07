import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./MarkdownPreviewer.css";

const MarkdownPreviewer = () => {
  return (
    <div className="MarkdownPreviewer">
      <Container>
        <Row>
          <Col>
            <h1>Markdown Previewer</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MarkdownPreviewer;
