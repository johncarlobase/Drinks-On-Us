import React from 'react';
import Jumbotron from "../components/Jumbotron"
import Cocktails from "../components/Cocktails"
import DrinkSearch from "../components/DrinkSearch"
import IngredientSearch from "../components/IngredientSearch"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import { Container, Row, Col } from "../components/Grid";
function App() {
  return (
    <div className="App">
     <Jumbotron />     
    <Tabs>
    <TabList>
          <Tab>Drinks By Category</Tab>
          <Tab>Search By Ingredient</Tab>
          <Tab>Search By Drink Name</Tab>
        </TabList>
    <TabPanel>
     <Cocktails />
     </TabPanel>

     <TabPanel>
     <IngredientSearch/>
     </TabPanel>

     <TabPanel>
     <DrinkSearch/>
     </TabPanel>



     </Tabs>
    </div>
  );
}

export default App;