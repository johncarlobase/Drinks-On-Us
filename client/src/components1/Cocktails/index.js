import React from 'react';
//import axios from 'axios';
 import "./style.css";
// import {Card }from 'react-bootstrap';
import API from "../../Utils/API";
import { DrinkList} from "../DrinkList";
import DrinkListItem from "../DrinkListItem";
// import Button from "../Button";

const contain = {
  margin: "auto",
  width: "1270px",
  boxShadow: "0 3px 6px rgb(82, 80, 80), 0 3px 6px rgb(53, 50, 50)",
  padding: "10px",
}

const h4 = {
  padding: "5px",
fontWeight: "500",
  fontFamily: "Crimson",
}

export default class Cocktails extends React.Component {
 componentDidMount() {    
    const axios = require("axios"); 
     axios({
        "method":"GET",
        "url":"https://the-cocktail-db.p.rapidapi.com/list.php",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key":"dfb87b0ec6msh548e75d6f762a4bp1dc2f1jsn322c78d86502"
        },"params":{
        "c":"list" //listing the categories
            }
            })
        .then((response)=>{
          console.log(response)
          const drinks = response.data.drinks;
            this.setState({ drinks });
        })
        .catch((error)=>{
          console.log(error)
        })
    };  
 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
     state = {
        drinks: [],
        filters: [],
        filterSearch:"strCategory",
        selectedDrink:""
        }

    handleClick = (event) => {
        event.preventDefault();
        API.getDrinkFilter(event.target.value)
          .then(response =>{
          console.log(response)
          this.setState({ filters: response.data.drinks })  
          })
          .catch(err => console.log(err));
        };

  render() {
    return (
    <div style={contain}> 
        { this.state.drinks.map(drink =>
     
        <div className="block " key={drink.strCategory} >   
        
                  <button
                    key={drink.strCategory}
                    onClick={this.handleClick}
                    id={drink.strCategory}
                    value={drink.strCategory}
                   >{drink.strCategory}</button>
        
        </div>)}
        
{/* ************************************************************************************************************************************************************************ */}
   
    {this.state.filters.length ? (
             <DrinkList>
                  {this.state.filters.map(filter => {
                    console.log(filter);
                    return (
                      <DrinkListItem
                        strDrink={filter.strDrink}
                        idDrink={filter.idDrink}
                        strDrinkThumb={filter.strDrinkThumb}
                        />
                        );
                      })}
                </DrinkList>
              ) : (
                <h2 style = {h4} className="text-center">No Drinks to Display</h2>
              )}
            
{/* ************************************************************************************************************************************************************************ *

{/* Ending Div  */}
</div>
    ) //return closing bracket
  } //render closing bracket
} // component closing bracket


   