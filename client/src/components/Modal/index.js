import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button';
// import style from "./"


  
function MyModal() {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


      useEffect(() => {
       handleShow()
      
        return () => {
            handleClose()
        };
      }, []); 
  
    return (
      <>
        <Modal enforceFocus={true} show={show} onHide={handleClose} className ="Motal">
          <Modal.Header>
            <Modal.Title>ARE YOU OF LEGAL DRINKING AGE?</Modal.Title>
          </Modal.Header>
          {/* <Modal.Body>ARE YOU OF LEGAL DRINKING AGE?</Modal.Body> */}
          <Modal.Body>Please Verify You Are 21 Years Of Age Or Older</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              YES!
            </Button>
           <a href="https://www.responsibility.org/">
            <Button variant="primary"  onClick={handleClose }>
                NO!
            </Button></a>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

//   render(<Example />);
export default MyModal;
