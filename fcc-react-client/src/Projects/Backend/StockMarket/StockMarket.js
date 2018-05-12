import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./StockMarket.css";

const StockMarket = () => {
  return (
    <div className="StockMarket">
      <Container>
        <Row>
          <Col>
            <h1>Stock Market</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StockMarket;
