
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Beer from "./pages/Beer";
import Detail from "./pages/Detail";
import Drinks from "./pages/Drinks";
import Brewery from "./pages/Brewery";
import Wine from "./pages/Wine";
import Test from "./pages/Test";
import Wrapper from "./components/Wrapper";


function App() {

	return (
	 <Router>
      <div>
	
        <Wrapper>

          	  <Route exact path="/" component={Drinks} />
			  <Route exact path="/beer" component={Beer} />
			  <Route exact path="/details" component={Detail} />
			  <Route exact path="/drinks" component={Drinks} />
     	      <Route exact path="/brewery" component={Brewery} />
			  <Route exact path="/wine" component={Wine} />
			  <Route exact path="/test" component={Test} />
        </Wrapper>
     
      </div>
    </Router>
	);
}

export default App;