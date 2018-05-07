import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./CamperLeaderboard.css";

const CamperLeaderboard = () => {
  return (
    <div className="CamperLeaderboard">
      <Container>
        <Row>
          <Col>
            <h1>Camper Leaderboard</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CamperLeaderboard;
