import React from 'react';
// import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"
import QuoteList from "../components/Quotes"


function App() {
  return (
    <div className="App">
     <Jumbotron />     
     <h1>Famous Alchohol Quotes</h1>
     <QuoteList/> 
     
     

    </div>
  );
}

export default App;