import React from 'react';
import axios from 'axios';

export default class WineList extends React.Component {
  state = {
    wines: []
  }
 


  componentDidMount() {    
      axios.get(
          "https://api.globalwinescore.com/globalwinescores/latest?limit=10",
          {
            "headers": {"Authorization": "Token 5900c020fd88621ce8361c96bcbb368ac97e2fb8"}
          }
        ).then(res => {
        console.log(res)
        })
      }
      

  render() {
    return (
      <ul>
        { this.state.wines.map(wine => <li>{wine.name}</li>)}
      </ul>


    )
  }
}