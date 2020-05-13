import React from 'react';
import Jumbotron from "../components/Jumbotron"
import Cocktails from "../components/Cocktails"
import DrinkSearch from "../components/DrinkSearch"
import IngredientSearch from "../components/IngredientSearch"
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
     {/* </Container> */}
     </div>
    </div>
  );
}

export default App;