import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../Utils/API";
import { BeerList, BeerListItem } from "../components/BeerList";
import { Container, Row, Col } from "../components/Grid";



class Brewery extends Component {
  state = {
    beers: [],
    beerSearch: ""
  };
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    //const { name, value } = event.target;
    this.setState({
      beerSearch: event.target.value
    });
  };
  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get beers update the beers state
    event.preventDefault();
    API.getBeers(this.state.beerSearch)
      .then(res =>{
        console.log(res)
        this.setState({ beers: res.data })
      })
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <div>
          <Jumbotron />
        <Nav />
      
        <Container>
          {/* Row that holds the search input */}
          <Row className = "row">
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <h1 className ="enter">Enter A Brewery To Search For</h1>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="beerSearch"
                        value={this.state.beerSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a beer"/>
                    </Col>
                     {/* Row that holds the search input */}
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg">
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          {/* Row Ends that holds the search*/}
          <Row>
            <Col size="xs-12">
              {this.state.beers.length ? (
                  <BeerList>
                  {this.state.beers.map(beer => {
                    console.log(beer);
                    return (
                      <BeerListItem
                        key={beer.id}
                        name={beer.name}
                        brewery_type={beer.brewery_type}
                        city={beer.city}
                        street={beer.street}
                        state={beer.state}
                        postal_code={beer.postal_code}
                        id={beer.id}
                        phone={beer.phone}
                        website_url={beer.website_url}
                       
                        onClick={API.savebeer}

                        />
                        );
                      })}
                </BeerList>
              ) : (
                <h4 className="text-center no-bee">No Beers to Display</h4>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Brewery;