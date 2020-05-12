import React, { useState, useEffect } from 'react';
import Hero from "../components/Hero";
import Jumbotron1 from "../components/Jumbotron1"
import MyModal from "../components/Modal"
import Footer from "../components/Footer"
// import { Link } from 'react-router';




function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    useEffect(() => {
     handleShow()
    
      return () => {
          handleClose()
      };
    }, []); // no dependencies!




  return (
    <div className="Valid">
  <Jumbotron1 />

  <MyModal /> 
  <Hero backgroundImage="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
        <h1>Welcome To Drinks Are On Us!</h1>
        <h2>"When I read about the evils of drinking I gave up reading."</h2>
    <div>
      <Card show={show} onHide={handleClose}>
       <Card.Header> ARE YOU OF LEGAL DRINKING AGE?   </Card.Header>
        <Card.Body>Please Verify You Are 21 Years Of Age Or Older</Card.Body>
          {/* <Link to ="/Home"> */}
          <Button variant="secondary" onClick={handleClose}>
              YES!
          </Button>
          {/* </Link> */}
             <a href="https://www.responsibility.org/">
           <Button variant="primary"  onClick={handleClose }>
                NO!
           </Button></a>

      </Card>
      </div>    
      
      </Hero>
         
          <Footer/>
    </div>

  );
}

export default App;

// export default Valid;
