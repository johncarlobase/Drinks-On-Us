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

  getColors: function (colorSearch) {
    return axios({
      "method":"GET",
      "url":"https://globalwinescore-global-wine-score-v1.p.rapidapi.com/globalwinescores/latest/?color=" + colorSearch,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"globalwinescore-global-wine-score-v1.p.rapidapi.com",
      "x-rapidapi-key":"dfb87b0ec6msh548e75d6f762a4bp1dc2f1jsn322c78d86502",
      'Authorization': 'Token 5900c020fd88621ce8361c96bcbb368ac97e2fb8',
      "accept":"application/json"
      },"params":{
      "limit":"100",
      "ordering":"-score"
      }
    })
  },
    getVintages: function (vintageSearch) {
      return axios({
        "method":"GET",
        "url":"https://globalwinescore-global-wine-score-v1.p.rapidapi.com/globalwinescores/latest/?vintage=" + vintageSearch,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"globalwinescore-global-wine-score-v1.p.rapidapi.com",
        "x-rapidapi-key":"dfb87b0ec6msh548e75d6f762a4bp1dc2f1jsn322c78d86502",
        'Authorization': 'Token 5900c020fd88621ce8361c96bcbb368ac97e2fb8',
        "accept":"application/json"
        },"params":{
        "limit":"100",
        "ordering":"-score"
        }
      })
    },
  
      getCountrys: function (countrySearch) {
        return axios({
          "method":"GET",
          "url":"https://globalwinescore-global-wine-score-v1.p.rapidapi.com/globalwinescores/latest/?country=" + countrySearch,
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"globalwinescore-global-wine-score-v1.p.rapidapi.com",
          "x-rapidapi-key":"dfb87b0ec6msh548e75d6f762a4bp1dc2f1jsn322c78d86502",
          'Authorization': 'Token 5900c020fd88621ce8361c96bcbb368ac97e2fb8',
          "accept":"application/json"
          },"params":{
          "limit":"100",
          "ordering":"-score"
          }
        })

  },

 getDrinkFilter: function (filterSearch) {
  return axios({
    "method":"GET",
    "url":"https://the-cocktail-db.p.rapidapi.com/filter.php",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
    "x-rapidapi-key":"dfb87b0ec6msh548e75d6f762a4bp1dc2f1jsn322c78d86502"
    },"params":{
     "c":filterSearch 
  }
    })
    // .then((response)=>{
    //   response.json(response)
    // })
    .catch((error)=>{
      console.log(error)
    })
},

getDrinkId: function (IdSearch) {
  return axios({
    "method":"GET",
    "url":"https://the-cocktail-db.p.rapidapi.com/filter.php",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
    "x-rapidapi-key":"dfb87b0ec6msh548e75d6f762a4bp1dc2f1jsn322c78d86502"
    },"params":{
     "i":IdSearch 
  }
    })
    // .then((response)=>{
    //   response.json(response)
    // })
    .catch((error)=>{
      console.log(error)
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
