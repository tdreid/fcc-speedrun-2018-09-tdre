import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./TicTacToeGame.css";

const TicTacToeGame = () => {
  return (
    <div className="TicTacToeGame">
      <Container>
        <Row>
          <Col>
            <h1>Tic Tac Toe Game</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TicTacToeGame;
