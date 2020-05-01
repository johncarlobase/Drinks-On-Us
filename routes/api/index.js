// Dependencies
const router = require("express").Router();
const drinkRoutes = require("./drinks");
const breweryRoutes = require("./brewery");

// drink routes
router.use("/drinks", drinkRoutes);
router.use("/brewery", breweryRoutes);

//Exporting
module.exports = router;
