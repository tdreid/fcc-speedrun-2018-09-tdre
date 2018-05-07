import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./FileMetadata.css";

const FileMetadata = () => {
  return (
    <div className="FileMetadata">
      <Container>
        <Row>
          <Col>
            <h1>File Metadata</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FileMetadata;
