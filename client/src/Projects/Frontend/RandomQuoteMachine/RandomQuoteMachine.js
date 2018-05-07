import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./RandomQuoteMachine.css";

const RandomQuoteMachine = () => {
  return (
    <div className="RandomQuoteMachine">
      <Container>
        <Row>
          <Col>
            <h1>Random Quote Machine</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RandomQuoteMachine;
