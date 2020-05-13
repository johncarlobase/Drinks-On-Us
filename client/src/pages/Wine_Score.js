import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";
import Button from "../components/Button";
import API from "../Utils/API";
import { WineList, WineListItem } from "../components/WineList";
import { Container, Row, Col } from "../components/Grid";
import Input from "../components/Input";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Table from 'react-bootstrap/Table';
import {Card, Accordion}from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';

let bg= require ('../Images/white-marble-3-2018.jpg')

const h1 ={
  textAlign: "center",
}

const tabbs ={
marginTop: "20px",
boxShadow: "0 3px 6px rgb(82, 80, 80), 0 3px 6px rgb(53, 50, 50)",
padding: "10px",
backgroundImage: 'url('+bg+')',
width: "1050px"
}

const cardStyle = {
  marginTop: "5px",
  // width: "auto",
   width: "1050px",
  boxShadow: "0 3px 6px rgb(82, 80, 80), 0 3px 6px rgb(53, 50, 50)",
  padding: "10px",

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
          
          <Container >
          <Row>  
              <Col size="sm-12">
                  <Accordion>
                       <Card className = "card" style ={cardStyle}>
                          <Card.Header>
                               <Accordion.Toggle as={Button} variant="link" eventKey="0">    
                                  <h5>What Are Wine Scores?</h5>
                              </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                           <Card.Body>     
                             <p>A wine score is the quickest, simplest way for a wine critic to communicate their opinion about the quality of a wine. Often found alongside tasting notes, wine scores help consumers and collectors decide which wines to buy, and can be a powerful marketing tool. To generate a wine's average score, Wine-Searcher uses a Bayesian methodology to calculate a weighted average. This average score is calculated for specific vintages of a wine, as well as across all vintages. The 100-point scale is the most common method for scoring wines. </p>
                             <p>The 100-point wine-scoring scale was popularized by Wine Spectator magazine and by Robert Parker in his Wine Advocate newsletter. The effect of a high score from either publication is hard to understate, and can make or break a wine brand (see these lists of Wine Spectator Top 100 Wines and Robert Parker 100-Point Wines).

                              There are many who question the value of the 100-point scale, typically because almost all wines evaluated fall within a narrow band between 85 and 100 points. The system is based on the American high-school marking system, so the scale starts at 50 (rather than 0), which has led to further criticism. Despite this the 100-point scale is used by more and more critics – amateur and professional – with each year that passes.</p>
                                  <Table variant="dark" >
                                    <thead>
                                      <tr>
                                        <th>Score</th>
                                        <th>Explanation</th>
                                       </tr>
                                    </thead>
                                      <tbody>
                                        <tr>
                                          <td>95–100	Classic:</td>
                                          <td>A  great wine</td>
                                        </tr>
                                        <tr>
                                          <td>90–94	Outstanding:</td>
                                          <td>A wine of superior character and style</td>
                                        </tr>
                                        <tr>
                                          <td>85–89	Very good:</td>
                                          <td>A wine with special qualities</td>
                                        </tr>
                                        <tr>
                                          <td>80–84	Good:</td>
                                          <td>A well-made wine</td>
                                        </tr>
                                        <tr>
                                          <td>75–79	Mediocre:</td>
                                          <td>A drinkable wine that may have minor flaws</td>
                                        </tr>
                                        <tr>
                                          <td>50–74:</td>
                                          <td>Not recommendedWine Spectator 100-Point Scale</td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                            <p>Users of the 100-point scale include: Robert Parker (Wine Advocate), Wine Spectator, Vinous, Decanter Magazine, James Suckling, Jamie Goode, Jeff Leve (The Wine Cellar Insider), Wine & Spirits Magazine.  ~Wine Searcher.com</p>
                                      {/* <img src={abv1} alt="ABV" width="1100px"></img>  */}
                          </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                   </Accordion>
                </Col>
            </Row>  
        <Tabs style ={tabbs} >
    <TabList>
      <Tab>Search by Color</Tab>
      <Tab>Search By Vintage</Tab>
      <Tab>Search By Country</Tab>
    </TabList>
 
    <TabPanel>
    <Container  >
          {/* Search for a color */}
          <Row className = "row">
            <Col size="md-12">
              <form >
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