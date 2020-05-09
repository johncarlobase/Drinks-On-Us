import React from "react";
import Input from "../Input";
import Button from "../Button";
import API from "../../Utils/API";
import {DrinkList} from "../DrinkList"
import DrinkListItem  from "../DrinkListItem";
import { Container, Row, Col } from "../Grid";

export default class IngredientSearch extends React.Component {
  state = {
    drinks: [],
    drinkSearch: ""
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
    API.getDrinksByIng(query)
        .then(res => this.setState({ drinks: res.data.drinks.map(drinkData => this.makeDrink(drinkData)) }))
        .catch(err => console.error(err));
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get drinks update the drinks state
    event.preventDefault();
    this.searchDrink(this.state.drinkSearch);
  };

  render() {
    return (
      <div>
        <Container>
          {/* Row that holds the search input */}
          <Row className = "row">
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <h1 className ="enter">Enter An Ingredient To Search For Drinks</h1>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="drinkSearch"
                        value={this.state.drinkSearch}
                        onChange={this.handleInputChange}
                        placeholder="Enter an Ingredient"/>
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
                        strDrink={drink.drink}
                        idDrink={drink.id}
                        strDrinkThumb={drink.image}
                        />
                        );
                      })}
                </DrinkList> 
              ) : (
                <h4 className="text-center no-bee">No Drinks to Display</h4>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
