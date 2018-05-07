import React from "react";
import { Container, Row, Col } from 'reactstrap';

import "./RecipeBox.css";

const RecipeBox = () => {
  return (
    <div className="RecipeBox">
      <Container>
        <Row>
          <Col>
            <h1>Recipe Box</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecipeBox;
