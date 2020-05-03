
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Beer from "./pages/Beer";
import Login from "./pages/Login";
import Drinks from "./pages/Drinks";
import Brewery from "./pages/Brewery";
import Wine from "./pages/Wine";
import Wine_Score from "./pages/Wine_Score";
import Wrapper from "./components/Wrapper";


function App() {

	return (
	 <Router>
      <div>
	
        <Wrapper>

          	  <Route exact path="/" component={Drinks} />
			  <Route exact path="/beer" component={Beer} />
			  <Route exact path="/login" component={Login} />
			  <Route exact path="/drinks" component={Drinks} />
     	      <Route exact path="/brewery" component={Brewery} />
			  <Route exact path="/wine" component={Wine} />
			  <Route exact path="/wine_score" component={Wine_Score} />
        </Wrapper>
     
      </div>
    </Router>
	);
}

export default App;