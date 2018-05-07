import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./SimonGame.css";

const SimonGame = () => {
  return (
    <div className="SimonGame">
      <Container>
        <Row>
          <Col>
            <h1>Simon Game</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SimonGame;
