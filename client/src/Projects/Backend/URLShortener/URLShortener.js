import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./URLShortener.css";

const URLShortener = () => {
  return (
    <div className="URLShortener">
      <Container>
        <Row>
          <Col>
            <h1>U R L Shortener</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default URLShortener;
