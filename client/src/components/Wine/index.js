import React from 'react';
//import axios from 'axios';

export default class WineList extends React.Component {
  state = {
    wines: []
  }
  // "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest?limit=10",
  // Token 5900c020fd88621ce8361c96bcbb368ac97e2fb8

  componentDidMount() {    
    const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://globalwinescore-global-wine-score-v1.p.rapidapi.com/globalwinescores/latest/",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"globalwinescore-global-wine-score-v1.p.rapidapi.com",
    "x-rapidapi-key":"dfb87b0ec6msh548e75d6f762a4bp1dc2f1jsn322c78d86502",
    'Authorization': 'Token 5900c020fd88621ce8361c96bcbb368ac97e2fb8',
    "accept":"application/json"
    },"params":{
    "limit":"100",
    "ordering":"-date"
    }
    })
    .then((response)=>{
      console.log(response.data.results)
      const wines = response.data.results;
        this.setState({ wines });
    })
    .catch((error)=>{
      console.log(error)
    })
      }
      

  render() {
    return (
      <ul>
        { this.state.wines.map(wine =>
<div>   
          <li>Wine: {wine.wine}</li>
          <li>Color: {wine.color}</li>
          <li>Country: {wine.country}</li>
          <li>Score: {wine.score}</li>
          <li>Classification: {wine.classification}</li>
          <li>Vintage: {wine.vintage}</li>
          <li>Appellation: {wine.appellation}</li>
          <li>Confidence Index: {wine.confidence_index}</li>
          <li>Wine Slug: {wine.wine_slug}</li>
          <li>Region: {wine.regions[0]}</li>
          
          </div>         
          )}
      </ul>


    )
  }
}