import React from "react";
import { Container, Row, Col } from "../Grid";
// import "./style.css";
import {Card }from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function DrinkList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BeerListItem renders a bootstrap list item containing data from the recipe api call
export function DrinkListItem(
props,
 ) {
  
  return (

    <li className="list-group-item list">
      <Container>
        <Row>
          <Col size="sm-12">  
            <Card>
             <Card.Header>
             <h5>Drink Name: {props.strDrink}</h5>
             </Card.Header>
  
              <Card.Body>
               {/* <h5>Click On Drink Image to Get Recipe</h5>
               <h6>Drink ID: {props.idDrink}</h6>  */}
               <a href={props.idDrink}>

               <img src= {props.strDrinkThumb} alt="img"/> </a> 
             </Card.Body>
  
            </Card>    
          </Col>
        </Row>
      </Container>
    </li>
  );
}
