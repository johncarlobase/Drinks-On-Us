import React from "react";
import { Container, Row, Col } from "../Grid";
// import "./style.css";
import {Button, Accordion, Card }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export function WineList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BeerListItem renders a bootstrap list item containing data from the recipe api call
export function WineListItem(
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
                     <h3> {props.wine}</h3>
                  </Accordion.Toggle>
                 </Card.Header>
                  <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <h5>Wine Name: {props.wine}</h5>
                            <h6>Color: {props.color}</h6>
                            <h6>Score: {props.score}</h6>
                            <h6>Classification: {props.classification}</h6>
                            <h6>Vintage: {props.vintage}</h6>
                            <h6>Region: {props.regions}</h6>
                            <h6>Country: {props.country}</h6>
                            <h6>Appellation: {props.appellation}</h6>
                            <h6>Confidence Index: {props.confidence_index}</h6>
                            <h6>Wine Slug: {props.wine_slug}</h6>    
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
