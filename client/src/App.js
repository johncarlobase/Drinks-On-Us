
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Beer from "./pages/Beer";
import Login from "./pages/Login";
import Drinks from "./pages/Drinks";
import Brewery from "./pages/Brewery";
import Quotes from "./pages/Quotes";
import DrinkSearch from "./pages/DrinkSearch"
import Wine_Score from "./pages/Wine_Score";
import Wrapper from "./components/Wrapper";
import Saved from "./pages/Saved";


function App() {

	return (
	 <Router>
      <div>
	
        <Wrapper>

          	  <Route exact path="/" component={Login} />
			  <Route exact path="/beer" component={Beer} />
			  <Route exact path="/login" component={Login} />
			  <Route exact path="/drinks" component={Drinks} />
     	      <Route exact path="/brewery" component={Brewery} />
			  <Route exact path="/quotes" component={Quotes} />
			  <Route exact path="/wine_score" component={Wine_Score} />
			  <Route exact path="/drinkSearch" component={DrinkSearch} />
			  <Route exact path="/saved" component={Saved} /> 
        </Wrapper>
     
      </div>
    </Router>
	);
}

export default App;