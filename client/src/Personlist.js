import React from 'react';



export default class PersonList extends React.Component {
  state = {
    filters: []
  }

  componentDidMount() {
    const axios = require("axios");
    axios({
      "method":"GET",
      "url":"https://the-cocktail-db.p.rapidapi.com/filter.php",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key":"dfb87b0ec6msh548e75d6f762a4bp1dc2f1jsn322c78d86502"
      },"params":{
      "c":"Cocktail"
      }
      })
      .then((response)=>{
        console.log(response)
        const filters = response.data.drinks;
            this.setState({ filters });
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  render() {
    return (
      <ul>
        { this.state.filters.map(filter => 
        <li>{filter.strDrink}</li>)}

    
      </ul>



    )
  }
}
