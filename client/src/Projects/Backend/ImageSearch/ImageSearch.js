import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./ImageSearch.css";

const ImageSearch = () => {
  return (
    <div className="ImageSearch">
      <Container>
        <Row>
          <Col>
            <h1>Image Search</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageSearch;
