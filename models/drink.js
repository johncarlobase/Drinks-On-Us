// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const drinkSchema = new Schema({
	drink: { type: String },
	ingredient: { type: Array },
	instructions: { type: String},
	glass: { type: String},
	image: { type: String},
	date: { type: Date },
	id: { type: Number }
});

//Setting schema to variable
const Drink = mongoose.model("Drink", drinkSchema);

//Exporting
module.exports = Drink;
