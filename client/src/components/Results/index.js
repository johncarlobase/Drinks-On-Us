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
    backgroundColor: "#b8b5a"
}

class Results extends Component {

    state = {
        savedDrinks: [],
        details: []
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
    }

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
                                        {/* <li>Ingredient1 : {detail.strIngredient1}  -  {detail.strMeasure1}</li>
                                        <li>Ingredient2 : {detail.strIngredient2}  -  {detail.strMeasure2}</li>
                                        <li>Ingredient3 : {detail.strIngredient3}  -  {detail.strMeasure3}</li>
                                        <li>Ingredient4 : {detail.strIngredient4}  -  {detail.strMeasure4}</li>
                                        <li>Ingredient5 : {detail.strIngredient5}  -  {detail.strMeasure5}</li>
                                        <li>Ingredient6 : {detail.strIngredient6}  -  {detail.strMeasure6}</li>
                                        <li>Ingredient7 : {detail.strIngredient7}  -  {detail.strMeasure7}</li>
                                        <li>Ingredient8 : {detail.strIngredient8}  -  {detail.strMeasure8}</li>
                                        <li>Ingredient9 : {detail.strIngredient9}  -  {detail.strMeasure9}</li>
                                        <li>Ingredient10 : {detail.strIngredient10} -  {detail.strMeasure10}</li>
                                        <li>Ingredient11 : {detail.strIngredient11}  - {detail.strMeasure11}</li>
                                        <li>Ingredient12 : {detail.strIngredient12}  - {detail.strMeasure12}</li>
                                        <li>Ingredient13 : {detail.strIngredient13}  - {detail.strMeasure13}</li>
                                        <li>Ingredient14 : {detail.strIngredient14}  - {detail.strMeasure14}</li>
                                        <li>Ingredient15 : {detail.strIngredient15}  - {detail.strMeasure15}</li> */}
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