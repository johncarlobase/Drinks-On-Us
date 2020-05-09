	import React from 'react';
  import data from '../Quotes/data.json';
  import { Container, Row, Col } from "../Grid";
  import "./style.css";
  // import {Card }from 'react-bootstrap';
  
  
  export default class QuoteList extends React.Component {
    state = {
      data,
    }
    componentDidMount() {
      this.shuffleArray();
    
    }
    shuffleArray = () => {
      // Shuffle array of objects
      const shuffledArr = this.shuffle(this.state.data);
      // Setting 'shuffledArr' as the new state
      this.setState({ shuffledArr });
    };
  
// Function that takes an array as a parameter and shuffles it
    shuffle = array => {
    var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};






  
  render(){
    return(
     
  
  
  <div className="quotes">
  <Container>
        <Row> 
  <div classname="header">
  <h1 >Famous Quotes on Drinking and Alcohol</h1>
  </div>
  </Row>
       </Container>
      
  
    {data.map((postDetail, index)=>{
    return <ul>    
      <Container>
        <Row> 
         <Col size="xs-1 sm-1">
           <img src ={postDetail.img} alt="whatevs"/> 
           </Col>
           <Col size="xs-11 sm-11">
            {postDetail.quoteText}  -
            Author : {postDetail.author}
            </Col>
         </Row>
       </Container>
     
      </ul>
  
  })}
  </div>
  
    )
   }
  }
  
          