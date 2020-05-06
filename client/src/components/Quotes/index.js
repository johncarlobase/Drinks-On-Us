import React from 'react';
import data from '../Quotes/data.json';
// import {Card }from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class QuoteList extends React.Component {

render(){
  return(
<div>


{data.map((postDetail, index)=>{
  return <ul>
       <img src ={postDetail.img} alt="whatevs"/> -
          {postDetail.quoteText} - 
          Author: {postDetail.author}
   
          </ul>

})}

</div>

  )


}


}



    
 
