import React from 'react';
import Jumbotron from "../components/Jumbotron"
import Cocktails from "../components/Cocktails"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./style.css";
//import { Container, Row, Col } from "../components/Grid";
function App() {
  return (
    <div className="App-drinks">
     <Jumbotron />     
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
    </div>
  );
}

export default App;