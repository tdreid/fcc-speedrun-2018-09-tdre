import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./LocalWeather.css";

const LocalWeather = () => {
  return (
    <div className="LocalWeather">
      <Container>
        <Row>
          <Col>
            <h1>Local Weather</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LocalWeather;
