import React from 'react';
 import axios from 'axios';
import { Container } from '../Grid';
import {Table }from 'react-bootstrap';
const tableStyle = {

margin: "0 auto"

}


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
       <Container style={tableStyle}>  
           <Table striped bordered hover responsive variant="dark" size="sm" >
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
           <p>Desciption:  {beer.description}</p>
           <br></br>
       </Container>
     </div>           
     )}
   </ul>

    )
  }
}