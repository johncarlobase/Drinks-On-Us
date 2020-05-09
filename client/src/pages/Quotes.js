import React from 'react';
// import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"
import QuoteList from "../components/Quotes"
import "./style.css";


function App() {
  return (
    <div className="App-quotes">
     <Jumbotron />     
 
     <QuoteList/> 
     
     

    </div>
  );
}

export default App;