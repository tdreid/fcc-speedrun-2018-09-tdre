import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./RequestHeaderParser.css";

const RequestHeaderParser = () => {
  return (
    <div className="RequestHeaderParser">
      <Container>
        <Row>
          <Col>
            <h1>Request Header Parser</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RequestHeaderParser;
