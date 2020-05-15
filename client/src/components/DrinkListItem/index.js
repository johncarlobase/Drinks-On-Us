// DrinkListItem renders a bootstrap list item containing data from the recipe api call
import React,{Component} from "react";
import { Container, Row, Col } from "../Grid";
import {Card, Accordion, Button }from 'react-bootstrap';
// import Details from "../Details"
import API from "../../Utils/API"
import 'bootstrap/dist/css/bootstrap.min.css';
let bg= require ('../../Images/marble2.jpg')

const list ={
  width: "535px",
  margin: "auto",
  backgroundColor: "#b8b5ba"
}

const cardStyle = {
  marginTop: "5px",
  width: "465px",
  height: "360x",    
  boxShadow: "0 3px 6px rgb(82, 80, 80), 0 3px 6px rgb(53, 50, 50)",
  paddingBottom: "0%",
  backgroundImage: 'url('+bg+')'
}

const p = {
  textDecoration: "underline",

}



class DrinkListItem extends Component {   
    state = {
        details: [],
        
    }
    componentDidLoad() {
           API.getDrinkId(this.props.idDrink)
           .then(res =>{
             console.log(res)
             this.setState({ details: res.data.drinks })
           })
           .catch(err => console.log(err));
    }
 
    handleClick = event => {       
        API.getDrinkId(this.props.idDrink)
          .then(res =>{
            console.log(res)
            this.setState({ details: res.data.drinks })
          })
          .catch(err => console.log(err));
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
                 <h3> {this.props.strDrink}</h3>
                 <img src= {this.props.strDrinkThumb} alt="img" className ="pic"/> 
                </Accordion.Toggle>
               </Card.Header>
                 <Accordion.Collapse eventKey="0">
                 <Card.Body>
                  {this.state.details.map(detail => 
                   <div key = {detail.idDrink}>
                     <ul>
                   <li>Drink : {detail.strDrink}</li> 
                   <li>Category : {detail.strCategory}</li>
                   <li>Type : {detail.strAlcoholic}</li>
                   <li>Served In : {detail.strGlass}</li>
                   <li>Instructions : {detail.strInstructions}</li>
                   <li style = {p}>Ingredients</li>
                   <p> {detail.strMeasure1}  &nbsp;&nbsp;&nbsp; {detail.strIngredient1} </p>
                   <p> {detail.strMeasure2}  &nbsp;&nbsp;&nbsp; {detail.strIngredient2}</p>
                   <p> {detail.strMeasure3}  &nbsp;&nbsp;&nbsp; {detail.strIngredient3}</p>
                   <p> {detail.strMeasure4}  &nbsp;&nbsp;&nbsp; {detail.strIngredient4} </p>
                   <p> {detail.strMeasure5}  &nbsp;&nbsp;&nbsp; {detail.strIngredient5}</p>
                   <p> {detail.strMeasure6}  &nbsp;&nbsp;&nbsp; {detail.strIngredient6}</p>
                   <p> {detail.strMeasure7}  &nbsp;&nbsp;&nbsp; {detail.strIngredient7} </p>
                   <p> {detail.strMeasure8}  &nbsp;&nbsp;&nbsp; {detail.strIngredient8}</p>
                   {/* <p> {detail.strIngredient9}  &nbsp;&nbsp;&nbsp;   {detail.strMeasure9}</p>
                   <p> {detail.strIngredient10} &nbsp;&nbsp;&nbsp;   {detail.strMeasure10}</p> */}
                   {/* <li>Ingredient11 : {detail.strIngredient11}  - {detail.strMeasure11}</li>
                   <li>Ingredient12 : {detail.strIngredient12}  - {detail.strMeasure12}</li>
                   <li>Ingredient13 : {detail.strIngredient13}  - {detail.strMeasure13}</li>
                   <li>Ingredient14 : {detail.strIngredient14}  - {detail.strMeasure14}</li>
                   <li>Ingredient15 : {detail.strIngredient15}  - {detail.strMeasure15}</li> */}
                   </ul>
                  </div>
                )}
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
}

export default DrinkListItem