import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";
import {Button, Accordion, Card }from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function IngredientList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// DrinkListItem renders a bootstrap list item containing data from the recipe api call
export function IngredientListItem(
props,
 ) {
  
  return (

    <li className="list-group-item list">
      <Container>
        <Row>
          <Col size="sm-12">

          <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
     <h3> {props.name}</h3>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
         <h5>Ingredient: {props.name}</h5>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
 
</Accordion>
           

            
            
          </Col>
        </Row>
      </Container>
    </li>
  );
}
