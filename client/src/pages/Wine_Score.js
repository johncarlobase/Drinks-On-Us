import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";
import Button from "../components/Button";
import API from "../Utils/API";
import { WineList, WineListItem } from "../components/WineList";
import { Container, Row, Col } from "../components/Grid";
import Input from "../components/Input";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 
const h1 ={
  textAlign: "center",
  fontFamily:  "'Kumar One', cursive",
}



class Wine_Score extends Component {
  state = {
    colors: [],
    colorSearch: "",
    vintages: [],
    vintageSearch: "",
    countrys: [],
    countrysearch: ""
  };
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target   // Update the appropriate state     //const { name, value } = event.target;
    this.setState({
      colorSearch: event.target.value,
      vintageSearch: event.target.value,
      countrySearch: event.target.value,
    });
  };
  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get beers update the beers state
    event.preventDefault();
    API.getColors(this.state.colorSearch)
      .then(res =>{
        console.log(res)
        this.setState({ colors: res.data.results })
      })
      .catch(err => console.log(err));
  };
  handleFormSubmit1 = event => {
    // When the form is submitted, prevent its default behavior, get beers update the beers state
    event.preventDefault();
    API.getVintages(this.state.vintageSearch)
      .then(res =>{
        console.log(res)
        this.setState({ vintages: res.data.results })
      })
      .catch(err => console.log(err));
  };


  handleFormSubmit2 = event => {
    // When the form is submitted, prevent its default behavior, get beers update the beers state
    event.preventDefault();
    API.getCountrys(this.state.countrySearch)
      .then(res =>{
        console.log(res)
        this.setState({ countrys: res.data.results })
      })
      .catch(err => console.log(err));
  };



  render() {
    return (
      <div>
          <Jumbotron />
          <Container>
        <Tabs>
    <TabList>
      <Tab>Search by Color</Tab>
      <Tab>Search By Vintage</Tab>
      <Tab>Search By Country</Tab>
    </TabList>
 
    <TabPanel>
    <Container>
          {/* Search for a color */}
          <Row className = "row">
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <h1 className ="enter" style={h1}>Enter A Wine To Search For - Red, White or Pink</h1>
                    <Col size="xs-9 sm-10">
                   
                      <Input
                        name="colorSearch"
                        value={this.state.colorSearch}     
                        onChange={this.handleInputChange}
                        placeholder="Search For a Wine"/>
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
              {this.state.colors.length ? (
                  <WineList>
                  {this.state.colors.map(color => {
                    console.log(color);
                    return (
                      <WineListItem
                        // wine={wines.index}
                        wine={color.wine}
                        color={color.color}
                        classification={color.classification}
                        score={color.score}
                        vintage={color.vintage}
                        region={color.regions[0]}
                        lwin={color.lwin}
                        country={color.country}
                        appellation={color.appellation}
                        confidence_index={color.confidence_index}
                        wine_slug={color.wine_slug}
                        />
                        );
                      })}
                </WineList>
              ) : (
                <h4 className="text-center no-bee">No Wines to Display</h4>
              )}
            </Col>
          </Row>
        </Container>
    </TabPanel>
    
    
    <TabPanel>
    <Container>
          {/* Search for a country */}
          <Row className = "row">
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <h1 className ="enter">Enter A Vintage To Search For</h1>
                    <Col size="xs-9 sm-10">
                   
                      <Input
                        name="vintageSearch"
                        value={this.state.vintageSearch}     
                        onChange={this.handleInputChange}
                        placeholder="Search For a Wine"/>
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
              {this.state.vintages.length ? (
                  <WineList>
                  {this.state.vintages.map(vintage => {
                    console.log(vintage);
                    return (
                      <WineListItem
                        // wine={wines.index}
                        wine={vintage.wine}
                        color={vintage.color}
                        classification={vintage.classification}
                        score={vintage.score}
                        vintage={vintage.vintage}
                        region={vintage.regions[0]}
                        lwin={vintage.lwin}
                        country={vintage.country}
                        appellation={vintage.appellation}
                        confidence_index={vintage.confidence_index}
                        wine_slug={vintage.wine_slug}
                        />
                        );
                      })}
                </WineList>
              ) : (
                <h4 className="text-center no-bee">No Wines to Display</h4>
              )}
            </Col>
          </Row>
        </Container>
    </TabPanel>


    <TabPanel>          
    <Container>
          {/* Search that handles vintage */}
          <Row className = "row">
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                 
                    <h1 className ="enter">Enter A Country To Search For</h1>
                    <Col size="xs-9 sm-10">
                   
                      <Input
                        name="countrySearch"
                        value={this.state.countrySearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Wine"/>
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
              {this.state.countrys.length ? (
                  <WineList>
                  {this.state.countrys.map(country => {
                    console.log(country);
                    return (
                      <WineListItem
                        // wine={wines.index}
                        wine={country.wine}
                        color={country.color}
                        classification={country.classification}
                        score={country.score}
                        vintage={country.vintage}
                        region={country.regions[0]}
                        lwin={country.lwin}
                        country={country.country}
                        appellation={country.appellation}
                        confidence_index={country.confidence_index}
                        wine_slug={country.wine_slug}
                        />
                        );
                      })}
                </WineList>
              ) : (
                <h4 className="text-center no-bee">No Wines to Display</h4>
              )}
            </Col>
          </Row>
        </Container>

    
    </TabPanel>
  </Tabs>
                 
  </Container>

      </div>
    );
  }
}
export default Wine_Score;