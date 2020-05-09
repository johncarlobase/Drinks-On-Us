import React from 'react';
import Jumbotron from "../components/Jumbotron"
import Cocktails from "../components/Cocktails"
import { Container } from '../components/Grid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./style.css";

const center = {
  marginLeft: "-100"

}

function App() {
  return (
    <div className="App-drinks" >

     <Jumbotron />     
 <Container style={center}>
    <Tabs>
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
     </Container>
    </div>
  );
}

export default App;