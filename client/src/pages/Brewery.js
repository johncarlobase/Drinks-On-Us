import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../Utils/API";
import { BeerList, BeerListItem } from "../components/BeerList";
import { Container, Row, Col } from "../components/Grid";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Brewery extends Component {
  state = {
    beers: [],
    beerSearch: "",
    cities: [],
    beerCity: "",
    states: [],
    beerState: ""
  };
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    //const { name, value } = event.target;
    this.setState({
      beerSearch: event.target.value,
      beerCity: event.target.value,
      beerState: event.target.value,
    });
  };
  // Handles the form submit for general search
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
// Handles the form submit for the city search
  handleFormSubmit1 = event => {
    // When the form is submitted, prevent its default behavior, get beers update the beers state
    event.preventDefault();
    API.getCity(this.state.beerCity)
      .then(res =>{
        console.log(res)
        this.setState({ cities: res.data })
      })
      .catch(err => console.log(err));
  };
// Handles the form submit for the city search
handleFormSubmit2 = event => {
  // When the form is submitted, prevent its default behavior, get beers update the beers state
  event.preventDefault();
  API.getState(this.state.beerState)
    .then(res =>{
      console.log(res)
      this.setState({ states: res.data })
    })
    .catch(err => console.log(err));
};


  render() {
    return (
      <div>
    <Jumbotron />
     {/* <Nav /> */}
      <Tabs>
        <TabList>
          <Tab>General Search</Tab>
          <Tab>City Brewery Search</Tab>
          <Tab>State Brewery Search</Tab>
        </TabList>
        {/* This is tab panel 1 */}
            <TabPanel>  
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
                <h4 className="text-center no-bee">No Breweries to Display</h4>
              )}
            </Col>
          </Row>
        </Container>
    </TabPanel>
{/* End of tab panel 1 */}
{/* Beginning of Tab Panel 2 */}
      <TabPanel>
              <Container>
              {/* Row that holds the search input */}
              <Row className = "row">
                <Col size="md-12">
                  <form>
                   <Container>
                      <Row>
                      <h1 className ="enter">Enter A City To Search For A Brewery List</h1>
                      <Col size="xs-9 sm-10">
                      <Input
                        name="beerCity"
                        value={this.state.beerCity}
                        onChange={this.handleInputChange}
                        placeholder="Search For A City"/>
                        </Col>
                        {/* Row that holds the search input */}
                         <Col size="xs-3 sm-2">
                           <Button
                             onClick={this.handleFormSubmit1}
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
              {this.state.cities.length ? (
                  <BeerList>
                  {this.state.cities.map(city => {
                    console.log(city);
                    return (
                      <BeerListItem
                        key={city.id}
                        name={city.name}
                        brewery_type={city.brewery_type}
                        city={city.city}
                        street={city.street}
                        state={city.state}
                        postal_code={city.postal_code}
                        id={city.id}
                        phone={city.phone}
                        website_url={city.website_url}
                        onClick={API.savebeer}
                        />
                        );
                      })}
                </BeerList>
              ) : (
                <h4 className="text-center no-bee">No City Breweries to Display</h4>
              )}
            </Col>
          </Row>
        </Container>
    </TabPanel>
{/* End of tab panel 2 */}
 {/*Beginning of Tab Panel 3*/}
    <TabPanel>
              <Container>
              {/* Row that holds the search input */}
              <Row className = "row">
                <Col size="md-12">
                  <form>
                   <Container>
                      <Row>
                      <h1 className ="enter">Enter A State To Search For A Brewery List</h1>
                      <Col size="xs-9 sm-10">
                      <Input
                        name="beerState"
                        value={this.state.beerState}
                        onChange={this.handleInputChange}
                        placeholder="Search For A State"/>
                        </Col>
                        {/* Row that holds the search input */}
                         <Col size="xs-3 sm-2">
                           <Button
                             onClick={this.handleFormSubmit2}
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
              {this.state.states.length ? (
                  <BeerList>
                  {this.state.states.map(state => {
                    console.log(state);
                    return (
                      <BeerListItem
                        key={state.id}
                        name={state.name}
                        brewery_type={state.brewery_type}
                        city={state.city}
                        street={state.street}
                        state={state.state}
                        postal_code={state.postal_code}
                        id={state.id}
                        phone={state.phone}
                        website_url={state.website_url}
                        onClick={API.savebeer}
                        />
                        );
                      })}
                </BeerList>
              ) : (
                <h4 className="text-center no-bee">No City Breweries to Display</h4>
              )}
            </Col>
          </Row>
        </Container>
    </TabPanel>
 {/* End of tab panel 3 */}

    </Tabs>
        










      </div>
    );
  }
}
export default Brewery;