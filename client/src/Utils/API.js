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


  getCity: function (beerCity) {
    return axios({
      "method": "GET",
      "url": "https://api.openbrewerydb.org/breweries?per_page=100&by_city=" + beerCity,
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
        "x-rapidapi-key": "dfb87b0ec6msh548e75d6f762a4bp1dc2f1jsn322c78d86502"
      },
      "params": {
        "query": beerCity
      }
    })

  },
  getState: function (beerState) {
    return axios({
      "method": "GET",
      "url": "https://api.openbrewerydb.org/breweries?per_page=100&by_state=" + beerState,
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
        "x-rapidapi-key": "dfb87b0ec6msh548e75d6f762a4bp1dc2f1jsn322c78d86502"
      },
      "params": {
        "query": beerState
      }
    })

  },

  getWine: function (wineSearch) {
    return axios({
      "method": "GET",
      "url": "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest?limit=" + wineSearch ,
      "headers": {
      "authorization": 'Token 5900c020fd88621ce8361c96bcbb368ac97e2fb8'
      },
      "params": {
        "query": wineSearch
      }
    })
  },

  getDrinkAPI: function(drinkSearch) {
    return axios({
      "method":"GET",
      "url":"https://the-cocktail-db.p.rapidapi.com/filter.php",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key":"c22e73525cmshd4b903fea7d9db9p1297efjsn1aadaafbd701"
      },"params":{
      "i": drinkSearch
      }
    })
  },

  fullDetails: function(drinkID) {
    return axios({
      "method":"GET",
      "url":"https://the-cocktail-db.p.rapidapi.com/lookup.php",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key":"c22e73525cmshd4b903fea7d9db9p1297efjsn1aadaafbd701"
      },"params":{
      "i": drinkID
      }
      }).then((response)=>{
        console.log(response)
      })
  },

  ingredientList: function() {
    return axios({
      "method":"GET",
      "url":"https://the-cocktail-db.p.rapidapi.com/list.php",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key":"c22e73525cmshd4b903fea7d9db9p1297efjsn1aadaafbd701"
      },"params":{
      "i":"list"
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






};
