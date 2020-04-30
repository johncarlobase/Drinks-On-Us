import React from 'react';
import axios from 'axios';
import "./style.css";
import API from '../../Utils/API';
export default class Beer extends React.Component {
  state = {
    beers: []
  }

  componentDidMount() {
API.getBrewery().then(
response=>console.log(response)
)

    //axios.get('https://api.openbrewerydb.org/breweries?per_page=100&by_state=texas')



    
  // axios.get('https://api.openbrewerydb.org/breweries?per_page=50&by_city=austin&sort=type,-name')
  //     .then(res => {
  //      console.log(res)
  //       const beers = res.data;
  //       this.setState({ beers });
  //     })
  }

  render() {
    return (
      <h1>Beer</h1>
      
      
      
      )
    }
  }
//   {/*<ul>
//     { this.state.beers.map(beer => <li>{beer.name}</li>)}


// </ul>