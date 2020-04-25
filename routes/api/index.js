// Dependencies
const router = require("express").Router();
const drinkRoutes = require("./drinks");

// drink routes
router.use("/drinks", drinkRoutes);

//Exporting
module.exports = router;
