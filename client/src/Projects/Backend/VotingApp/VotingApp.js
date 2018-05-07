import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./VotingApp.css";

const VotingApp = () => {
  return (
    <div className="VotingApp">
      <Container>
        <Row>
          <Col>
            <h1>Voting App</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VotingApp;
