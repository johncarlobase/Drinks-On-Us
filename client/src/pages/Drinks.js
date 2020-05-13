import React from 'react';
import Jumbotron from "../components/Jumbotron"
import Cocktails from "../components/Cocktails"
import DrinkSearch from "../components/DrinkSearch"

//import { Container, Row, Col } from "../components/Grid";
function App() {
  return (
    <div className="App">
     <Jumbotron />     
  

     <Cocktails />
     <DrinkSearch/>


    </div>
  );
}

export default App;