<<<<<<< HEAD
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

    
  
=======

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Beer from "./pages/Beer";
import Detail from "./pages/Detail";
import Drinks from "./pages/Drinks";
import Brewery from "./pages/Brewery";
import Wine from "./pages/Wine";
import Wrapper from "./components/Wrapper";


function App() {
	return (
	 <Router>
      <div>
   
        <Wrapper>

          	  <Route exact path="/" component={Drinks} />
			  <Route exact path="/beer" component={Beer} />
			  <Route exact path="/details" component={Detail} />
			  <Route exact path="/drinks" component={Drinks} />
     	      <Route exact path="/brewery" component={Brewery} />
			  <Route exact path="/wine" component={Wine} />
       
        </Wrapper>
     
      </div>
    </Router>
	);
>>>>>>> 2ef99755418e472944ff9cc19fcd683cd9995bb8
}

export default App;