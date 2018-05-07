import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="Calculator">
      <Container>
        <Row>
          <Col>
            <h1>Calculator</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Calculator;
