import React from 'react';
 import axios from 'axios';
import { Container } from '../Grid';
// import express from 'express';
// import request from 'request';

export default class Wine extends React.Component {
  state = {
    beers: []
  }

  componentDidMount() {

  
        
  axios.get('https://cors-anywhere.herokuapp.com/http://sandbox-api.brewerydb.com/v2/styles/?key=c56ca9644f7b0bf60f4ee67fc5520777')
      .then(res => {
       console.log(res)
        const beers = res.data.data;
        this.setState({ beers });
      })
    
      // axios.get('https://api.openbrewerydb.org/breweries?per_page=100&by_state=texas')
      // .then(res => {
      //  console.log(res)
      //   const beers = res.data;
      //   this.setState({ beers });
      // })

  }

  render() {
    return (
  
     <ul>
        { this.state.beers.map(beer =>
    
           <div>
           <Container>  
          
           <p>Style:  {beer.name}</p>
           <p>Short Name: {beer.shortName}</p>
   
           <ul>ABV Maximum =  {beer.abvMax}</ul>
           <ul>ABV Minimum =  {beer.abvMin}</ul>
           <ul>IBU Maximum =  {beer.ibuMax}</ul>
           <ul>IBU Minimum =  {beer.ibuMin}</ul>
           <ul>SRM Maximum =  {beer.srmMax}</ul>
           <ul>SRM Minimum =  {beer.srmMin}</ul>
           <ul>FG Maximum =  {beer.fgMax}</ul>
           <ul>FG Minimum =  {beer.fgMin}</ul>
           <ul>OG Minimum =  {beer.ogMin}</ul>
           <p>Desciption:  {beer.description}</p>
           <br></br>
           </Container>
           
           </div>           
           
           )}

    
      </ul>

    )
  }
}