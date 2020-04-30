
// Dependencies
const router = require("express").Router();
const breweryController = require("../../controllers/brewery-controller.js");


// Matches with "/api/drinks/brewery
router
.route("/brewery").get(breweryController.findAll);

module.exports = router;