import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./PomodoroClock.css";

const PomodoroClock = () => {
  return (
    <div className="PomodoroClock">
      <Container>
        <Row>
          <Col>
            <h1>Pomodoro Clock</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PomodoroClock;
