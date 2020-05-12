import React from "react";
import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron"
import MyModal from "../components/Modal"
import Footer from "../components/Footer"



function App() {
  return (
    <div className="App">
   <MyModal />
    <Jumbotron />
        <Hero backgroundImage="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
           <h1>Welcome To Drinks Are On Us!</h1>
            <h2>"When I read about the evils of drinking I gave up reading."</h2>
        </Hero> 
          <Footer/>
    </div>

  );
}

export default App;


