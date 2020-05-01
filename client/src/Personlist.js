import React from './node_modules/react';
import axios from './node_modules/axios';

export default class PersonList extends React.Component {
  state = {
    beers: []
  }
 


  componentDidMount() {

    const getWines = (num) => {
      axios.get(
          `https://api.globalwinescore.com/globalwinescores/latest?limit=${num}`,
          {
            "headers": {"Authorization": "Token 5900c020fd88621ce8361c96bcbb368ac97e2fb8"}
          }
        ).then(res => {
          let results = res.results
          let wines = []
          results.forEach(wine => {
            let currentWine = {
              name: wine.name,
              age: wine.date,
              color: wine.color,
              regions: wine.regions[0],
              score: wine.score
            }
            wines.push(currentWine)
          });
            console.log(wines)
        })
      }
    getWines(25)
    
 
  }

  render() {
    return (
      <ul>
        { this.state.beers.map(beer => <li>{beer.name}</li>)}
      </ul>








    )
  }
}

