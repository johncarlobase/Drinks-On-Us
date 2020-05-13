import React from 'react';
import Jumbotron from "../components/Jumbotron"
import Cocktails from "../components/Cocktails"
// import { Container } from '../components/Grid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

let bg= require ('../Images/marble2.jpg')


const tabbs ={
  marginTop: "40px",
  boxShadow: "0 3px 6px rgb(82, 80, 80), 0 3px 6px rgb(53, 50, 50)",
  padding: "10px",
  backgroundImage: 'url('+bg+')',
  width: "1300px",
  margin: "auto",
  }
function App() {
  return (
    <div className="App" >
 
     <Jumbotron />     
 <div className = "wtf">
 {/* <Container> */}
    <Tabs style = {tabbs}>
    <TabList>
          <Tab>Drinks By Category</Tab>
          <Tab>Search By Ingredient</Tab>
          <Tab>Search By Whatevs</Tab>
        </TabList>
    <TabPanel>
     <Cocktails />
     </TabPanel>

     <TabPanel>
     <h1>Put some shit here</h1>
     </TabPanel>

     <TabPanel>
     <h1>Put some more shit here</h1>
     </TabPanel>

     </Tabs>
     {/* </Container> */}
     </div>
    </div>
  );
}

export default App;