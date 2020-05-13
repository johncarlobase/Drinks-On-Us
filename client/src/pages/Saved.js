import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron"
import API from "../Utils/API"
// import DrinkListItem from "../components/DrinkListItem"
import {DrinkList} from "../components/DrinkList"
import Results from "../components/Results"

class Saved extends Component {
    state = {
        savedDrinks: []
    }

    componentDidMount() {
        API.savedDrinks()
            .then(savedDrinks => this.setState({ savedDrinks: savedDrinks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <Jumbotron/>
            {this.state.savedDrinks.length ? (
                <DrinkList>
                {this.state.savedDrinks.map(drink => {
                  console.log(drink);
                  return (
                    <Results
                        drinks={drink}
                        strDrink={drink.drink}
                        idDrink={drink.id}
                        strDrinkThumb={drink.image}
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