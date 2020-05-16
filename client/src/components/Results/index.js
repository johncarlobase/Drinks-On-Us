import React, { Component } from "react";
import API from "../../Utils/API";
import { Container, Row, Col } from "../Grid";
import {Card, Accordion, Button }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
let bg= require ('../DrinkList/white-marble-3-2018.jpg')
const cardStyle = {
  marginTop: "5px",
  width: "465px",
  height: "360x",    
  boxShadow: "0 3px 6px rgb(82, 80, 80), 0 3px 6px rgb(53, 50, 50)",
  paddingBottom: "0%",
  backgroundImage: 'url('+bg+')'
}
const list ={
    width: "535px",
    margin: "auto",
    backgroundColor: "#b8b5ba"
}
const p = {
    textDecoration: "underline",
}
class Results extends Component {
    state = {
        savedDrinks: [],
        details: [],
        ingState: []
    }
    componentDidMount() {
        console.log(this.props.idDrink)
        API.getDrinkId(this.props.idDrink)
           .then(res =>{
             console.log(res)
             this.setState({ details: res.data.drinks })
           })
           .catch(err => console.log(err));
        API.savedDrinks()
            .then(savedDrinks => this.setState({ savedDrinks: savedDrinks }))
            .catch(err => console.error(err));
    }
    handleClick = event => {
        // API.getDrinkId(event.target.value)
        API.getDrinkId(this.props.idDrink)
          .then(res =>{
            console.log(res)
            this.setState({ details: res.data.drinks })
          })
          .catch(err => console.log(err));  
    };
    handleSave = drink => {
        if (this.state.savedDrinks.map(drink => drink._id).includes(drink._id)) {
            API.deleteDrink(drink._id)
                .then(deletedDrink => this.setState({ savedDrinks: this.state.savedDrinks.filter(drink => drink._id !== deletedDrink._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveDrink(drink)
                .then(savedDrink => this.setState({ savedDrinks: this.state.savedDrinks.concat([savedDrink]) }))
                .catch(err => console.error(err));
        }
    };
    render() {
        return (
            <li className="list-group-item list" style={list}>
            <Container>
                <Row>
                    <Col size="sm-12">     
                        <Accordion>
                            <Card className = "card" style ={cardStyle}>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => this.handleClick()}>
                                        <h3> {this.props.drinks.drink}</h3>
                                        <img src= {this.props.drinks.image} alt="img" className ="pic"/> 
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div key = {this.props.drinks.id}>
                                        <li>Drink : {this.props.drinks.drink}</li> 
                                        <li>Category : {this.props.drinks.category}</li>
                                        <li>Type : {this.props.drinks.alcoholic}</li>
                                        <li>Served In : {this.props.drinks.glass}</li>
                                        <li>Instructions : {this.props.drinks.instructions}</li>
                                        <li style = {p}>Ingredients</li>
                                        <p> {this.props.drinks.measurement1} &nbsp;&nbsp;&nbsp; {this.props.drinks.ingredient1}</p>
                                        <p> {this.props.drinks.measurement2} &nbsp;&nbsp;&nbsp; {this.props.drinks.ingredient2}</p>
                                        <p> {this.props.drinks.measurement3} &nbsp;&nbsp;&nbsp; {this.props.drinks.ingredient3}</p>
                                        <p> {this.props.drinks.measurement4} &nbsp;&nbsp;&nbsp; {this.props.drinks.ingredient4}</p>
                                        <p> {this.props.drinks.measurement5} &nbsp;&nbsp;&nbsp; {this.props.drinks.ingredient5}</p>
                                        <p> {this.props.drinks.measurement6} &nbsp;&nbsp;&nbsp; {this.props.drinks.ingredient6}</p>
                                        <p> {this.props.drinks.measurement7} &nbsp;&nbsp;&nbsp; {this.props.drinks.ingredient7}</p>
                                        <p> {this.props.drinks.measurement8} &nbsp;&nbsp;&nbsp; {this.props.drinks.ingredient8}</p>
                                        <button onClick={() => this.handleSave(this.props.drinks)} className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                                            {this.state.savedDrinks.map(drink => drink.id).includes(this.props.drinks.id) ? "Unsave" : "Save"}
                                        </button>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>  
                    </Col>
                </Row>
            </Container>
        </li>
        )
    }
}
export default Results;