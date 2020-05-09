import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../Utils/API";
import DrinkListItem  from "../components/DrinkList";
// import { IngredientList, IngredientListItem } from "../components/IngredientList";
// import DetailBreakdown from "../components/DetailBreakdown"
import { Container, Row, Col } from "../components/Grid";




class Drinks extends React.Component {
  state = {
    drinks: [],
    drinkSearch: "",
    ingredients: [],
    drinkID: [],
  };
  handleInputChange = event => {
    this.setState({
      drinkSearch: event.target.value
    });
  };

  makeDrink = drinkData => {
    return {
      drink: drinkData.strDrink,
      ingredient: drinkData.ingredients,
      instructions: drinkData.strInstructions,
      glass: drinkData.strGlass,
      image: drinkData.strDrinkThumb,
      id: drinkData.idDrink
    }
  };

  searchDrink = query => {
    API.getDrinksAPI(query)
        .then(res => this.setState({ drinks: res.data.drinks.map(drinkData => this.makeDrink(drinkData)) }))
        .catch(err => console.error(err));
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get drinks update the drinks state
    event.preventDefault();
    this.searchDrink(this.state.drinkSearch);
  };

  showIngredients = event => {
    event.preventDefault();
    API.ingredientList(this.state)
      console.log(this.state)
      .then(res => {
        console.log(res)
        this.setState({ ingredient: res.data.drinks})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
          <Jumbotron />
      
        <Container>
          {/* Row that holds the search input */}
          <Row className = "row">
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <h1 className ="enter">Enter A Drink To Search For</h1>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="drinkSearch"
                        value={this.state.drinkSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a drink"/>
                    </Col>
                     {/* Row that holds the search input */}
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg">
                        Search
                      </Button>
                      {/* <Button onClick={this.generateIngredients}>Ingredients</Button> */}
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          {/* Row Ends that holds the search*/}
          <Row>
            <Col size="xs-12">
              {this.state.drinks.length ? (
                  <DrinkList>
                  {this.state.drinks.map(drink => {
                    console.log(drink);
                    return (
                      <DrinkListItem
                        key={drink.idDrink}
                        name={drink.strDrink}
                        id={drink.idDrink}
                        image={drink.strDrinkThumb}
                        website_url={drink.website_url}
                        onClick={API.savedrink}

                        />
                        );
                      })}
                </DrinkList>
              ) : (
                <h4 className="text-center no-bee">No Drinks to Display</h4>
              )}
            </Col>
          </Row>
          {/* <Row>
            <Col size="xs-12">
              {this.state.ingredients.length ? (
                  <IngredientList>
                  {this.state.ingredients.map(ingredient => {
                    console.log(ingredient);
                    return (
                      <IngredientListItem
                        name={ingredient.strIngredient1}
                        />
                        );
                      })}
                </IngredientList>
              ) : (
                <h4 className="text-center no-bee">No Ingredients to Display</h4>
              )}
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}
export default Drinks;