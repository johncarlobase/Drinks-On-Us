import React from 'react';
import axios from 'axios';
import "./style.css";

export default class Beer extends React.Component {
  state = {
    beers: []
  }

  componentDidMount() {

    //axios.get('https://api.openbrewerydb.org/breweries?per_page=100&by_state=texas')
    
  axios.get('https://api.openbrewerydb.org/breweries?per_page=50&by_city=austin&sort=type,-name')
      .then(res => {
       console.log(res)
        const beers = res.data;
        this.setState({ beers });
      })
  }

  render() {
    return (
      <ul>
        { this.state.beers.map(beer => <li>{beer.name}</li>)}

    
      </ul>



    )
  }
}