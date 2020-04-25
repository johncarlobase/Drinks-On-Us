// Dependencies
const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Items & Users collections and inserts the items & users below

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/drinks_db",
	{ useNewUrlParser: true }
);

const itemSeed = [
	{
		idDrink: "16333",
		strDrink: "Adam Bomb",
		strDrinkThumb: "https://www/cocktaildb.com/images/media/drink/tpxurs1454513016.jpg",
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
