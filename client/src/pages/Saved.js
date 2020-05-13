import React, { Component } from "react";
//import Jumbotron from "../components/Jumbotron"
// import API from "../Utils/API"
import DrinkListItem from "../components/DrinkListItem"
import {DrinkList} from "../components/DrinkList"

class Saved extends Component {
    state = {
        savedDrinks: []
    }

    // componentDidMount() {
    //     API.savedDrinks()
    //         .then(savedDrinks => this.setState({ savedDrinks: savedDrinks }))
    //         .catch(err => console.error(err));
    // }

    render() {
        return (
            <div>
            {this.state.savedDrinks.length ? (
                <DrinkList>
                {this.state.savedDrinks.map(filter => {
                  console.log(filter);
                  return (
                    <DrinkListItem
                      strDrink={filter.strDrink}
                      idDrink={filter.idDrink}
                      strDrinkThumb={filter.strDrinkThumb}
                      />
                      );
                    })}
              </DrinkList>
            ) : (
              <h4 className="text-center">No Drinks to Display</h4>
            )}
            </div>
        )
    }
}

export default Saved;