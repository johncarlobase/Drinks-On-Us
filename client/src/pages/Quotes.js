import React from 'react';
// import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"
import QuoteList from "../components/Quotes"
import Footer from "../components/Footer"


function App() {
  return (
    <div className="App" >
     <Jumbotron />     
 
     <QuoteList/> 
     
     <Footer />

    </div>
  );
}

export default App;