// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const drinkSchema = new Schema({
	drink: { type: String, required: true },
	ingredient: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

//Setting schema to variable
const Drink = mongoose.model("Drink", drinkSchema);

//Exporting
module.exports = Drink;
