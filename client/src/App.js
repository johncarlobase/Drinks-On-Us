import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import IngredientList from './Components/IngredientList';
import RenderCategories from './Components/RenderCategories'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drink: [],
      categories: [],
    }

    this.showInfo = this.showInfo.bind(this);
    this.showCategories = this.showCategories.bind(this);
  }

  


  componentDidMount() {
    axios({
      "method":"GET",
      "url":"https://the-cocktail-db.p.rapidapi.com/list.php",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key":"c22e73525cmshd4b903fea7d9db9p1297efjsn1aadaafbd701"
      },"params":{
      "c":"list"
      }
      })
      .then((response)=>{
        console.log(response)
      })
      .then(response => {
        this.setState({
          isLoaded: true,
          drinks: response,
        })
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  async showCategories() {
    const info = await axios.get(`https://www.thecocktaildb.com/api/json/v1/c22e73525cmshd4b903fea7d9db9p1297efjsn1aadaafbd701/list.php?c=list`);

    if (this.state.visible === '') {
      this.setState({
        categories: info.data.drinks,
      })
    }
  }

  async showInfo(id) {
    const info = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${id}`);

    const moreInfo = info.data.drinks;

    this.setState({categoriesBreakdown: moreInfo})
  }

  render() {


      return (
        <div className="App">
          <button onClick={this.showCategories}>Categories</button>
          <div>
            <RenderCategories categories={this.state.categories}
              showInfo={this.showInfo}/>
          </div>
        </div>
      );
    
      
  }

    
  
}

export default App;
