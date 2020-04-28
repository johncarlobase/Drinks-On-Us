import React from './node_modules/react';
import axios from './node_modules/axios';

export default class PersonList extends React.Component {
  state = {
    beers: []
  }
  //let apiToken ="5900c020fd88621ce8361c96bcbb368ac97e2fb8"

 // Authorization: Token {5900c020fd88621ce8361c96bcbb368ac97e2fb8}



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

