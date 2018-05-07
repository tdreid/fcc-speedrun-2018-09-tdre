import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./WikipediaViewer.css";

const WikipediaViewer = () => {
  return (
    <div className="WikipediaViewer">
      <Container>
        <Row>
          <Col>
            <h1>Wikipedia Viewer</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WikipediaViewer;
