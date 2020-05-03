import React from "react";
import "./style.css";
import Nav from "../Nav";
import { Container } from "../Grid";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">{props.children}
       <div className ="wrapper"> 
        <div className ="neon-wrapper"> 
         <div className ="neon-text"> Drinks Are On Us!</div>
     
         </div>
        </div>
      </div>
     
     <Container>
      <div className = " navBar">  
         <Nav />
      </div>
      </Container>
    </div>
   
  )
  
}

export default Jumbotron;