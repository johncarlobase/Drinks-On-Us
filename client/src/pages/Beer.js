import React from 'react';
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"
import Beer from "../components/Beer"

function App() {
  return (



    <div className="App">
     <Jumbotron />     
     <Nav />
    
      <h1>Beer</h1>
     <Beer />
  

    </div>
  );
}

export default App;