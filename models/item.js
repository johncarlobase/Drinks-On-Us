// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const itemSchema = new Schema({
	drink: { type: String, required: true },
	ingredient: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

//Setting schema to variable
const Item = mongoose.model("Item", itemSchema);

//Exporting
module.exports = Item;
