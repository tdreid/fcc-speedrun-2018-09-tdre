import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./ForceDirectedGraph.css";

const ForceDirectedGraph = () => {
  return (
    <div className="ForceDirectedGraph">
      <Container>
        <Row>
          <Col>
            <h1>Force Directed Graph</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForceDirectedGraph;
