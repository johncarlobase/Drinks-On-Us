
import axios from "axios";
export default {
getBeers: function(beerSearch) {

return axios({
  "method":"GET",
  "url":"https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search",
  "headers":{
  "content-type":"application/octet-stream",
  "x-rapidapi-host":"brianiswu-open-brewery-db-v1.p.rapidapi.com",
  "x-rapidapi-key":"dfb87b0ec6msh548e75d6f762a4bp1dc2f1jsn322c78d86502"
  },"params":{
  "query": beerSearch
  }
  })

      },
    };
