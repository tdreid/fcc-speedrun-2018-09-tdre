import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./HeatMap.css";

const HeatMap = () => {
  return (
    <div className="HeatMap">
      <Container>
        <Row>
          <Col>
            <h1>Heat Map</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeatMap;
