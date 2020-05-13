import React from 'react';
import axios from 'axios';
import { Container } from '../Grid';
import {Table, Card }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const stylep = {
textAlign: "justify",
padding: "10px",
} 

const styleT = {
  height: "55px"
  
  }

const Style = {
padding: "0px 0px 0px 0px",
fontWeight: 600,
fontSize: "17px",
color: "rgb(0,0,0)",
margin: "0 auto"
}


export default class Wine extends React.Component {
  state = {
    beers: [],
  }

  componentDidMount() {        
  axios.get('https://cors-anywhere.herokuapp.com/http://sandbox-api.brewerydb.com/v2/styles/?key=c56ca9644f7b0bf60f4ee67fc5520777')
      .then(res => {
       console.log(res)
        const beers = res.data.data;
        this.setState({ beers });
      })
  }

  render() {
    return (
   <ul style={Style}>
        { this.state.beers.map(beer =>
     <div className="output"  >
    
     
       <Container>          
         
           <Table style ={styleT} striped bordered hover responsive variant="dark" size="sm" >
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
              {/* <th>FG Min</th> */}
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
         
            </tr>
          </tbody>
        </Table>
          <Card>  
           <p style={stylep} >Desciption:  {beer.description}</p>
           </Card>
           <br></br>
       </Container>
     </div>           
     )}
   </ul>

    )
  }
}