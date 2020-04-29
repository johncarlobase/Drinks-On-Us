const axios = require("axios");
const db = require("../models");
// Defining methods for the googleController
// findAll searches the Google Books API and returns only the entries we haven't already saved
// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
    findAll: function(req, res) {
      axios
        .get('http://sandbox-api.brewerydb.com/v2/styles/?key=c56ca9644f7b0bf60f4ee67fc5520777')
        .then(res =>
            res.json(res)
        ).catch(function(error) {
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
               
    })
  }
}