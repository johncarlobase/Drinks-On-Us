import React from 'react';
 import axios from 'axios';
import { Container } from '../Grid';
import {Table }from 'react-bootstrap';



export default class Wine extends React.Component {
  state = {
    beers: [],

  }

  componentDidMount() {

    // ('https://cors-anywhere.herokuapp.com/http://sandbox-api.brewerydb.com/v2/styles/?key=c56ca9644f7b0bf60f4ee67fc5520777')
        
  axios.get('https://cors-anywhere.herokuapp.com/http://sandbox-api.brewerydb.com/v2/styles/?key=c56ca9644f7b0bf60f4ee67fc5520777')
      .then(res => {
       console.log(res)
        const beers = res.data.data;
        this.setState({ beers });
      })
    
  }

  render() {
    return (
   <ul>
        { this.state.beers.map(beer =>
     <div>
       <Container>  
    
           <Table striped bordered hover responsive variant="dark" size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Style</th>
              <th>ABV Max</th>
              <th>ABV Min</th>
              <th>IBU Max</th>
              <th>IBU Min</th>
              <th>SRM Max</th>
              <th>SRM Min</th>
              <th>FG Max</th>
              <th>FG Min</th>
              <th>FG Min</th>
              <th>OG Min</th>       
            </tr>
          </thead>

          <tbody>
            <tr>
              <td> {beer.id}</td>
              <td> {beer.name}</td>
              <td> {beer.abvMax}</td>
              <td> {beer.abvMin}</td>
              <td> {beer.ibuMax}</td>
              <td> {beer.ibuMin}</td>
              <td> {beer.srmMax}</td>
              <td> {beer.srmMin}</td>
              <td> {beer.fgMax}</td>
              <td> {beer.fgMin}</td>
              <td> {beer.ogMin}</td>
              <td> {beer.ogMin}</td>
            </tr>  
          </tbody>
        </Table>
           
           {/* <p>Beer Name:  {random.name}</p>
           <p>BeerId: {beer.id}</p>
           <ul>ABV Maximum =  {beer.abvMax}</ul>
           <ul>ABV Minimum =  {beer.abvMin}</ul>
           <ul>IBU Maximum =  {beer.ibuMax}</ul>
           <ul>IBU Minimum =  {beer.ibuMin}</ul>
           <ul>SRM Maximum =  {beer.srmMax}</ul>
           <ul>SRM Minimum =  {beer.srmMin}</ul>
           <ul>FG Maximum =  {beer.fgMax}</ul>
           <ul>FG Minimum =  {beer.fgMin}</ul>
           <ul>OG Minimum =  {beer.ogMin}</ul> */}
           <p>Desciption:  {beer.description}</p>
           <br></br>
       </Container>
     </div>           
     )}
   </ul>

    )
  }
}