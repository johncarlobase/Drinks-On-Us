import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";
import {Button, Accordion, Card }from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function DrinkList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// DrinkListItem renders a bootstrap list item containing data from the recipe api call
export function DrinkListItem(
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
         <h5>Drink Name: {props.name}</h5>
            <h6>Drink Type: {props.brewery_type}</h6>
            <h6>Ingredients: {props.phone}</h6>
            <h6>Served In: {props.street}</h6>
            <h6>Instructions: {props.city}</h6>
            <img src={`${props.thumbnail}`} alt={props.name}/>
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
