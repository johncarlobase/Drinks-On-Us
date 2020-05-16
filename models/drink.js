// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Generating Schema
const drinkSchema = new Schema({
	drink: { type: String },
	ingredient1: { type: String },
	ingredient2: { type: String },
	ingredient3: { type: String},
	ingredient4: { type: String },
	ingredient5: { type: String },
	ingredient6: { type: String },
	ingredient7: { type: String },
	ingredient8: { type: String },
	instructions: { type: String},
	measurement1: { type: String },
	measurement2: { type: String },
	measurement3: { type: String },
	measurement4: { type: String },
	measurement5: { type: String },
	measurement6: { type: String },
	measurement7: { type: String },
	measurement8: { type: String },
	instructions: { type: String},
	glass: { type: String},
	image: { type: String},
	date: { type: Date },
	id: { type: Number },
	alcoholic: { type: String},
	category: {type: String}
});
//Setting schema to variable
const Drink = mongoose.model("Drink", drinkSchema);
//Exporting
module.exports = Drink;
