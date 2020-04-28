import React from "react";
import "./style.css";


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
    </div>
  )
}

export default Jumbotron;