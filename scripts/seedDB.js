// Dependencies
const mongoose = require("mongoose");
const db = require("../models");

//This file empties the drinks & Users collections and inserts the drinks & users below

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/DRINKS_DB",
	{ useNewUrlParser: true }
);

const drinkSeed = [
	{
		drink: "Screwdriver",
		ingredient: "Vodka",
		date: new Date(Date.now()),
	},
	{
		drink: "Alabama Slammer Cocktail",
		ingredient: "Southern Comfort",
		date: new Date(Date.now()),
	},
	{
		drink: "Arnold Palmer Demented Version",
		ingredient: "Rum, Lemonade, Iced Tea",
		date: new Date(Date.now()),
	},
	
];

db.Drink.remove({})
	.then(() => db.Drink.collection.insertMany(drinkSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
