	import React from 'react';
  import data from '../Quotes/data.json';
  import { Container, Row, Col } from "../Grid";
  import {Card }from 'react-bootstrap';
   
// /
  const h1 ={
    textAlign: "center",
    fontFamily:  'Crimson',
    fontSize: "57px",
    marginTop: '5px',
    fontWeight: "500"
  }

  const text = {
    fontSize: "22px",
    fontWeight: "600",
    color: "#FFFFFF",
    textShadow: '-2px 2px 0 #000,  2px 2px 2px #000,   2px -2px 0 #000,   -2px -2px 0 #000'
  }
  const cardStyle = {
    marginTop: "5px",
    // width: "auto",
     width: "1110px",
    boxShadow: "0 3px 6px rgb(82, 80, 80), 0 3px 6px rgb(53, 50, 50)",
    padding: "10px",
  }
  
  
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
  <div>
            <Container>
               <Row> 
                <Card className = "card" style ={cardStyle}>
                    <div className="header">
                       <h1 style ={h1}>Famous Quotes on Drinking and Alcohol</h1>
                    </div>
                </Card>
              </Row>
                 <br></br>
             </Container>
                
  
    {data.map((postDetail, index)=>{
    return <ul>    
      
    <Container>
        <Row> 
         <Col size="xs-1 sm-1">
           <img src ={postDetail.img} alt="whatevs"/> 
           </Col>
         
           <Col size="xs-11 sm-11" >
           <div style={text}>
            {postDetail.quoteText}  -
            Author : {postDetail.author}
            </div>
            </Col>
           
         </Row>
 
       </Container>
     
     
      </ul>
  
  })}
  </div>
  
    )
   }
  }
  
          