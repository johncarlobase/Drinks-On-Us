import axios from "axios";
export default {
  getBeers: function (beerSearch) {

    return axios({
      "method": "GET",
      "url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
        "x-rapidapi-key": "dfb87b0ec6msh548e75d6f762a4bp1dc2f1jsn322c78d86502"
      },
      "params": {
        "query": beerSearch
      }
    })

  },

  // Gets all drinks
  getDrinks: function () {
    return axios.get("/api/drinks");
  },
  // Gets the drink with the given id
  getDrink: function (id) {
    return axios.get("/api/drinks/" + id);
  },
  updateDrink: function (id, drinkData) {
    return axios.put("/api/drinks/" + id, drinkData);
  },
  // Deletes the drink with the given id
  deleteDrink: function (id) {
    return axios.delete("/api/drinks/" + id);
  },
  // Saves a drink to the database
  saveDrink: function (drinkData) {
    return axios.post("/api/drinks", drinkData);
  },


getBrewery: function(){
return axios.get("/api/brewery")
}



};
