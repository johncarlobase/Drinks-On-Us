import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";
import {Button, Accordion, Card }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardStyle = {
  marginTop: "5px",
  boxShadow: "0 3px 6px rgb(82, 80, 80), 0 3px 6px rgb(53, 50, 50)",
  padding: "10px",
  width: "950px",
  margin: "auto"

}

// RecipeList renders a bootstrap list item
export function BeerList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BeerListItem renders a bootstrap list item containing data from the recipe api call
export function BeerListItem(
props,
 ) {
  
  return (

    <li className="list-group-item list" >
      <Container>
        <Row>
          <Col size="sm-12">

<Accordion>
  <Card style={cardStyle}>
     <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
       <h3> {props.name}</h3>
      </Accordion.Toggle>
     </Card.Header>
       <Accordion.Collapse eventKey="0">
        <Card.Body>
         <h5>Brewery Name: {props.name}</h5>
            <h6>Brewery Type: {props.brewery_type}</h6>
            <h6>Phone #: {props.phone}</h6>
            <h6>Street: {props.street}</h6>
            <h6>City: {props.city}</h6>
            <h6>State: {props.state}</h6>
            <h6>Zip Code: {props.postal_code}</h6>
            <h6>Brewery ID: {props.id}</h6>
            <h6>Website:<a rel="noreferrer noopener" target="_blank" href={props.website_url}>
            {props.website_url}
            </a></h6>
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
