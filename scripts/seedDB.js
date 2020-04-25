// Dependencies
const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Items & Users collections and inserts the items & users below

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/DRINKS_DB",
	{ useNewUrlParser: true }
);

const itemSeed = [
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

db.Item.remove({})
	.then(() => db.Item.collection.insertMany(itemSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
