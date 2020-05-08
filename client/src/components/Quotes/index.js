import React from 'react';
import data from '../Quotes/data.json';
import { Container, Row, Col } from "../Grid";
// import {Card }from 'react-bootstrap';


export default class QuoteList extends React.Component {

render(){
  return(
   


<div>
<Container>
      <Row className="title"> 
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
          Author: {postDetail.author}
          </Col>
       </Row>
     </Container>
   
          </ul>

})}
</div>

  )
 }
}



    
 
