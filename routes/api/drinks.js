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

 



// Exporting
module.exports = router;
