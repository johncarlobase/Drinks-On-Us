          // Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// Then run a request with axios to the OMDB API with the movie specified
let breweryDB =axios.get('http://sandbox-api.brewerydb.com/v2/styles/?key=c56ca9644f7b0bf60f4ee67fc5520777').then(
  function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

  module.exports = {breweryDB}
