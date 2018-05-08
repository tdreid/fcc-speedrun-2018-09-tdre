import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./BarChart.css";

const BarChart = () => {
  return (
    <div className="BarChart">
      <Container>
        <Row>
          <Col>
            <h1>Bar Chart</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BarChart;
