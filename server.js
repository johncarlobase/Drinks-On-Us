const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", true);
	res.header(
		"Access-Control-Allow-Methods",
		"GET,PUT,POST,DELETE,OPTIONS"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
	);
	next();
});
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/DRINKS_DB",
	{ useNewUrlParser: true }
);

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

