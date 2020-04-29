// Dependencies
const router = require("express").Router();
const drinksController = require("../../controllers/drinks-controller.js");

// Matches with "/api/drinks"
router.route("/").get(drinksController.findAll).post(drinksController.create);

// Matches with "/api/drinks/:id"
router
	.route("/:id")
	.get(drinksController.findById)
	.put(drinksController.update)
	.delete(drinksController.remove);


// Matches with "/api/drinks/brewery
router
.route("/brewery")
.get('http://sandbox-api.brewerydb.com/v2/styles/?key=c56ca9644f7b0bf60f4ee67fc5520777')
.then(function(response) {
    console.log(response.data);
  })
 



// Exporting
module.exports = router;
