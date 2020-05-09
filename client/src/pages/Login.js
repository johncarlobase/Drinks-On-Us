import React from 'react';
// import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"
import LoginPage from "../components/Login"

function App() {
  return (
    <div className="App">
     <Jumbotron />     
     {/* <Nav /> */}
     <h1>Welcome to Drinks Are On Us!</h1>
     <LoginPage/>

    </div>
  );
}

export default App;


